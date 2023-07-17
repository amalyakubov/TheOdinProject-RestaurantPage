 function hideContent() {
    const WELCOMECONTAINER = document.getElementById('welcome-container');
    const PRODUCTSCONTAINER = document.getElementById('products-display');
    const MENUCONTAINER = document.getElementById('menu-container');

    WELCOMECONTAINER.classList.add('hidden');
    PRODUCTSCONTAINER.classList.add('hidden');
    MENUCONTAINER.classList.add('hidden');
}

export function addEventListeners() {
    let home = document.getElementById('home');
    let delivery = document.getElementById('delivery');
    let about = document.getElementById('about');

    home.addEventListener('click', () => {
        hideContent();
    })

    delivery.addEventListener('click', () => {
        hideContent();
    })

    about.addEventListener('click', () => {
        hideContent();
    })
}