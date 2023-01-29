const WAS_USER_GREETED = 'wasUserGreeted';
const wasUserGreeted = localStorage.getItem(WAS_USER_GREETED);
const welcome = document.getElementById('greatings');
const user = localStorage?.getItem('user');

if (user && !wasUserGreeted) {
  if (welcome) {
    welcome.innerHTML = `Welcome ${user}!`;
    localStorage.setItem(WAS_USER_GREETED, true);
  }
}
