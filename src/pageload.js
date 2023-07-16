 import { appendToDivWithText } from "./append";
 import { appendToHeader } from "./append";
 import {content} from "./append";
 import { logoAppend } from "./append";
 import photo1 from './img/photo-1.jpg'

 export function pageLoad() {
    createNavigationMenu();
    displayWelcome();
    addPhotoOverlay();
    createStory();
    createMenu();
    createAppendFooter();
}

function displayWelcome() {
    let welcomeContainer = document.createElement('div');
    welcomeContainer.id = 'welcome-container';
    let welcomeText = document.createElement('p');
    welcomeText.innerHTML = 'Welcome to Los Pollos Hermanos! What would you like to eat?';
    welcomeContainer.appendChild(welcomeText);
    content.appendChild(welcomeContainer);
}

function createNavigationMenu () {
    let container = document.createElement('div');
    container.id = 'navigation-container';
    content.appendChild(container);

    logoAppend();

    let home = document.createElement('div');
    let homeText = document.createElement('p');
    home.appendChild(homeText);
    homeText.innerHTML = 'Home';
    container.appendChild(home);

    let delivery = document.createElement('div')
    let deliveryText = document.createElement('p');
    deliveryText.innerHTML = 'Delivery';
    delivery.appendChild(deliveryText);
    container.appendChild(delivery);

    let about = document.createElement('div');
    let aboutText = document.createElement('p');
    aboutText.innerHTML = 'About';
    about.appendChild(aboutText);
    container.appendChild(about);

}

function addPhotoOverlay() {
    let div = document.createElement('div');
    div.id = 'products-display';
    let firstPhoto = new Image();
    firstPhoto.src = photo1;
    firstPhoto.alt = 'Crispy, delicious chicken in the paper containers'
    let photoContainer = document.createElement('div');
    photoContainer.id = 'photo-container';
    photoContainer.appendChild(firstPhoto);
    let overlay = document.createElement('p');
    overlay.innerHTML = '4.32$';
    overlay.id = 'overlay';
    photoContainer.appendChild(overlay);
    div.appendChild(photoContainer);
    content.appendChild(div);
}

function createStory() {
    let div = document.getElementById('products-display');
    let newDiv = document.createElement('div');
    newDiv.id = 'story-container';
    let h = document.createElement('h3');
    h.innerHTML = '34 years of the finest chicken'
    newDiv.appendChild(h);
    let p = document.createElement('p');
    p.innerHTML = 'Los Pollos Hermanos is a brain child of a brilliant Chillian-Mexican entrepreneur who wanted to cook only the finest chicken. Los Pollos Hermanos was initially only a small restaurant on the outskirts of Alberqueque. However not long after the intial opening, the restaurant begun attracting crowd of Albuquqerque residents. Even the inhabintants of towns outside the Albuquerque came to visit the renowned restuad chicekn restaurant in the ALQ. Since then, the restaurant has expanded to many different locations, including other states; Arizona, Colorado, Nevada, Utah.. everyone can now try the finest chicken! But the restaurant has not forgotten its roots. With love and care of our LPH employees and its cunnning founder, the LPH has stayed true to its values. Serving only the finest and tastiest chicken in the entirety of the South.';
    newDiv.appendChild(p);
    let lineBreak = document.createElement('hr');
    newDiv.appendChild(lineBreak);
    div.appendChild(newDiv);
}

function createMenuItemInsideAFirstList(text) {
    let list = document.getElementById('first-list');
    let menuItem = document.createElement('p');
    menuItem.innerHTML = text;
    list.appendChild(menuItem);
}

function createMenuItemInSecondList(text) {
    let list = document.getElementById('second-list');
    let menuItem = document.createElement('p');
    menuItem.innerHTML = text;
    list.appendChild(menuItem);
}

function createMenu() {
    let menu =  document.createElement('div');
    menu.id = 'menu-container';
    content.appendChild(menu);
    let menuTitle = document.createElement('h3');
    menuTitle.innerHTML = 'Special Chicken Menu';
    menu.appendChild(menuTitle);

    let list = document.createElement('div');
    list.id = 'menu-list';
    let listFirstPart = document.createElement('div');
    listFirstPart.id = 'first-list';
    let listSecondPart = document.createElement('div');
    listSecondPart.id = 'second-list';
    list.appendChild(listFirstPart);
    list.appendChild(listSecondPart);
    menu.appendChild(list);
    createMenuItemInsideAFirstList('1. Crisp Chicken Burger - 7.4$');
    createMenuItemInsideAFirstList('2. Crispy Classic Chicken Wings - 5.4$');
    createMenuItemInsideAFirstList('3. "The Lonely Star" Burger - 9.4$');
    createMenuItemInsideAFirstList('4. Smoking hot chikcen breasts- 5.4$');
    createMenuItemInSecondList('5. Standart Texas Burger - 8.5$');
    createMenuItemInSecondList('6. Sweet Chicken Thigs - 6.4$');
    createMenuItemInSecondList('7. Vacation Set - 14.4$');
    createMenuItemInSecondList('8. The Continental Burger - 14.5$');
}

function createAppendFooter() {
    let footer = document.createElement('div');
    footer.id = 'footer';
    let footerElementsContanier = document.createElement('div');
    footerElementsContanier.id = 'footer-elements-container';
    let footerUpperPart = document.createElement('div');
    let footerLowerPart= document.createElement('div');
    footerUpperPart.id = 'upper-part';
    footerLowerPart.id = 'lower-part';
    footerElementsContanier.appendChild(footerUpperPart);
    footerElementsContanier.appendChild(footerLowerPart);
    let contact = document.createElement('div');
    let email = document.createElement('p');
    email.innerHTML = 'lospollos@hermanos.com';
    let phone = document.createElement('p');
    phone.innerHTML = '+1 (505) 146-0195'
    let thanks = document.createElement('a');
    thanks.innerHTML = 'Photo by <a href="https://unsplash.com/es/@tigerrulezzz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brian Chan</a> on <a href="https://unsplash.com/photos/NbXjZomyNEM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    footerLowerPart.appendChild(thanks);
    contact.appendChild(phone);
    contact.appendChild(email);
    footerUpperPart.appendChild(contact);
    footer.appendChild(footerElementsContanier);
    content.appendChild(footer);
}