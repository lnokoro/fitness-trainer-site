"use strict";

document.addEventListener("DOMContentLoaded", function () {

  // Smooth scroll
  document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });

  