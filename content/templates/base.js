window.ga = function () { ga.q.push(arguments) }
ga.l = +new Date
ga.q = [['create', 'UA-99854195-1', 'auto'], ['send', 'pageview']]

document.addEventListener('click', function (e) {
  if (e.target.tagName.toLowerCase() === 'a') {
    e.preventDefault()
    url = e.target.href
    ga('send', 'event', 'link', 'click', url, {
      transport: 'beacon',
      hitCallback: function () { document.location = url }
    })
  }
})
