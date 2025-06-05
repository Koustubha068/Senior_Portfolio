const background = document.querySelector('.background');

    function createBubble() {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      const size = Math.random() * 40 + 20;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.bottom = `-60px`;
      background.appendChild(bubble);

      let pos = -60;
      const speed = Math.random() * 1 + 0.5;

      function animate() {
        pos += speed;
        bubble.style.transform = `translateY(-${pos}px)`;

        if (pos < window.innerHeight + 100) {
          requestAnimationFrame(animate);
        } else {
          bubble.remove();
        }
      }

      animate();
    }

    // Create initial set of bubbles immediately and animate a bunch instantly
    for (let i = 0; i < 30; i++) {
      setTimeout(createBubble, i * 50);
    }

    // Continue to generate bubbles over time
    setInterval(createBubble, 1000);