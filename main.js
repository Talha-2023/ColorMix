//!========================================== Toggle signin and signup button in mobile

let profile = document.querySelector(".profile");
let profileIcon = document.querySelector(".profileIcon");

profileIcon.onclick = () => {
  profile.classList.toggle("revelButton");
  navigate.classList.remove("revelNav");
};

//!====================================================================toggle Aside Bar

// let linesBar = document.querySelector(".linesBar");
let toggleAside = document.querySelector(".toggleAside");
let displaySection = document.querySelector(".displaySection");
// let linesBarClose = document.querySelector(".linesBarClose");
// linesBar.addEventListener("click", () => {
//   aside.style.width = "13rem";
//   displaySection.style.marginLeft = "13rem";
//   console.log("first");
// });

function revelAside() {
  toggleAside.classList.toggle("bigtoggleAside");
  displaySection.classList.toggle("aside-m-left-max");
}

//!==========================================================================toggle nav

let navigate = document.querySelector(".navigate");

function toggleNav() {
  navigate.classList.toggle("revelNav");
  profile.classList.remove("revelButton");
}

//!========================================================================toggle theme
let sun = document.querySelector("#sun");
let moon = document.querySelector("#moon");

sun.addEventListener("click", () => {
  sun.style.display = "none";
  moon.style.display = "block";
  document.documentElement.style.setProperty("--lightWhite", "#23272F");
  document.documentElement.style.setProperty("--darkWhite", "#1A1D23");
  document.documentElement.style.setProperty(
    "--borderWhite",
    "1px groove #363b45"
  );
  document.documentElement.style.setProperty("--textColor", "#ffffff");
  document.documentElement.style.setProperty("--svgColor", "invert(100%)");
  document.documentElement.style.setProperty("--selectBox", "#424853");
  document.documentElement.style.setProperty("--selectBox", "#424853");
  document.documentElement.style.setProperty("--icon-bg", "#262e40");
  document.documentElement.style.setProperty(
    "--lightSelected",
    "linear-gradient(190deg,rgb(60, 214, 214) 0%,rgb(111, 0, 255) 100% )"
  );

  console.log("first");
});
moon.addEventListener("click", () => {
  document.documentElement.style.setProperty("--lightWhite", "#ffffff");
  document.documentElement.style.setProperty("--darkWhite", "#f3f3f3");
  document.documentElement.style.setProperty(
    "--borderWhite",
    "1px groove #d1d7dc"
  );
  document.documentElement.style.setProperty("--textColor", "#11121e");
  document.documentElement.style.setProperty("--svgColor", "invert(20%)");
  document.documentElement.style.setProperty("--selectBox", "#dbe9ff");
  document.documentElement.style.setProperty("--icon-bg", "#fcfdff");
  document.documentElement.style.setProperty(
    "--lightSelected",
    "linear-gradient( 190deg,rgb(157, 255, 255) 0%,rgb(206, 169, 255) 100%)"
  );

  sun.style.display = "block";
  moon.style.display = "none";
  console.log("first");
});

//!==================================================================PageSwitch

document.addEventListener("DOMContentLoaded", function () {
  const contentDiv = document.querySelector(".contentContainer");

  function loadPage(page) {
    fetch(page)
      .then((response) => response.text())
      .then((html) => {
        contentDiv.innerHTML = html;
        history.pushState({ page }, "", `#${page}`);
      })
      .catch((error) => {
        contentDiv.innerHTML = `<h3>Error loading this page "${error}".</h3>`;
      });
  }

  function setActiveLink(link) {
    const page = link.getAttribute("data-page");

    document.querySelectorAll("a[data-page]").forEach((navLink) => {
      navLink.parentElement.classList.remove("selected");
    });

    document.querySelectorAll(`a[data-page="${page}"]`).forEach((navLink) => {
      navLink.parentElement.classList.add("selected");
    });
  }

  document.querySelectorAll("a[data-page]").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const page = this.getAttribute("data-page");
      loadPage(page);
      setActiveLink(this);
    });
  });

  window.addEventListener("popstate", function (e) {
    if (e.state) {
      loadPage(e.state.page);
      const currentLink = document.querySelector(
        `a[data-page="${e.state.page}"]`
      );
      if (currentLink) {
        setActiveLink(currentLink);
      }
    }
  });

  const initialPage =
    location.hash.replace("#", "") || "/Pages/TextGradient/textGradient.html";

  loadPage(initialPage);

  const initialLink = document.querySelector(`a[data-page="${initialPage}"]`);
  if (initialLink) {
    setActiveLink(initialLink);
  }
});
