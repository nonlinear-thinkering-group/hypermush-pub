var html = require('choo/html')
var nano = require('nanopage')

module.exports = view

function view (state, emit) {
  var page = new nano(state)
  var title = page().v('title')
  emit('DOMTitleChange', state.title + ' 🍒 ' + title)

  return html`
    <body class="bgc-green">
      <main class="p1">
        <figure class="tac">
          <img src="${page('/error').files().first().v('path')}">
        </figure>
      </main>
    </body>
  `
}
