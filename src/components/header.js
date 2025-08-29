export const header = () => {
    const header = document.querySelector('.header');
    const headerContent = document.querySelector('.header__content');

    const container1 = document.createElement('div');
    const container2 = document.createElement('div');
    const container3 = document.createElement('div');

    const containers = [ container1, container2, container3 ];
    containers.forEach((container, index) => {
        index === 2 ? container.className = 'header__bottom' : container.className = 'header__container';
    });

    const h1 = document.createElement('h1');
    const span = document.createElement('span');
    span.textContent = 'Thin'
    h1.appendChild(span);
    const text = document.createTextNode('Crust Pizza');
    h1.appendChild(text);
    container1.appendChild(h1);
    headerContent.appendChild(container1);

    const headerBtn = document.createElement('button');
    headerBtn.className = 'header__btn';
    headerBtn.textContent = 'Let me see the Menu';
    container2.appendChild(headerBtn);
    header.appendChild(container2);

    
    const headerBottomText = document.createElement('span');
    headerBtn.className = 'header__bottom-text';
    headerBtn.textContent = 'Open from 10am to 12pm';
    container3.appendChild(headerBottomText);
    header.appendChild(container3);
}