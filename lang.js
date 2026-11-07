// 언어 고르기: ?lang= → #en → 지난번 선택 → 기기 언어(한국어면 ko, 아니면 en)
(function () {
  var root = document.documentElement;
  function pick() {
    try {
      var q = new URLSearchParams(location.search).get('lang');
      if (q) return q;
    } catch (e) {}
    if (location.hash === '#en') return 'en';
    try {
      var saved = localStorage.getItem('lang');
      if (saved) return saved;
    } catch (e) {}
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || '';
    return nav.toLowerCase().indexOf('ko') === 0 ? 'ko' : 'en';
  }
  function apply(lang) {
    lang = lang === 'en' ? 'en' : 'ko';
    root.setAttribute('data-lang', lang);
    root.lang = lang;
    var t = root.getAttribute('data-title-' + lang);
    if (t) document.title = t;
    return lang;
  }
  var current = apply(pick());
  // 영어로 볼 때 #kokcut 같은 주소는 #kokcut-en으로 이동
  function jump() {
    var id = location.hash.slice(1);
    if (!id || id === 'en') return;
    var el = document.getElementById(id);
    if (el && el.offsetParent === null) el = document.getElementById(id + '-en') || document.getElementById(id.replace(/-en$/, ''));
    if (el && el.offsetParent !== null) el.scrollIntoView();
  }
  window.addEventListener('hashchange', jump);
  document.addEventListener('DOMContentLoaded', function () {
    jump();
    var btn = document.querySelector('.lang-btn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      current = apply(current === 'ko' ? 'en' : 'ko');
      try { localStorage.setItem('lang', current); } catch (e) {}
      try {
        var u = new URL(location.href);
        u.searchParams.set('lang', current);
        if (u.hash === '#en') u.hash = '';
        history.replaceState(null, '', u);
      } catch (e) {}
    });
  });
})();
