const projects = [
  {
    src: "https://lotrwiki-angular.web.app/home",
    title: "LoTR Wiki",
    description: "A Lord of the Rings Wiki built with Angular and Firebase.",
    github: "https://github.com/StefanDimitrow/LOTRWiki.git",
    site: "https://lotrwiki-angular.web.app/home"
  },
  {
    src: "https://hijapogled-634ba.web.app",
    title: "Guest Hose Site",
    description: "This is a personal project for a guest house site.",
    github: "https://github.com/StefanDimitrow/HijaPogled.git",
    site: "https://hijapogled-634ba.web.app"
  },
  {
    src: "https://trashpanda-8ff4f.firebaseapp.com",
    title: "Trash Panda",
    description: "A web app for finding and buying/selling unused items.",
    github: "https://github.com/StefanDimitrow/Trashpanda.git",
    site: "https://trashpanda-8ff4f.firebaseapp.com"
  }

 
];

let currentProjectIndex = 0;

function showProject(index) {
  const project = projects[index];
  document.querySelector(".project-preview").src = project.src;
  document.querySelector(".project-info h3").textContent = project.title;
  document.querySelector(".project-info p").textContent = project.description;
  document.querySelector(".github-link").href = project.github;
  document.querySelector(".site-link").href = project.site;
}

function prevProject() {
  currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
  showProject(currentProjectIndex);
}

function nextProject() {
  currentProjectIndex = (currentProjectIndex + 1) % projects.length;
  showProject(currentProjectIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  showProject(currentProjectIndex);
});

setTimeout(() => {
  document.querySelector(".main").classList.add("loaded");
  document.querySelector(".main-content").classList.add("loaded");
}, 5000);