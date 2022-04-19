// scripts
import generateJoke from "./scripts/generateJoke";

// styles
import "./styles/main.scss";

// images
import surtsey_volcano from "./assets/imgs/surtsey_volcano.jpg";

const surtseyVolcanoImg = document.getElementById('surtseyVolcanoImg');
surtseyVolcanoImg.src = surtsey_volcano;

console.log(generateJoke());
