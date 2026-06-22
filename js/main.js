/* ============================================================
   AMBO Retail — shared header/footer + interactions
   ============================================================ */
(function () {
  "use strict";

  var NAV = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "about.html", label: "Our Story", key: "about" },
    { href: "products.html", label: "Our Products", key: "products" },
    { href: "ecosystem.html", label: "The Ecosystem", key: "ecosystem" },
    { href: "technology.html", label: "Technology", key: "technology" },
    { href: "team.html", label: "Our Team", key: "team" },
    { href: "investors.html", label: "Investors", key: "investors" },
    { href: "careers.html", label: "Careers", key: "careers" },
    { href: "contact.html", label: "Contact", key: "contact" }
  ];

  function svg(name) {
    var p = {
      phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
      mail: '<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22,6 12,13 2,6"/>',
      pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
      arrow: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>'
    };
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + p[name] + "</svg>";
  }

  function buildHeader(active) {
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.key === active ? ' class="active"' : "") + ">" + n.label + "</a>";
    }).join("");

    return (
      '<div class="topbar"><div class="container">' +
        '<div class="tb-left">' +
          '<a href="tel:+913341256066">📞 (033) 4125 6066</a>' +
          '<a href="mailto:care@amboretail.com">✉ care@amboretail.com</a>' +
          '<span>Trusted Brand Since 1994</span>' +
        "</div>" +
        '<div class="tb-right">' +
          '<a href="#" aria-label="Facebook">f</a>' +
          '<a href="#" aria-label="Instagram">◎</a>' +
          '<a href="#" aria-label="YouTube">▶</a>' +
          '<a href="#" aria-label="LinkedIn">in</a>' +
        "</div>" +
      "</div></div>" +
      '<header class="site-header"><div class="container"><nav class="nav">' +
        '<a class="nav-logo" href="index.html"><img src="img/logo/ambo-logo.png" alt="AMBO — Trusted Brand Since 1994"></a>' +
        '<div class="nav-menu" id="navMenu">' + links + "</div>" +
        '<div class="nav-cta">' +
          '<a href="careers.html" class="btn btn-red">Work With Us ' + svg("arrow") + "</a>" +
          '<button class="nav-toggle" id="navToggle" aria-label="Menu"><span></span><span></span><span></span></button>' +
        "</div>" +
      "</nav></div></header>"
    );
  }

  function buildFooter() {
    var quick = ["Home::index.html", "Our Story::about.html", "The Ecosystem::ecosystem.html",
      "Technology::technology.html", "Investors::investors.html", "Insights::index.html#insights"];
    var brands = ["Edible Oils", "Ghee", "Staples", "Pulses", "Snacks & Namkeen",
      "Biscuits & Cookies", "Personal Care", "Oral Care", "Beverages"];

    function liQuick(s) { var t = s.split("::"); return '<li><a href="' + t[1] + '">' + t[0] + "</a></li>"; }
    function liBrand(s) { return '<li><a href="products.html">' + s + "</a></li>"; }

    return (
      '<footer class="site-footer"><div class="container"><div class="footer-top">' +
        '<div class="footer-brand">' +
          '<img src="img/logo/ambo-logo.png" alt="AMBO">' +
          "<p>AMBO Retail India Limited is a fast-growing FMCG company building trusted consumer brands through a technology-driven Direct-to-Retail network.</p>" +
          '<div class="footer-social">' +
            '<a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">◎</a>' +
            '<a href="#" aria-label="YouTube">▶</a><a href="#" aria-label="LinkedIn">in</a>' +
          "</div>" +
        "</div>" +
        '<div class="footer-col"><h5>Quick Links</h5><ul>' + quick.map(liQuick).join("") + "</ul></div>" +
        '<div class="footer-col"><h5>Our Brands</h5><ul>' + brands.map(liBrand).join("") + "</ul></div>" +
        '<div class="footer-col"><h5>Corporate Office</h5><ul class="footer-contact">' +
          "<li>" + svg("pin") + "<span>AMBO Retail India Limited<br>2, Canada Street, 3rd Floor,<br>Kolkata – 700016, West Bengal, India</span></li>" +
          '<li>' + svg("phone") + '<a href="tel:+913341256066">(033) 4125 6066</a></li>' +
          '<li>' + svg("mail") + '<a href="mailto:care@amboretail.com">care@amboretail.com</a></li>' +
        "</ul></div>" +
      "</div></div>" +
      '<div class="footer-bottom"><div class="container">' +
        "<span>© 2026 AMBO Retail India Limited. All Rights Reserved.</span>" +
        '<span><a href="#">Privacy Policy</a> &nbsp;|&nbsp; <a href="#">Terms &amp; Conditions</a></span>' +
      "</div></div></footer>"
    );
  }

  // ---- Inject header/footer ----
  function inject() {
    var h = document.getElementById("site-header");
    if (h) h.outerHTML = buildHeader(h.getAttribute("data-active") || "");
    var f = document.getElementById("site-footer");
    if (f) f.outerHTML = buildFooter();
  }

  // ---- Mobile nav ----
  function navInit() {
    var toggle = document.getElementById("navToggle");
    var menu = document.getElementById("navMenu");
    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        toggle.classList.toggle("open");
        menu.classList.toggle("open");
      });
      menu.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          toggle.classList.remove("open");
          menu.classList.remove("open");
        });
      });
    }
    var header = document.querySelector(".site-header");
    if (header) {
      window.addEventListener("scroll", function () {
        header.classList.toggle("scrolled", window.scrollY > 10);
      });
    }
  }

  // ---- Scroll reveal ----
  function revealInit() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach(function (e) { e.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  }

  // ---- Animated counters ----
  function countersInit() {
    var nums = document.querySelectorAll("[data-count]");
    if (!nums.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, target = parseFloat(el.getAttribute("data-count"));
        var suffix = el.getAttribute("data-suffix") || "";
        var prefix = el.getAttribute("data-prefix") || "";
        var dec = (target % 1 !== 0) ? 1 : 0;
        var start = null, dur = 1400;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var val = (target * (1 - Math.pow(1 - p, 3)));
          el.textContent = prefix + val.toFixed(dec).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    }, { threshold: 0.5 });
    nums.forEach(function (n) { io.observe(n); });
  }

  // ---- Product category filter ----
  function filterInit() {
    var pills = document.querySelectorAll(".cat-pill[data-filter]");
    var items = document.querySelectorAll(".product-card[data-cat]");
    if (!pills.length) return;
    pills.forEach(function (pill) {
      pill.addEventListener("click", function () {
        var f = pill.getAttribute("data-filter");
        pills.forEach(function (p) { p.classList.remove("active"); });
        pill.classList.add("active");
        items.forEach(function (it) {
          var show = f === "all" || it.getAttribute("data-cat") === f;
          it.style.display = show ? "" : "none";
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    inject();
    navInit();
    revealInit();
    countersInit();
    filterInit();
    document.getElementById("year") && (document.getElementById("year").textContent = "2026");
  });
})();
