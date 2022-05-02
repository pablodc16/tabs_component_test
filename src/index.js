// scripts
import displayTab from "./scripts/display-tab";

// styles
import "../node_modules/bootstrap/scss/bootstrap-reboot.scss";
import "../node_modules/bootstrap/scss/bootstrap-grid.scss";
import "./styles/main.scss";

// images
import surtsey_volcano from "./assets/imgs/surtsey_volcano.jpg";

const surtseyVolcanoImg = document.getElementById('surtseyVolcanoImg');
surtseyVolcanoImg.src = surtsey_volcano;

// set Listeners for navegation bar
const navTabs = Object.values(document.getElementsByClassName("nav-tab"));
navTabs.forEach(element => {
  element.addEventListener("click", displayTab);
});
