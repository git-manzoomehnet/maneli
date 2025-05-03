document.querySelectorAll(".card").forEach((card) => {
  const tilt = card.querySelector("[data-tilt]");
  const img = card.querySelector(".imgS");

  const scale = parseFloat(tilt.getAttribute("data-tilt-scale")) || 1;
  const speed = parseFloat(tilt.getAttribute("data-tilt-speed")) || 300;

  tilt.style.transformStyle = "preserve-3d";
  tilt.style.transition = `transform ${speed}ms ease`;
  img.style.transition = `transform 0.2s ease`;

  card.addEventListener("mouseenter", () => {
    const rect = card.getBoundingClientRect();
    card.dataset.width = rect.width;
    card.dataset.height = rect.height;
    card.dataset.left = rect.left;
    card.dataset.top = rect.top;
  });

  card.addEventListener("mousemove", (e) => {
    const width = card.dataset.width;
    const height = card.dataset.height;
    const left = card.dataset.left;
    const top = card.dataset.top;

    const x = e.clientX - left;
    const y = e.clientY - top;

    // Tilt
    const rotateX = ((y / height) - 0.5) * -40;
    const rotateY = ((x / width) - 0.5) * 40;
    tilt.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;

    // Move image
    const moveX = ((x / width) - 0.5) * 20;
    const moveY = ((y / height) - 0.5) * 20;
    img.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  card.addEventListener("mouseleave", () => {
    tilt.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    img.style.transform = `translate(0px, 0px)`;
  });
});
