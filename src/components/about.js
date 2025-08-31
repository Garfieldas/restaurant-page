import chefPhoto from '../assets/images/chef.jpg';
import restaurantPhoto from '../assets/images/onepage_restaurant.jpg';

export const about = () => {

    const about = document.querySelector('.about');

    const aboutContent = document.createElement("div");
    aboutContent.classList.add("about__content");

    const aboutTitle = document.createElement("h1");
    aboutTitle.classList.add("about__title");
    aboutTitle.textContent = "About";
    aboutContent.appendChild(aboutTitle);

    const p1 = document.createElement("p");
    p1.textContent = "The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    aboutContent.appendChild(p1);

    const p2 = document.createElement("p");
    p2.textContent = "The Chef? Mr. Italiano himself ";

    const chefImg = document.createElement("img");
    chefImg.classList.add("about__content-image-chef");
    chefImg.src = chefPhoto
    chefImg.alt = "chef";

    p2.appendChild(chefImg);
    aboutContent.appendChild(p2);

    const p3 = document.createElement("p");
    p3.textContent = "We are proud of our interiors.";
    aboutContent.appendChild(p3);

    const restImg = document.createElement("img");
    restImg.classList.add("about__content-image-restaurant");
    restImg.src = restaurantPhoto;
    restImg.alt = "restaurant";
    aboutContent.appendChild(restImg);

    const openingTitle = document.createElement("h1");
    openingTitle.classList.add("about__title");
    openingTitle.textContent = "Opening Hours";
    aboutContent.appendChild(openingTitle);

    const openingHours = document.createElement("div");
    openingHours.classList.add("about__content-opening-hours");

    const hours = [
      "Mon & Tue Closed",
      "Friday 10:00 - 12:00",
      "Wednesday 10.00 - 24.00",
      "Saturday 10:00 - 23:00",
      "Thursday 10:00 - 24:00",
      "Sunday Closed"
    ];

    hours.forEach(text => {
      const p = document.createElement("p");
      p.textContent = text;
      openingHours.appendChild(p);
    });

    aboutContent.appendChild(openingHours);
    about.appendChild(aboutContent);
}