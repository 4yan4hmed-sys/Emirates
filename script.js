
document.addEventListener("DOMContentLoaded", () => {
  // Reveal elements when they enter the viewport.
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("visible"));
  }

  // Demo flight search.
  const flightForm = document.getElementById("flightForm");
  const flightMessage = document.getElementById("flightMessage");

  if (flightForm) {
    flightForm.addEventListener("submit", (event) => {
      event.preventDefault();

      flightMessage.textContent =
        "Flight search demo: connect this form to a booking API to find real flights.";

      flightMessage.style.color = "#c8102e";
    });
  }

  // Demo contact form.
  const contactForm = document.getElementById("contactForm");
  const contactMessage = document.getElementById("contactMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      contactMessage.textContent =
        "Thank you! This is a demo form. No message has been sent.";

      contactMessage.style.color = "#c8102e";
      contactForm.reset();
    });
  }
});
