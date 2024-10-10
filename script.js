let id = 'website'
let sites = {
  website: 'https://JavaCreates.com/search?q=%s', 
  youtube: 'https://www.youtube.com/c/JavaCreates/search?query=%s', 
  twitter: 'https://twitter.com/search?q=JavaCreates %s&src=typed_query&f=top', 
}
let names = {
  website: 'Website', 
  youtube: 'YouTube', 
  twitter: 'Twitter', 
}
document.getElementById('method').innerHTML = names[id]

let element = document.getElementById("query")
function search() {
  let url = sites[id]
  var query = document.getElementById("query").value
  url = url.replace('%s', query)
  location.href = url
}

function checkForEnter(event) {
  var x = event.keyCode;
  if (x == 13) {
    search()
  }
}

let nav = document.getElementsByTagName('nav')[0]
let ul = nav.getElementsByTagName('ul')[0]
let liS = ul.querySelectorAll('li')
liS.forEach(function(li) {
  let button = li.getElementsByTagName('button')[0]
  button.addEventListener('click', function(event) {
    id = event.srcElement.parentNode.id
    document.getElementById('method').innerHTML = names[id]
  })
})