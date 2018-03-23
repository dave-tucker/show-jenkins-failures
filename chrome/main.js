content = document.getElementById('nodeGraph')

failures = document.createElement('table')
failures.className = 'pane bigtable'
failures.appendChild(document.createElement('tbody'))
failures.appendChild(content.childNodes[0].childNodes[0].childNodes[0].cloneNode(true))

Array.from(document.getElementsByClassName('icon-red')).map(f => f.parentNode.parentNode).forEach(f => {
  failures.appendChild(f.cloneNode(true))
})

content.insertBefore(document.createElement('br'), content.childNodes[0])
content.insertBefore(failures, content.childNodes[0])