function showToast(text, callback, success = true) {
  var x = document.getElementById('toast')
  x.className = 'show'
  x.style.backgroundColor = success ? '#1DA64A' : '#f5333f'
  x.innerText = text
  setTimeout(function () { x.className = x.className.replace('show', ''); callback() }, 3000)
}