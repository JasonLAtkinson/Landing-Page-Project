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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// I start out by retrieving the navbar__list element and store it as a global variable
const navbarList = document.getElementById('navbar__list');

// then retrieve the section elements and store them as a global variable
const sections = document.querySelectorAll('section');

// creating a function to build the my navbar 
function buildNavbar() {
  // to iterate over each section element
  for (const section of sections) {
    // then retrieve the section's id attribute and data-nav attribute
    const sectionId = section.id;
    const sectionNav = section.getAttribute('data-nav');

    // also create list item <li> element
    const listItem = document.createElement('li');

    // as well as an anchor <a> element
    const anchor = document.createElement('a');

    // set the textContent to the value of data-nav attribute
    anchor.textContent = sectionNav;

    // make the href to the value of the section's id attribute (with # sign)
    anchor.href = `#${sectionId}`;

    // add the menu__link class
    anchor.classList.add('menu__link');

    // added a click event listener to the anchor element
    anchor.addEventListener('click', (event) => {
      event.preventDefault(); // to prevent the default click behavior
      section.scrollIntoView({ behavior: 'smooth' }); // for a smooth scrolling experience
      highlightNavItem(anchor); // highlight the clicked navbar link
    });

    // now it's time to append the anchor element to the list item element
    listItem.appendChild(anchor);

    // append the list item element to the navbar__list element
    navbarList.appendChild(listItem);
  }

  // a function to highlight the navbar link
  function highlightNavItem(clickedLink) {
    // remove the highlighted class from navbar links
    const navbarLinks = document.querySelectorAll('.menu__link');
    navbarLinks.forEach(link => {
      link.classList.remove('highlighted');
    });

    // add the highlighted class to the clicked navbar link
    clickedLink.classList.add('highlighted');
  }
}

// finally, call the function to build the navbar.
buildNavbar();

// I'm adding a scroll event listener on the window object
window.addEventListener('scroll', () => {
  // to iterate over each section element
  for (const section of sections) {
    // now  retrieve the section's position on the page
    const rect = section.getBoundingClientRect();
    
    //  now checking if the section is visible within the viewport
    const isInViewport = (
      rect.top >= -550 &&
      rect.left >= -550 &&
      rect.bottom <= (window.innerHeight) &&
      rect.right <= (window.innerWidth)
    );
    
    if (isInViewport) {
      // now adding the active class to the section
      section.classList.add('your-active-class');

      // gethering all the anchor elements from the DOM
      const anchors = document.querySelectorAll('.menu__link');

      //  to find the correct anchor element based on the section being evaluated
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].id === section.id) {
          // : If the anchor element is found, then add the active class to it
          anchors[i].classList.add('your-active-class');
        } else {
          //  otherwise, remove the active class from it
          anchors[i].classList.remove('your-active-class');
        }
      }
    } else {
      // and if the section is not visible, remove the active class from it and corresponding anchor element
      section.classList.remove('your-active-class');
      document.querySelector(`.menu__link[href="#${section.id}"]`).classList.remove('your-active-class');
    }
  }
});



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

