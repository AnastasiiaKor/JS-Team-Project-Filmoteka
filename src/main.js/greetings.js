const welcome = document.getElementById('greatings');
const user = localStorage.getItem('username');
  
if (welcome && user) {
  welcome.innerHTML = `Welcome ${user}!`;
  localStorage.removeItem('username');
}