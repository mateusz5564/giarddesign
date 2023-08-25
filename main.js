// menu dropdown (very basic)
const navBtnOffer = document.querySelector("#nav-btn-offer");
const navBtnOfferArrow = navBtnOffer.querySelector("img");
const offerDropdown = document.querySelector("#offer-dropdown");

navBtnOffer.addEventListener("click", e => {
  if (offerDropdown.classList.contains("offer-dropdown-active")) {
    navBtnOfferArrow.classList.remove("nav-btn-offer-arrow-active");
    offerDropdown.classList.remove("offer-dropdown-active");
  } else {
    navBtnOfferArrow.classList.add("nav-btn-offer-arrow-active");
    offerDropdown.classList.add("offer-dropdown-active");
  }
});

// photos
// masonry
const photosContainer = document.querySelector(".photos");
const macy = Macy({
  container: photosContainer,
  columns: 3,
  trueOrder: true,
  margin: { x: 42, y: 42 },

  breakAt: {
    1000: {
      margin: {
        x: 20,
        y: 20,
      },
      columns: 2,
    },
    500: {
      margin: {
        x: 0,
        y: 20,
      },
      columns: 1,
    },
  },
});

// expand photos
const expandBtnPhotos = document.querySelector("#expand-btn-photos");
const photosGradient = document.querySelector("#photos-gradient");

expandBtnPhotos.addEventListener("click", () => {
  photosContainer.classList.add("photos-container-expanded");
  expandBtnPhotos.classList.add("hidden");
  photosGradient.classList.add("hidden");
});

// fancybox
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

//swiper
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 500,
  autoHeight: true,

  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
