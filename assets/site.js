(function () {
  "use strict";

  var root = document.documentElement;
  var menuButton = document.querySelector("[data-menu-toggle]");
  var mobileNavigation = document.getElementById("mobile-navigation");
  var closeMenuLinks = document.querySelectorAll("[data-close-menu]");
  var revealElements = document.querySelectorAll("[data-reveal]");
  var faqItems = document.querySelectorAll(".faq-item");
  var scrollVideos = document.querySelectorAll("[data-scroll-video]");

  function setMenu(open) {
    if (!menuButton || !mobileNavigation) return;
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    mobileNavigation.hidden = !open;
  }

  if (menuButton && mobileNavigation) {
    menuButton.addEventListener("click", function () {
      setMenu(menuButton.getAttribute("aria-expanded") !== "true");
    });
    closeMenuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });
  }

  faqItems.forEach(function (item) {
    var button = item.querySelector("button");
    var answer = item.querySelector(".faq-answer");
    var marker = button ? button.querySelector("b") : null;
    if (!button || !answer) return;

    button.addEventListener("click", function () {
      var willOpen = button.getAttribute("aria-expanded") !== "true";
      faqItems.forEach(function (otherItem) {
        var otherButton = otherItem.querySelector("button");
        var otherAnswer = otherItem.querySelector(".faq-answer");
        var otherMarker = otherButton ? otherButton.querySelector("b") : null;
        if (!otherButton || !otherAnswer) return;
        otherItem.classList.remove("open");
        otherButton.setAttribute("aria-expanded", "false");
        otherAnswer.hidden = true;
        if (otherMarker) otherMarker.textContent = "+";
      });
      if (willOpen) {
        item.classList.add("open");
        button.setAttribute("aria-expanded", "true");
        answer.hidden = false;
        if (marker) marker.textContent = "-";
      }
    });
  });

  if (scrollVideos.length && "IntersectionObserver" in window) {
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function loadVideo(video) {
      if (video.dataset.loaded === "true") return;
      video.querySelectorAll("source[data-src]").forEach(function (source) {
        source.src = source.dataset.src;
      });
      video.dataset.loaded = "true";
      video.load();
    }

    if (!reducedMotion) {
      var videoLoadObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          loadVideo(entry.target);
          videoLoadObserver.unobserve(entry.target);
        });
      }, { rootMargin: "260px 0px", threshold: 0.01 });

      var videoPlayObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var video = entry.target;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
            if (video.dataset.inView === "true") return;
            video.dataset.inView = "true";
            loadVideo(video);
            if (video.readyState > 0) video.currentTime = 0;
            var playAttempt = video.play();
            if (playAttempt && typeof playAttempt.catch === "function") {
              playAttempt.catch(function () {});
            }
          } else if (entry.intersectionRatio < 0.25) {
            video.dataset.inView = "false";
            video.pause();
            if (video.readyState > 0) video.currentTime = 0;
          }
        });
      }, { threshold: [0, 0.25, 0.55, 1] });

      scrollVideos.forEach(function (video) {
        videoLoadObserver.observe(video);
        videoPlayObserver.observe(video);
      });
    }
  }

  if ("IntersectionObserver" in window) {
    root.classList.add("motion-ready");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-visible", "true");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7%" });

    revealElements.forEach(function (element) {
      observer.observe(element);
    });

    window.setTimeout(function () {
      revealElements.forEach(function (element) {
        element.setAttribute("data-visible", "true");
      });
    }, 1600);
  } else {
    revealElements.forEach(function (element) {
      element.setAttribute("data-visible", "true");
    });
  }
}());
