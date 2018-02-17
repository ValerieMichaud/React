export function toggleActive(selector) {
  const element = document.body.querySelectorAll(selector);
  element.classList.toggle('is-active');
}