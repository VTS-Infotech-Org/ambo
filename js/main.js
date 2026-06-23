/* ============================================================
   AMBO Retail — shared header/footer + interactions
   ============================================================ */
(function () {
  "use strict";

  var NAV = [
    { href: "about.html", label: "About Us", key: "about" },
    { href: "products.html", label: "Our Brand & Products", key: "products" },
    { href: "ecosystem.html", label: "Our Ecosystem", key: "ecosystem" },
    { href: "technology.html", label: "Our Technology", key: "technology" },
    { href: "investors.html", label: "Investors", key: "investors" },
    { href: "careers.html", label: "Careers", key: "careers" },
    { href: "index.html#insights", label: "Insights", key: "insights" },
    { href: "contact.html", label: "Contact Us", key: "contact" }
  ];

  function svg(name) {
    var p = {
      phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
      mail: '<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22,6 12,13 2,6"/>',
      pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
      arrow: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
      send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>'
    };
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + p[name] + "</svg>";
  }

  /* social icon glyphs (brand marks) */
  function social(extraClass) {
    var fb = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>';
    var ig = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';
    var yt = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C19.2 5 12 5 12 5s-7.2 0-8.8.5A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C4.8 19 12 19 12 19s7.2 0 8.8-.5a2.5 2.5 0 0 0 1.8-1.8C23 15.2 23 12 23 12zM9.8 15.3V8.7l5.7 3.3z"/></svg>';
    var li = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9z"/></svg>';
    var cls = extraClass || "";
    return '<a href="#" class="' + cls + '" aria-label="Facebook">' + fb + '</a>' +
           '<a href="#" class="' + cls + '" aria-label="Instagram">' + ig + '</a>' +
           '<a href="#" class="' + cls + '" aria-label="YouTube">' + yt + '</a>' +
           '<a href="#" class="' + cls + '" aria-label="LinkedIn">' + li + '</a>';
  }

  function buildHeader(active) {
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.key === active ? ' class="active"' : "") + ">" + n.label + "</a>";
    }).join("");

    return (
      '<header class="site-header"><div class="container"><nav class="nav">' +
        '<a class="nav-logo" href="index.html"><img src="img/logo/ambo-logo.png" alt="AMBO — Trusted Brand Since 1994"></a>' +
        '<div class="nav-menu" id="navMenu">' + links + "</div>" +
        '<div class="nav-cta">' +
          '<a href="investors.html" class="btn btn-red">Investor Relations ' + svg("arrow") + "</a>" +
          '<button class="nav-toggle" id="navToggle" aria-label="Menu"><span></span><span></span><span></span></button>' +
        "</div>" +
      "</nav></div></header>"
    );
  }

  function buildFooter() {
    var quickA = ["About Us::about.html", "Our Brand & Products::products.html",
      "Our Ecosystem::ecosystem.html", "Our Technology::technology.html"];
    var quickB = ["Investors::investors.html", "Careers::careers.html",
      "Insights::index.html#insights", "Contact Us::contact.html"];

    function li(s) { var t = s.split("::"); return '<li><a href="' + t[1] + '">' + t[0] + "</a></li>"; }

    var certs =
      '<div class="cert fssai" title="FSSAI"><b>fssai</b><span>Food Safe</span></div>' +
      '<div class="cert iso" title="ISO Certified"><b>ISO</b><span>Certified</span></div>' +
      '<div class="cert organic" title="Organic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2.5 1.5 5-.5 8.5"/><path d="M2 22c1.5-9 8-10 17-10"/></svg></div>';

    return (
      // ---- newsletter band ----
      '<section class="newsletter"><div class="container nl-inner">' +
        '<div class="nl-left"><span class="nl-ic">' + svg("send") + "</span>" +
          "<p>Stay updated with the latest<br>news, updates and announcements.</p></div>" +
        '<form class="nl-form" id="nlForm"><input type="email" placeholder="Enter your email" aria-label="Email" required>' +
          '<button type="submit" class="btn btn-navy">Subscribe</button></form>' +
        '<div class="nl-social">' + social() + "</div>" +
      "</div></section>" +
      // ---- main footer ----
      '<footer class="site-footer"><div class="container"><div class="footer-top">' +
        '<div class="footer-brand">' +
          '<img src="img/logo/ambo-logo.png" alt="AMBO">' +
          "<p>AMBO Retail India Limited is a fast-growing FMCG company building trusted consumer brands through a proprietary Direct-to-Retail distribution model.</p>" +
        "</div>" +
        '<div class="footer-col"><h5>Quick Links</h5><div class="ql-grid">' +
          "<ul>" + quickA.map(li).join("") + "</ul><ul>" + quickB.map(li).join("") + "</ul>" +
        "</div></div>" +
        '<div class="footer-col"><h5>Contact Us</h5><ul class="footer-contact">' +
          "<li>" + svg("pin") + "<span>AMBO Retail India Limited<br>Corporate Office:<br>2, Camac Street, 3rd Floor,<br>Kolkata – 700016, West Bengal, India</span></li>" +
          '<li>' + svg("phone") + '<a href="tel:18001236066">1800 123 6066</a></li>' +
          '<li>' + svg("mail") + '<a href="mailto:care@amboretail.com">care@amboretail.com</a></li>' +
        "</ul></div>" +
        '<div class="footer-col"><h5>Certifications</h5><div class="cert-row">' + certs + "</div></div>" +
      "</div></div>" +
      '<div class="footer-bottom"><div class="container">' +
        "<span>© 2025 AMBO Retail India Limited. All Rights Reserved.</span>" +
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

  // ---- Newsletter (no backend) ----
  function newsletterInit() {
    var form = document.getElementById("nlForm");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector("input");
      input.value = "";
      input.placeholder = "Thank you! You're subscribed.";
    });
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
    newsletterInit();
    revealInit();
    countersInit();
    filterInit();
  });
})();
