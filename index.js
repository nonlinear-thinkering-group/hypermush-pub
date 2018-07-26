var choo = require('choo')
var hypha = require('hypha')
var css = require('sheetify')
css('./design/index.js')

var site = hypha.readSiteSync('./content', {
  parent: '/content'
})

var app = choo()

app.use(require('./stores/content')(site))

app.route('/', require('./views/main'))
app.route('*', require('./views/notfound'))

if (!module.parent) app.mount('body')
else module.exports = app
