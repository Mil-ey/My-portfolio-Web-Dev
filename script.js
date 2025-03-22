

const toggleButton = document.getElementById("dark-mode-toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Load saved mode
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}




// addining more things//



const sections = document.querySelectorAll(".hidden-section");

function revealSections() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealSections);
revealSections();


