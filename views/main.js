var ov = require('object-values')
var html = require('choo/html')
var raw = require('choo/html/raw')
var nano = require('nanopage')
var Markdown = require('markdown-it')
var md = new Markdown()

module.exports = view

function view (state, emit) {
  emit('DOMTitleChange', 'hypermush')
  var page = new nano(state)

  return html`
    <body class="">
      <nav class="x">
        <a href="/" class="w-bl h-bl bgc-bk bgc-gr--pulse mr1"></a>
        ${nav()}
      </nav>
      <main class="p2 copy">
        ${c()}
      </main>
    </body>
  `

  function nav () {
    return ov(page('/').pages().sortBy('order', 'asc').v()).map(function (item) {
      return html`<a href="${item.url}" class="pr1">${item.title}</a>`
    })
  }
  
  
  function c () {
    if (state.href != '/') {
      return ov(page('/').pages().v()).map(function (item) {
        if (state.href === '/' + item.name) {
          return raw(md.render(item.text))
        }
      })
    } else {
      return raw(md.render(page('/').v('text')))
    }
  }

}
