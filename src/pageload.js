 import { appendToDivWithText } from "./append";
 import { appendToHeader } from "./append";
 import {content} from "./append";
 import photo1 from './img/photo-1.jpg'

 export function pageLoad(text) {
    let welcomeText = appendToDivWithText('p', text);
    appendToHeader(content.appendChild(welcomeText));

    let div = document.createElement('div');
    div.id = 'products-display';
    let firstPhoto = new Image();
    firstPhoto.src = photo1;
    let photoContainer = document.createElement('div');
    photoContainer.id = 'photo-container';
    photoContainer.appendChild(firstPhoto);
    div.appendChild(photoContainer);
    content.appendChild(div);

    let newDiv = document.createElement('div');
    newDiv.id = 'story-container';
    let h = document.createElement('h3');
    h.innerHTML = '34 years of finest chicken'
    newDiv.appendChild(h);
    let p = document.createElement('p');
    p.innerHTML = 'Los Pollos Hermanos is a brain child of a brilliant Chillian-Mexican entrepreneur who wanted to cook only the finest chicken. Los Pollos Hermanos was initially only a small restaurant on the outskirts of Alberqueque. However not long after the intial opening, the restaurant begun attracting crowd of Albuquqerque residents. Even the inhabintants of towns outside the Albuquerque came to visit the renowned restuad chicekn restaurant in the ALQ. Since then, the restaurant has expanded to many different locations, including other states; Arizona, Colorado, Nevada, Utah.. everyone can now try the finest chicken! But the restaurant has not forgotten its roots. With love and care of our LPH employees and its cunnning founder, the LPH has stayed true to its values. Serving only the finest and tastiest chicken in the entirety of the South.';
    newDiv.appendChild(p);
    let lineBreak = document.createElement('hr');
    newDiv.appendChild(lineBreak);
    div.appendChild(newDiv);

    let menu =  document.createElement('div');
    menu.id = 'menu-container';
}