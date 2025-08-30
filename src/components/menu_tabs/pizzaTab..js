export const pizzaList = () => {
  const menuList = document.querySelector('.menu__list');

  const pizzas = [
    { name: 'Margherita', price: '$12.50', desc: 'Fresh tomatoes, fresh mozzarella, fresh basil' },
    { name: 'Formaggio', price: '$15.50', desc: 'Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)' },
    { name: 'Chicken', price: '$17.00', desc: 'Fresh tomatoes, mozzarella, chicken, onions' },
    { name: "Pineapple o'clock", price: '$16.50', desc: 'Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil' },
    { name: 'Meat Town', price: '$20.00', desc: 'Fresh tomatoes, mozzarella, hot pepperoni, hot sausage, beef, chicken' },
    { name: 'Parma', price: '$20.00', desc: 'Fresh tomatoes, mozzarella, parma, bacon, fresh arugula' },
  ];

  pizzas.forEach(pizza => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu__item';

    const menuTop = document.createElement('div');
    menuTop.className = 'menu__item-top';

    const title = document.createElement('h3');
    title.className = 'menu__item-title';
    title.textContent = pizza.name;

    const price = document.createElement('span');
    price.className = 'menu__item-tag price';
    price.textContent = pizza.price;

    menuTop.append(title, price);

    const menuBottom = document.createElement('div');
    menuBottom.className = 'menu__item-bottom';

    const desc = document.createElement('span');
    desc.className = 'menu__item-desc';
    desc.textContent = pizza.desc;

    menuBottom.appendChild(desc);

    menuItem.append(menuTop, menuBottom);
    menuList.appendChild(menuItem);
  });
};
