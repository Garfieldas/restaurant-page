import "./assets/styles/style.css";
import { navBar } from "./components/navBar";
import { header } from "./components/header";
import { menu } from "./components/menu";

window.addEventListener('load', () => {
    navBar();
    header();
    menu();
});