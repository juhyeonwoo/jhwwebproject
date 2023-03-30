function displayTime() {
  let date = new Date()
  let time = date.toLocaleTimeString()
  document.getElementById('time').innerHTML = time
}
setInterval(displayTime, 1000)
