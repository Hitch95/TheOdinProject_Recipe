window.addEventListener("load", loader);

function loader() {
  const TLLOAD = gsap.timeline();

  TLLOAD.to(".images-container", {
    height: 400,
    duration: 1.3,
    delay: 0.4,
    ease: "power2.out",
  })
    .to(
      ".bloc-txt",
      { height: "auto", duration: 0.6, ease: "power2.out" },
      "-=0.8"
    )
    .to(".bloc-txt h2", { y: 0, ease: "power2.out" }, "-=0.6")

    .to(".f2", { y: 0, duration: 0.6, ease: "power2.out" })
    .add(() => {
      document.querySelector(".flip-img1").style.backgroundImage =
        "url('./ressources/image1.webp')";
    })
    .to(".f2", { y: "-100%" })

    .to("load-container", { opacity: 0, duration: 0.8, delay: 0.7 })
    .add(() => {
      document.querySelector(".load-container").style.display = "none";
    })
    .add(() => {
      document.querySelector("video").play();
    }, "-=0.8");
}


// Hamburger
const hamburgerToggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
  hamburgerToggler.classList.toggle("open");

  const ariaToggle =
    hamburgerToggler.getAttribute("aria-expanded") === "true"
      ? "false"
      : "true";
  hamburgerToggler.setAttribute("aria-expanded", ariaToggle);

  navLinksContainer.classList.toggle("open");
};
hamburgerToggler.addEventListener("click", toggleNav);

new ResizeObserver((entries) => {
  if (entries[0].contentRect.width <= 900) {
    navLinksContainer.style.transition = "transform 0.3s ease-out";
  } else {
    navLinksContainer.style.transition = "none";
  }
}).observe(document.body);


function subNavElementAppear () {
  if (ariaToggle === true) {
    navLinksContainer.style.display = "flex";
  }
}
hamburgerToggler.addEventListener("click", subNavElementAppear);
