function showToast(text) {
  var x = document.getElementById('toast')
  x.className = 'show'
  x.innerText = text
  setTimeout(function () { x.className = x.className.replace('show', ''); }, 3000)
}