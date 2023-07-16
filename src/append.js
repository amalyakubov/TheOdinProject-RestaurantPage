import logo from './img/logo.png'
export let content = document.getElementById('content');

export function appendToDivWithText(element, text) {
    let div = document.createElement('div');
    let elementToAppend = document.createElement(`${element}`);
    elementToAppend.innerHTML = text;
    div.appendChild(elementToAppend);
    return div;
}

export function logoAppend() {
    let container = document.createElement('div');
    container.id = 'logo-container'
    let header = document.getElementById('navigation-container');
    let logoToAppend = new Image();
    logoToAppend.src = logo;
    container.appendChild(logoToAppend);
    header.appendChild(container);
}

export function appendToHeader(element) {
    let header = document.createElement('div');
    header.id = 'header';
    header.appendChild(element);
    document.getElementById('content').appendChild(header);
}
