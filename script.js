"use strict";

document.addEventListener("DOMContentLoaded", function () {

  // Smooth scroll
  document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });

   // jQuery accordion
  $("#accordion").accordion();

  // Slideshow
  let slides = document.querySelectorAll(".slide");
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);

   // AJAX load JSON
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("resultsContainer");

      data.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("resultCard");
        div.innerHTML = `
          <h3>${item.name}</h3>
          <p>${item.result}</p>
        `;
        container.appendChild(div);
      });
    });
  // Web Storage
  const form = document.getElementById("contactForm");
  const welcome = document.getElementById("welcomeMessage");

  if (localStorage.getItem("userName")) {
    welcome.textContent = "Welcome back, " + localStorage.getItem("userName") + "!";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    localStorage.setItem("userName", name);

    welcome.textContent = "Thanks, " + name + "! We'll be in touch.";

    form.reset();
  });

});
