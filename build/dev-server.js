var jsonServer = require('json-server')
var webpack = require('webpack')
var config = require('./webpack.dev.conf')
var compiler = webpack(config)
var port = process.env.PORT || 5678

// Returns an Express server
var server = jsonServer.create()

// Set default middlewares (logger, static, cors and no-cache)
// server.use(jsonServer.defaults())

// Add custom routes
// server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) })

// Returns an Express router
var router = jsonServer.router('db.json')
server.use('/api', router)

// handle fallback for HTML5 history API
server.use(require('connect-history-api-fallback')())

// serve webpack bundle output
server.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
}))

// enable hot-reload and state-preserving
// compilation error display
server.use(require('webpack-hot-middleware')(compiler))

server.listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Started server at localhost:' + port)
})

