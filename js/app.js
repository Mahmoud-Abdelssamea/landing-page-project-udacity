/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
let navMenu = document.querySelector("#navbar__list");
let sections = document.querySelectorAll("main section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function navlistHandler() {
  // build the nav list items
  for (let i = 0; i < sections.length; i++) {
    let a = document.createElement("a");
    let li = document.createElement("li");

    //   get id and data-nav attr. from every section
    let sectionDataNav = sections[i].getAttribute("data-nav");
    let sectionID = sections[i].getAttribute("id");

    // create attributes for list items
    a.setAttribute("href", `#${sectionID}`);
    // add menu__link attr to a
    a.setAttribute("class", "menu__link");
    a.innerHTML = sectionDataNav;

    //   append the li and a to ul (lunorder list)
    li.appendChild(a);
    navMenu.appendChild(li);
  }
}

navlistHandler();

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Add class 'active' to section when near top of viewport

document.addEventListener("scroll", activeSection);

function activeSection() {
  sections[0].classList.remove("your-active-class");

  sections.forEach((element, i) => {
    let rect = sections[i].getBoundingClientRect();
    if (rect.y >= -100 && rect.y < 500) {
      element.className = "your-active-class";
    } else {
      element.classList.remove("your-active-class");
    }
  });
}

/**
 * End Main Functions
 *
 */
