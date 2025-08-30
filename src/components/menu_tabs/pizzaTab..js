export const pizzaList = () => {
  const menuList = document.createElement("div");
  menuList.className = "menu__list menu--bordered";
  menu.appendChild(menuList);

  const pizzas = [
    {
      name: "Margherrita",
      price: "$12.50",
      desc: "Fresh Tomatoes, Fresh Mozzarella, Fresh Basil",
    },
    {
      name: "Formaggio",
      price: "$15.50",
      desc: "Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)",
    },
    {
      name: "Chicken",
      price: "$17.00",
      desc: "Fresh tomatoes, mozzarella, chicken, onions",
    },
    {
      name: `Pinieapple 'o' clock`,
      price: "$16.50",
      desc: "Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil",
    },
    {
      name: "Meat Town",
      price: "$20.00",
      desc: "Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken",
    },
    {
      name: "Parman",
      price: "$20.00",
      desc: "Fresh tomatoes, mozzarella, parma, bacon, fresh arugula",
    },
  ];

  pizzas.forEach((pizza) => {
    let menuItem = document.createElement("div");
    menuItem.className = "menu__item";
    menuList.appendChild(menuItem);

    let menuTop = document.createElement("div");
    menuTop.className = "menu__item-top";
    menuItem.appendChild(menuTop);

    let menuItemName = document.createElement("h3");
    let name = document.createTextNode(pizza.name);
    menuItemName.appendChild(name);

    let menuItemPrice = document.createElement("span");
    menuItemPrice.className = "menu__item-tag price";
    menuItemPrice.textContent = pizza.price;
    menuItemName.appendChild(menuItemPrice);

    let menuItemBottom = document.createElement("div");
    menuItemBottom.className = "menu__item-bottom";
    menuItem.appendChild(menuItemBottom);

    let menuItemDesc = document.createElement("span");
    menuItemDesc.textContent = pizza.desc;
    menuItemBottom.appendChild(menuItemDesc);
  });
};
