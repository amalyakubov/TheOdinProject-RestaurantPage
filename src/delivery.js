import { content } from "./append";

export function loadDelivery() {
    const FOOTER = document.getElementById('footer');
    if (document.getElementById('delivery-text') === null) {
        let div = document.getElementById('delivery-div');
        div.style.margin = '20px';
        let text = document.createElement('p');
        text.id = 'delivery-text';
        div.appendChild(text);
        text.innerHTML = 'Welcome to the delivery page, here you can order your favourite meal.';
        text.style.marginBottom = '20px';
        text.style.fontSize = '50px';

        let inputContainer = document.createElement('div');
        inputContainer.id = 'input-container';
        inputContainer.style.display = 'flex';
        inputContainer.style.justifyContent = 'center';
        inputContainer.style.paddingTop = '200px';
        inputContainer.style.paddingBottom = '200px';
        inputContainer.style.alignItems = 'center';
        div.appendChild(inputContainer);
        
        let input = document.createElement('input');
        input.type = 'text';
        input.name = 'adress';
        input.id = 'adress';
        input.style.width = '300px';
        input.style.height = '30px';
        input.style.border = 'none';

        let label = document.createElement('label');
        label.htmlFor = 'adress';
        label.innerHTML = 'Delivery adress:';
        label.style.fontSize = '60px';
        label.style.fontWeight = '600';
        label.style.color = 'white';
        
        let infoContainer = document.createElement('div');
        infoContainer.id = 'info-container';
        let info = document.createElement('p');
        info.style.color = 'white';
        infoContainer.appendChild(info);
        info.innerHTML = 'If you get the message \'unavailable adress, please contact our customer support team\', please choose one of the following methods of contacting our custom suppoprt.';

        let contactContainer = document.createElement('div');
        contactContainer.style.display = 'flex';

        let email = document.createElement('p');
        let phone = document.createElement('p');
        
        email.innerHTML = 'lospollos@customer.com'
        phone.innerHTML = '+ 1 505 999 999';

        contactContainer.appendChild(email);
        contactContainer.appendChild(phone);
        
        contactContainer.style.color = 'white';
        contactContainer.style.fontSize = '20px';
        contactContainer.style.justifyContent = 'center';
        contactContainer.style.gap = '80px';
        
        infoContainer.style.paddingBottom = '100px';
        infoContainer.style.margin = '20px';
        infoContainer.style.backgroundColor = '#548042';
        infoContainer.style.borderRadius = '10px';
        infoContainer.style.paddingTop = '20px';
        
        info.style.margin = '20px'
        info.style.fontSize = '25px';

        inputContainer.appendChild(label);
        inputContainer.appendChild(input);
        infoContainer.appendChild(contactContainer);
        content.appendChild(infoContainer);
    }
} 