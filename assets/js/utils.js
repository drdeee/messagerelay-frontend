function showToast(text, callback) {
  var x = document.getElementById('toast')
  x.className = 'show'
  x.innerText = text
  setTimeout(function () { x.className = x.className.replace('show', ''); callback() }, 3000)
}