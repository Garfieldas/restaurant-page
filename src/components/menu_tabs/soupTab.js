export const soupList = () => {
  const menuList = document.querySelector('.menu__list');

  const soups = [
    { name: `Today's Soup`, price: '$5.50', desc: 'Ask the waiter' },
    { name: 'Bruschetta', price: '$8.50', desc: 'Bread with pesto, tomatoes, onion, garlic' },
    { name: 'Garlic bread', price: '$9.50', desc: 'Grilled ciabatta, garlic butter, onions' },
    { name: 'Tomozzarella', price: '$10.50', desc: 'Tomatoes and mozzarella' },
  ];

  soups.forEach(soup => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu__item';

    const menuTop = document.createElement('div');
    menuTop.className = 'menu__item-top';

    const title = document.createElement('h3');
    title.className = 'menu__item-title';
    title.textContent = soup.name;

    const price = document.createElement('span');
    price.className = 'menu__item-tag price';
    price.textContent = soup.price;

    menuTop.append(title, price);

    const menuBottom = document.createElement('div');
    menuBottom.className = 'menu__item-bottom';

    const desc = document.createElement('span');
    desc.className = 'menu__item-desc';
    desc.textContent = soup.desc;

    menuBottom.appendChild(desc);

    menuItem.append(menuTop, menuBottom);
    menuList.appendChild(menuItem);
  });
};
