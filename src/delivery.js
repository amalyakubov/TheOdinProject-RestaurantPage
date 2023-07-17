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
        label.style.fontSize = '35px';
        label.style.fontWeight = '600';
        label.style.color = 'black';
        
        inputContainer.appendChild(label);
        inputContainer.appendChild(input);
    }
    FOOTER.classList.remove('hidden');
} 