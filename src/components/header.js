export const header = () => {
    const menu = document.querySelector('.menu');
    const about = document.querySelector('.about');
    const header = document.querySelector('.header');
    const headerContent = document.createElement('div');
    headerContent.className = 'header__content';
    header.appendChild(headerContent);

    const container1 = document.createElement('div');
    const container2 = document.createElement('div');
    const container3 = document.createElement('div');

    const containers = [ container1, container2, container3 ];
    containers.forEach((container, index) => {
        index === 2 ? container.className = 'header__bottom' : container.className = 'header__container';
    });

    const h1 = document.createElement('h1');
    const span = document.createElement('span');
    span.textContent = 'Thin';
    span.className = 'header__title-first';
    h1.appendChild(span);
    const text = document.createTextNode('Crust Pizza');
    h1.appendChild(text);
    container1.appendChild(h1);
    headerContent.appendChild(container1);

    const headerBtn = document.createElement('button');
    headerBtn.className = 'header__btn';
    headerBtn.textContent = 'Let me see the Menu';
    headerBtn.addEventListener('click', () => menu.scrollIntoView());
    container2.appendChild(headerBtn);
    headerContent.appendChild(container2);

    
    const headerBottomText = document.createElement('span');
    headerBottomText.className = 'header__bottom-text';
    headerBottomText.textContent = 'Open from 10am to 12pm';
    headerBottomText.addEventListener('click', () => about.scrollIntoView({block: "end"}));
    container3.appendChild(headerBottomText);
    header.appendChild(container3);
}