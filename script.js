document.addEventListener("DOMContentLoaded", function() {
  "use strict";

  function byId(id) {
    return document.getElementById(id) || null;
  }

  function bySelector(sel, root) {
    root = root || document;
    return root.querySelector(sel);
  }

  function bySelectorAll(sel, root) {
    root = root || document;
    return root.querySelectorAll(sel);
  }

  // ---------- 3-dot menu ----------
  var menuBtn = byId("menu-dots-btn");
  var menuDropdown = byId("menu-dots-dropdown");

  if (menuBtn && menuDropdown) {
    menuBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      var isOpen = menuDropdown.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menuDropdown.setAttribute("aria-hidden", isOpen ? "false" : "true");
    });

    document.addEventListener("click", function() {
      if (menuDropdown.classList.contains("is-open")) {
        menuDropdown.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuDropdown.setAttribute("aria-hidden", "true");
      }
    });

    menuDropdown.addEventListener("click", function(e) {
      e.stopPropagation();
    });
  }

  // ---------- Sidebar toggle (academy) ----------
  var sidebarToggle = byId("sidebar-toggle");
  var sidebar = byId("sidebar");
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", function() {
      sidebar.classList.toggle("is-open");
    });
  }
});
