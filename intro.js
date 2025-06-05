window.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about-section");
  const aboutImg = document.querySelector(".about-img");
  const aboutTextBox = document.querySelector(".about-text-box");

  setTimeout(() => {
    aboutSection.style.opacity = "1";
    aboutSection.style.pointerEvents = "auto";

    setTimeout(() => {
      aboutImg.classList.add("pop-in");

      setTimeout(() => {
        aboutTextBox.classList.add("pop-in");
      }, 600);
    }, 200);
  }, 1200);
});
