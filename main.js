//!================================================== Toggle signin and signup button in mobile

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
let smallAside = document.querySelector(".aside");
// let linesBarClose = document.querySelector(".linesBarClose");
// linesBar.addEventListener("click", () => {
//   aside.style.width = "13rem";
//   displaySection.style.marginLeft = "13rem";
//   console.log("first");
// });

function revelAside() {
  toggleAside.classList.toggle("bigtoggleAside");
  displaySection.classList.toggle("aside-m-left-max");
  smallAside.classList.toggle("transition");
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
  document.documentElement.style.setProperty(
    "--displayBg",
    "linear-gradient(#1a1a1a, #1b1a1a)"
  );

  sun.style.display = "none";
  moon.style.display = "block";
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
  document.documentElement.style.setProperty(
    "--displayBg",
    "linear-gradient(#e6e6e6, #f3f3f3)"
  );

  sun.style.display = "block";
  moon.style.display = "none";
});

//!==================================================================PageSwitch

// document.addEventListener("DOMContentLoaded", function () {
//   const contentDiv = document.querySelector(".contentContainer");

//   function loadPage(page) {
//     fetch(page)
//       .then((response) => response.text())
//       .then((html) => {
//         contentDiv.innerHTML = html;
//         history.pushState({ page }, "", `#${page}`);
//       })
//       .catch((error) => {
//         contentDiv.innerHTML = `<h3>Error loading this page "${error}".</h3>`;
//       });
//   }

//   function setActiveLink(link) {
//     const page = link.getAttribute("data-page");

//     document.querySelectorAll("a[data-page]").forEach((navLink) => {
//       navLink.parentElement.classList.remove("selected");
//     });

//     document.querySelectorAll(`a[data-page="${page}"]`).forEach((navLink) => {
//       navLink.parentElement.classList.add("selected");
//     });
//   }

//   document.querySelectorAll("a[data-page]").forEach((link) => {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();
//       const page = this.getAttribute("data-page");
//       loadPage(page);
//       setActiveLink(this);
//     });
//   });

//   window.addEventListener("popstate", function (e) {
//     if (e.state) {
//       loadPage(e.state.page);
//       const currentLink = document.querySelector(
//         `a[data-page="${e.state.page}"]`
//       );
//       if (currentLink) {
//         setActiveLink(currentLink);
//       }
//     }
//   });

//   const initialPage =
//     location.hash.replace("#", "") || "/Pages/TextGradient/textGradient.html";

//   loadPage(initialPage);

//   const initialLink = document.querySelector(`a[data-page="${initialPage}"]`);
//   if (initialLink) {
//     setActiveLink(initialLink);
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const contentDiv = document.querySelector(".contentContainer");
  const loader = document.getElementById("loader");

  function showLoader() {
    loader.style.display = "block";
  }

  function hideLoader() {
    loader.style.display = "none";
  }

  //!======================================
  function loadPage(page) {
    showLoader();

    fetch(page)
      .then((response) => response.text())
      .then((html) => {
        // Insert the HTML content
        contentDiv.innerHTML = html;

        // Remove old scripts to avoid conflicts
        removeOldScripts();

        // Load the corresponding JavaScript file dynamically
        const pageName = page.split("/").pop().replace(".html", "");
        const scriptPath = `/Pages/${pageName}/${pageName}.js`;

        // Load the script
        loadScript(scriptPath);

        // Update browser history
        history.pushState({ page }, "", `#${page}`);
        hideLoader();
      })
      .catch((error) => {
        contentDiv.innerHTML = `<h3>Error loading this page "${error}".</h3>`;
        hideLoader();
      });
  }

  // Function to remove old script tags
  function removeOldScripts() {
    document
      .querySelectorAll("script[data-dynamic]")
      .forEach((script) => script.remove());
  }

  // Function to dynamically load a script
  function loadScript(scriptPath) {
    const script = document.createElement("script");
    script.src = scriptPath;
    script.setAttribute("data-dynamic", "true"); // Optional attribute
    script.onload = () => console.log(`${scriptPath} loaded successfully.`);
    script.onerror = () => console.error(`Error loading script ${scriptPath}.`);
    document.body.appendChild(script);
  }

  //!======================================

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
    location.hash.replace("#", "") || "/Pages/textGradient/textGradient.html";

  loadPage(initialPage);

  const initialLink = document.querySelector(`a[data-page="${initialPage}"]`);
  if (initialLink) {
    setActiveLink(initialLink);
  }
});

// !===============================================================Bigaside toggle when phone width is 700px

window.addEventListener("DOMContentLoaded", () => {
  function checkViewportSize() {
    const vpWidth = window.innerWidth;

    if (vpWidth <= 750 && vpWidth >= 600) {
      toggleAside.classList.remove("bigtoggleAside");
      displaySection.classList.remove("aside-m-left-max");
    }
    if (vpWidth >= 750) {
      toggleAside.classList.add("bigtoggleAside");
      displaySection.classList.add("aside-m-left-max");
    }
    //adding revelnac class to still get nav after 600px small
    // if (vpWidth <= 600) {
    //   navigate.classList.add("revelNav");
    // }
  }

  checkViewportSize();
  window.addEventListener("resize", checkViewportSize);
});

//!================================================================= nav toggle in small phones
function revelNavFun() {
  navigate.classList.toggle("revelNav");
  profile.classList.remove("revelButton");
}

//!==================================================================Swiper Tool container

let swipeBox = document.querySelector(".swiperUpDown");

let touchStartY = 0;
let touchEndY = 0;

function handleGesture() {
  if (touchStartY > touchEndY) {
    // toggleAside.style.transform = "translateY(0)";
    arrowUpDown.classList.toggle("handleTranslate");
    toggleAside.classList.replace("swipeClose", "swipeOpen");
    // console.log("trigger up");
    // console.log("start: " + touchStartY);
    // console.log("end: " + touchEndY);
  } else if (touchStartY < touchEndY) {
    // toggleAside.style.transform = "translateY(88%)";
    arrowUpDown.classList.toggle("handleTranslate");
    toggleAside.classList.replace("swipeOpen", "swipeClose");
    // console.log("trigger down");
    // console.log("start: " + touchStartY);
    // console.log("end: " + touchEndY);
  }
}

swipeBox.addEventListener(
  "touchstart",
  function (e) {
    touchStartY = e.changedTouches[0].screenY;
  },
  false
);
swipeBox.addEventListener(
  "touchend",
  function (e) {
    touchEndY = e.changedTouches[0].screenY;
    handleGesture();
  },
  false
);

let arrowUpDown = document.querySelector(".arrowUpDown");

arrowUpDown.addEventListener("click", () => {
  arrowUpDown.classList.toggle("handleTranslate");
  let up = arrowUpDown.classList.contains("handleTranslate");
  if (up) {
    toggleAside.classList.replace("swipeClose", "swipeOpen");
  } else {
    toggleAside.classList.replace("swipeOpen", "swipeClose");
  }
});

//==============================
function showHide() {
  console.log("click");
}
