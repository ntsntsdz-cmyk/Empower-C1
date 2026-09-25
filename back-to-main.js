(() => {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  const mainPage = new URL('./index.html', window.location.href).href;

  // Keep the button off the course navigator itself, but show it on every lesson
  // page, including names such as 1Aindex.html and 2Bindex.html.
  if (currentFile === 'index.html') return;
  if (document.querySelector('[data-back-to-main]')) return;

  const style = document.createElement('style');
  style.textContent = `
    .back-to-main {
      position: fixed;
      top: 14px;
      right: 14px;
      z-index: 10000;
      display: inline-flex;
      align-items: center;
      gap: .35rem;
      padding: .5rem .8rem;
      border: 0;
      border-radius: 999px;
      background: linear-gradient(135deg, #f59e0b, #ea580c);
      color: #fff;
      font: 700 .8rem/1.2 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      text-decoration: none;
      box-shadow: 0 4px 12px rgba(15, 23, 42, .2);
    }
    .back-to-main:hover { filter: brightness(1.08); }
    @media (max-width: 820px) {
      .back-to-main { top: 10px; right: 10px; font-size: .72rem; }
    }
  `;
  document.head.appendChild(style);

  const link = document.createElement('a');
  link.href = mainPage;
  link.className = 'back-to-main';
  link.dataset.backToMain = '';
  link.textContent = '← Go back to main page';
  link.setAttribute('aria-label', 'Go back to main page');
  document.body.appendChild(link);
})();
