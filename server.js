var jsonServer = require('json-server')
var port = process.env.PORT || 3000

// Returns an Express server
var server = jsonServer.create()

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults())

// Add custom routes
// server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) })

// Returns an Express router
var router = jsonServer.router('db.json')
server.use('/api', router)

server.listen(port, () => {
  console.log(`JSON Server is running  on ${port}`)
})
