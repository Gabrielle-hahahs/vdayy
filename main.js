document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("typeText");
  if (!el) return;

  const text = el.innerText;
  el.innerText = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      el.innerText += text[i];
      i++;
      setTimeout(type, 35);
    }
  }
  type();
});