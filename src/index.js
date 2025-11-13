// Import nav menu javascript files
import "./style.css";
import loadHomePage from "./homepage.js";
import loadMenuPage from "./menu.js";
import loadContactPage from "./contactPage.js";
import loadTempPage from "./tempPage.js";

// Grab nav buttons from template
const homepagebtn = document.querySelector("#home");
const menubtn = document.querySelector("#menu");
const contactbtn = document.querySelector("#contact");

// Add eventlisteners to btns
homepagebtn.addEventListener('click', loadHomePage);
menubtn.addEventListener('click', loadMenuPage);
contactbtn.addEventListener('click', loadContactPage);

// loadHomePage();
