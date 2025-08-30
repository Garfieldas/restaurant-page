import { pizzaList } from "./menu_tabs/pizzaTab.";

export const menu = () => {
    const menu = document.querySelector('.menu');

    const menuTitle = document.createElement('div');
    menuTitle.className = 'menu__title';
    menu.appendChild(menuTitle);

    const h1 = document.createElement('h1');
    h1.textContent = 'The Menu';
    menuTitle.appendChild(h1);

    const menuSection = document.createElement('div');
    menuSection.className = 'menu__sections';
    menu.appendChild(menuSection);

    const tab1 = document.createElement('div');
    const tab2 = document.createElement('div');
    const tab3 = document.createElement('div');

    const tabs = [ tab1, tab2, tab3 ];
    const tabNames = [ 'Pizza', 'Salads', 'Starter'];

    tabs.forEach((tab, index) => {
        tab.className = 'menu__tab menu--bordered';
        let text = document.createTextNode(tabNames[index]);
        tab.appendChild(text);
        menuSection.appendChild(tab);
    });
    pizzaList();

}