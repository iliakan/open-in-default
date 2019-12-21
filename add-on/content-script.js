
document.addEventListener('click', function(e) {
  let a = e.target.closest('a');
  if (!a) return;

  let href = a.getAttribute('href');
  if (href.includes('://')) {
    e.preventDefault();
    e.stopImmediatePropagation();
    browser.runtime.sendMessage({
      cmd: 'open.in.default',
      url: href
    });
  }
}, true);
