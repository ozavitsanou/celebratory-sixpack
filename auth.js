// Front-door passcode gate. Include as the first script in <head> of every
// prototype page. Redirects to login.html when the session isn't unlocked.
(function () {
  var KEY = 'sixpack_unlocked';
  var here = location.pathname.split('/').pop() || 'index.html';
  if (here === 'login.html') return;
  if (sessionStorage.getItem(KEY) === '1') return;
  var next = encodeURIComponent(here + location.search + location.hash);
  location.replace('login.html?next=' + next);
})();
