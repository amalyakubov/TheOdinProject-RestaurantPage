import logo from './logo.png'

function appendToDivWithText(element, text) {
    let content = document.getElementById('content');
    let div = document.createElement('div');
    let elementToAppend = document.createElement(`${element}`);
    elementToAppend.innerHTML = text;
    div.appendChild(elementToAppend);
    return div;
}

function logoAppend() {
    let content = document.getElementById('content');
    let logoToAppend = new Image();
    logoToAppend.src = logo;
    content.appendChild(logoToAppend);
}

function appendToHeader(element) {
    let header = document.createElement('div');
    header.id = 'header';
    header.appendChild(element);
    document.getElementById('content').appendChild(header);
}

function pageLoad(text) {
    let content = document.getElementById('content');
    let welcomeText = appendToDivWithText('p', text);
    return appendToHeader(content.appendChild(welcomeText));
}

pageLoad('It is the fucking header!');
logoAppend();

alert('Welcome to Los Pollos Hermanos. Glad to see you here!');