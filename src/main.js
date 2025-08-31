import "./assets/styles/style.css";
import { navBar } from "./components/navBar";
import { header } from "./components/header";
import { menu } from "./components/menu";
import { about } from "./components/about";


window.addEventListener('load', () => {
    navBar();
    header();
    menu();
    about();
});