let prev = Date.now();

function fallback(fn) {
  const cur = Date.now();
  const ms = Math.max(0, 16 - (cur - prev));
  const id = setTimeout(fn, ms);

  prev = cur + ms;

  return id;
}

const root = window;

const iRaf =
  root.requestAnimationFrame || root.webkitRequestAnimationFrame || fallback;

const iCancel =
  root.cancelAnimationFrame ||
  root.webkitCancelAnimationFrame ||
  root.clearTimeout;

function raf(fn) {
  return iRaf.call(root, fn);
}

function cancel(id) {
  iCancel.call(root, id);
}
