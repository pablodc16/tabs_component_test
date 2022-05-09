// scripts
import displayTab from "./scripts/display-tab";

// styles
import "./styles/main.scss";

// images
import surtsey_volcano from "./assets/imgs/surtsey_volcano.jpg";

// set image for all panels
const surtseyVolcanoImg = Object.values(document.getElementsByClassName('surtseyVolcanoImg'));
surtseyVolcanoImg.forEach(element => {
  element.src = surtsey_volcano;
});

// set Listeners for navegation bar
const navTabs = Object.values(document.getElementsByClassName("nav-tab"));
navTabs.forEach(element => {
  element.addEventListener("click", displayTab);
});
