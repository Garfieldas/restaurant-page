export const navBar = () => {
    const navbar = document.querySelector('.navbar');

    const homeLink = document.createElement('a');

    const menuLink = document.createElement('a');

    const aboutLink = document.createElement('a');

    const links = [ homeLink, menuLink, aboutLink ];
    const texts = [ 'Home', 'Menu', 'About'];
    
    links.forEach((link, index) => {
        link.className = 'navbar__link';
        let text = document.createTextNode(texts[index]);
        link.appendChild(text);
        navbar.appendChild(link)
    });
}