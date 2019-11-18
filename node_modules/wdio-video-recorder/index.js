/*
 * Module to record the webdriver X11 display via ffmpeg
 * © 2018, Praveen Prasannan
 */

'use strict'

// Function to create a directory. It's kinda similar to the shell command "mkdir -p".
function createDirectory (dir, mode) {
  const path = require('path')
  const fileSys = require('fs')
  dir = path.resolve(dir)
  if (fileSys.existsSync(dir)) return dir
  try {
    fileSys.mkdirSync(dir, mode)
    return dir
  } catch (error) {
    if (error.code === 'ENOENT') {
      return createDirectory(path.dirname(dir), mode) && createDirectory(dir, mode)
    }
    throw error
  }
}

module.exports = {
  start: function (browser, done) {
    const settings = browser.globals.test_settings
    const videoSettings = settings.videos
    const currentTest = browser.currentTest
    if (videoSettings && videoSettings.enabled) {
      const dateTime = new Date().toISOString().split('.')[0].replace(/:/g, '-')
      const format = videoSettings.format || 'mp4'
      const fileName = `${currentTest.module}-${dateTime}.${format}`
      const path = require('path')
      const file = path.resolve(path.join(videoSettings.path || '', fileName))
      createDirectory(path.dirname(file))
      browser.ffmpeg = require('child_process').execFile(
        'ffmpeg',
        [
          '-video_size',
          videoSettings.resolution || '1440x900',
          '-r',
          videoSettings.fps || 15,
          '-f',
          'x11grab',
          '-i',
          settings.selenium_host + (videoSettings.display || ':60'),
          '-pix_fmt',
          videoSettings.pixel_format || 'yuv420p', // yuv420p makes vidoes compatable with Quicktime
          '-loglevel',
          'error',
          file
        ],
        function (error, stdout, stderr) {
          browser.ffmpeg = null
          if (error) {
            // "image data event_error" will occure and can be ignored.
            const stderrLines = stderr.split('\n')
            if (stderrLines.length !== 2 ||
                !/x11grab .* image data event_error/.test(stderrLines[0])) {
              throw error
            }
          }
        }
      ).on('close', function () {
        if (videoSettings.delete_on_success && !currentTest.results.failed) {
          require('fs').unlink(file)
        }
      })
    }
    done()
  },
  stop: function (browser, done) {
    const ffmpeg = browser.ffmpeg
    if (ffmpeg) {
      ffmpeg.on('close', function () { done() }).kill()
    } else {
      done()
    }
  }
}
