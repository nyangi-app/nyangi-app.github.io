(function () {
  var header = '<header><a class="brand" href="/">Nyangi Games</a></header>';
  var footer = [
    '<footer>',
    '  <nav>',
    '    <a href="/support/">Support</a>',
    '    <a href="/privacy/">Privacy Policy</a>',
    '    <a href="/impressum/">Impressum</a>',
    '  </nav>',
    '  <p class="footer-meta">',
    '    &copy; 2026 Nyangi Games &middot;',
    '    <a href="mailto:nyangi.info@gmail.com">nyangi.info@gmail.com</a>',
    '  </p>',
    '</footer>'
  ].join('\n');

  document.addEventListener('DOMContentLoaded', function () {
    document.body.insertAdjacentHTML('afterbegin', header);
    document.body.insertAdjacentHTML('beforeend', footer);
  });
})();
