import { content } from "./append";

export function loadDelivery() {
    const FOOTER = document.getElementById('footer');
    let div = document.createElement('div');
    let text = document.createElement('p');
    div.appendChild(text);
    text.innerHTML = 'Welcome to the delivery page, here you can order your favourite meal. '
    let secondText = document.createElement('p');
    div.appendChild(secondText);
    secondText.style.fontSize = 20;
    content.appendChild(div);
    FOOTER.classList.remove('hidden');
} 