import "./styles.css";
import { populateMenu } from "./menu.js";
import { populateAbout } from "./about.js";

let state = 0;

document.querySelector("#menuButton").addEventListener("click", () => {
    if (! (state === 1)) {
        document.querySelector("#content").innerHTML = "";
        populateMenu();
    } 
    state = 1;
})

document.querySelector("#homeButton").addEventListener("click", () => {
    document.querySelector("#content").innerHTML = "";
    state = 0;
})

document.querySelector("#aboutButton").addEventListener("click", () => {
    if (! (state === 2)) {
        document.querySelector("#content").innerHTML = "";
        populateAbout();
    } 
    state = 2;
})