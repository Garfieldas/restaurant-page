export const saladList = () => {
  const menuList = document.querySelector('.menu__list');

  const salads = [
    { name: 'Lasagna', price: '$13.50', desc: 'Special sauce, mozzarella, parmesan, ground beef' },
    { name: 'Ravioli', price: '$14.50', desc: 'Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)' },
    { name: 'Chicken', price: '$17.00', desc: 'Ravioli filled with cheese' },
    { name: "Spaghetti Classica", price: '$11.00', desc: 'Fresh tomatoes, onions, ground beef' },
    { name: 'Seafood pasta', price: '$25.50', desc: 'Salmon, shrimp, lobster, garlic' },
  ];

  salads.forEach(salad => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu__item';

    const menuTop = document.createElement('div');
    menuTop.className = 'menu__item-top';

    const title = document.createElement('h3');
    title.className = 'menu__item-title';
    title.textContent = salad.name;

    const price = document.createElement('span');
    price.className = 'menu__item-tag price';
    price.textContent = salad.price;

    menuTop.append(title, price);

    const menuBottom = document.createElement('div');
    menuBottom.className = 'menu__item-bottom';

    const desc = document.createElement('span');
    desc.className = 'menu__item-desc';
    desc.textContent = salad.desc;

    menuBottom.appendChild(desc);

    menuItem.append(menuTop, menuBottom);
    menuList.appendChild(menuItem);
  });
};
