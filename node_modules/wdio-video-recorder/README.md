![alt text](https://webdriver.io/img/webdriverio.png)

# WebdriverIO test recording with ffmpeg
Records [WebdriverIO](http://webdriver.io/) tests.  
Uses [ffmpeg](https://www.ffmpeg.org/) to capture screen (remote)
screen.

## Install

```sh
npm install wdio-video-recorder
```

## Usage

Add the following `beforeEach`/`afterEach` hooks:
```js
module.exports = {
  beforeEach: function (browser, done) {
    require('wdio-video-recorder').start(browser, done)
  },
  afterEach: function (browser, done) {
    require('wdio-video-recorder').stop(browser, done)
  }
}
```

Enable the video screen recording in your test settings:
```json
{
  "test_settings": {
    "default": {
      "videos": {
        "enabled": true,
        "delete_on_success": false,
        "path": "",
        "format": "mp4",
        "resolution": "1440x900",
        "fps": 15,
        "display": ":60",
        "pixel_format": "yuv420p"
      }
    }
  }
}
```

## Author
[Praveen Prasannan](https://github.com/praveenprasannan/)

## Docs & further reading

* http://webdriver.io
* https://blueimp.net
