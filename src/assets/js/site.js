// Mobile menu
(function () {
  var btn = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (btn && links) {
    btn.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Abstract / figure toggles on the Research page
  function setPanel(button, open) {
    var panel = document.getElementById(button.getAttribute("aria-controls"));
    if (!panel) return;
    panel.hidden = !open;
    button.setAttribute("aria-expanded", open ? "true" : "false");
  }
  document.querySelectorAll(".paper-actions .pill[aria-controls]").forEach(function (b) {
    b.addEventListener("click", function () {
      setPanel(b, b.getAttribute("aria-expanded") !== "true");
    });
  });
  document.querySelectorAll("[data-toggle-all]").forEach(function (t) {
    t.addEventListener("click", function () {
      var open = t.getAttribute("data-toggle-all") === "open";
      document.querySelectorAll(".paper-actions .pill[aria-controls]").forEach(function (b) {
        setPanel(b, open);
      });
    });
  });

  // Hide "Expand all" when there is nothing to expand
  var bar = document.querySelector(".toolbar");
  if (bar && !document.querySelector(".paper-actions .pill[aria-controls]")) bar.hidden = true;
})();
