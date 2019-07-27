// 直接请求被打包到dist下的静态资源
const express = require('express')
const history = require('connect-history-api-fallback')
const port = 9527

express()
  .use(history())
  .use(express.static('dist'))
  .listen(port)

console.log(`The #Static-Web-App# listening on port ${port}`)
