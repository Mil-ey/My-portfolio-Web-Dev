

const toggleButton = document.getElementById("dark-mode-toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Load saved mode
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}

// filtering//
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', function() {
    const category = this.getAttribute('data-category');
    document.querySelectorAll('.project').forEach(project => {
      const projectCategory = project.getAttribute('data-category');
      if (category === 'all' || projectCategory === category) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});


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


