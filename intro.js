window.addEventListener("DOMContentLoaded", () => {
  const aboutWrapper = document.querySelector(".about-wrapper");
  const aboutHeader = document.querySelector(".about-header");
  const aboutSection = document.querySelector(".about-section");
  const aboutImg = document.querySelector(".about-img");
  const aboutTextBox = document.querySelector(".about-text-box");

  // After main header fade-in (~0.6s), fade in About Me header and wrapper
  setTimeout(() => {
    aboutWrapper.style.animationPlayState = "running";
    aboutHeader.style.animationPlayState = "running";

    // Then fade in about section container
    setTimeout(() => {
      aboutSection.style.opacity = "1";
      aboutSection.style.pointerEvents = "auto";

      // Pop in the image first
      setTimeout(() => {
        aboutImg.classList.add("pop-in");

        // Then pop in the text box after image animation (600ms)
        setTimeout(() => {
          aboutTextBox.classList.add("pop-in");
        }, 600);
      }, 200);
    }, 600); // after About Me header animation
  }, 600); // after main header fadeIn
});
