document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form submission
  
      const name = form.querySelector('input[type="text"]');
      const age = form.querySelector('input[type="number"]');
      const gender = form.querySelectorAll('input[name="Gender"]');
      const email = form.querySelector('input[type="email"]');
      const resume = form.querySelector('input[type="file"]');
  
      let isGenderSelected = false;
      gender.forEach(g => {
        if (g.checked) isGenderSelected = true;
      });
  
      if (
        name.value.trim() === "" ||
        age.value.trim() === "" ||
        !isGenderSelected ||
        email.value.trim() === "" ||
        resume.files.length === 0
      ) {
        alert("Please fill in all the fields before submitting.");
      } else {
        // If all fields are filled, redirect to submit.html
        window.location.href = "submit.html";
      }
    });
  });
  