// Shared by source builds and the committed static release.
(() => {
  let dialog = null;
  let opener = null;
  let previous = document.activeElement;
  const focusables = () => [...dialog.querySelectorAll('button, input, textarea, select, a[href], [tabindex]')]
    .filter(el => !el.disabled && el.tabIndex >= 0 && el.getClientRects().length);
  document.addEventListener('focusin', event => {
    if (!dialog) previous = event.target;
    else if (!dialog.contains(event.target)) (focusables()[0] || dialog).focus();
  });
  new MutationObserver(() => {
    const card = document.querySelector('.v2-form-card');
    if (card && card !== dialog) {
      opener = previous;
      dialog = card;
      dialog.setAttribute('role', 'dialog');
      dialog.setAttribute('aria-modal', 'true');
      dialog.setAttribute('aria-label', 'Contact');
      dialog.tabIndex = -1;
      const close = dialog.querySelector('button');
      if (close) close.setAttribute('aria-label', 'Close contact dialog');
      (close || dialog).focus();
    } else if (!card && dialog) {
      dialog = null;
      const menu = document.querySelector('header button[aria-label="Open menu"]');
      const target = opener && opener.isConnected && opener.getClientRects().length ? opener : menu;
      if (target) target.focus();
      opener = null;
    }
  }).observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('keydown', event => {
    if (!dialog || event.key !== 'Tab') return;
    const items = focusables();
    const current = items.indexOf(document.activeElement);
    if (!items.length) { event.preventDefault(); dialog.focus(); }
    else if (event.shiftKey && current <= 0) { event.preventDefault(); items.at(-1).focus(); }
    else if (!event.shiftKey && (current < 0 || current === items.length - 1)) { event.preventDefault(); items[0].focus(); }
  }, true);
})();
