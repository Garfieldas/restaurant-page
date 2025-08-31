export const navBar = () => {
    const navbar = document.querySelector('.navbar');
    const home = document.querySelector('.header');
    const menu = document.querySelector('.menu');
    const about = document.querySelector('.about');

    const homeLink = document.createElement('a');

    const menuLink = document.createElement('a');

    const aboutLink = document.createElement('a');

    const links = [ homeLink, menuLink, aboutLink ];
    const texts = [ 'Home', 'Menu', 'About'];
    const sections = [ home, menu, about ];
    
    links.forEach((link, index) => {
        link.className = 'navbar__link';
        let text = document.createTextNode(texts[index]);
        link.appendChild(text);
        navbar.appendChild(link);
        link.addEventListener('click', () => sections[index].scrollIntoView());
    });
}