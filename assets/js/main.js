

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      if (document.querySelector('.mobile-nav-active')) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      }
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');

  if (preloader) {
    // Timeout de seguridad de 2 segundos
    setTimeout(() => {
      preloader.remove();
    }, 2000);
  
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });


  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

})();

document.addEventListener('DOMContentLoaded', function () {
  // Video modal elements
  var videoModal = document.getElementById("videoModal");
  var videoBtn = document.getElementById("seeInActionBtn");
  var videoSpan = videoModal ? videoModal.querySelector(".close") : null;
  var video = document.getElementById("videoPlayer");

  // Demo modal elements
  var demoModal = document.getElementById("demoModal");
  var demoBtn = document.getElementById("requestDemoBtn");
  var aboutDemoBtn = document.getElementById("aboutRequestDemoBtn");
  var ctaDemoBtn = document.getElementById("ctaRequestDemo");
  var demoSpan = demoModal ? demoModal.querySelector(".close") : null;
  var form = document.getElementById("demoForm");

  function openModal(modal) {
    if (modal) {
      modal.style.display = "block";
      setTimeout(() => {
        modal.classList.add('show');
      }, 10);
    }
  }

  function closeModal(modal) {
    if (modal) {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = "none";
        if (modal === videoModal && video) {
          video.pause();
        }
      }, 300);
    }
  }

  // Video modal event listeners
  if (videoBtn) {
    videoBtn.onclick = function (e) {
      e.preventDefault();
      openModal(videoModal);
      if (video) video.play();
    }
  }

  if (videoSpan) {
    videoSpan.onclick = function () {
      closeModal(videoModal);
    }
  }

  // Demo modal open events
  function handleDemoButtonClick(e) {
    e.preventDefault();
    openModal(demoModal);
  }

  [demoBtn, aboutDemoBtn, ctaDemoBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', handleDemoButtonClick);
    }
  });

  if (demoSpan) {
    demoSpan.onclick = function () {
      closeModal(demoModal);
    }
  }

  // Close modal on outside click
  window.onclick = function (event) {
    if (event.target === videoModal) {
      closeModal(videoModal);
    } else if (event.target === demoModal) {
      closeModal(demoModal);
    }
  }

  // Close modal on Escape key
  document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
      closeModal(videoModal);
      closeModal(demoModal);
    }
  });

  // ✅ Form submission via fetch + alert
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch("send_demo.php", {
        method: "POST",
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          if (data.status === "ok") {
            alert("✅ Gracias por tu solicitud. Te contactaremos pronto.");
            form.reset();
            closeModal(demoModal);
          } else {
            alert("⚠️ Error al enviar: " + data.message);
          }
        })
        .catch(error => {
          alert("❌ Error inesperado: " + error.message);
        });
    });
  }
});

