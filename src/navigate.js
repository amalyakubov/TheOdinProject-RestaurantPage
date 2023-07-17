 export const NAVIGATION = function() {

    const WELCOMECONTAINER = document.getElementById('welcome-container');
    const PRODUCTSCONTAINER = document.getElementById('products-display');
    const MENUCONTAINER = document.getElementById('menu-container');

    function hideContent() {
        WELCOMECONTAINER.classList.add('hidden');
        PRODUCTSCONTAINER.classList.add('hidden');
        MENUCONTAINER.classList.add('hidden');
    }
    
    function showContent() {
        WELCOMECONTAINER.classList.remove('hidden');
        PRODUCTSCONTAINER.classList.remove('hidden');
        MENUCONTAINER.classList.remove('hidden');
    }
    
    function addEventListeners() {
        let home = document.getElementById('home');
        let delivery = document.getElementById('delivery');
        let about = document.getElementById('about');
    
        home.addEventListener('click', () => {
            showContent();
        })
    
        delivery.addEventListener('click', () => {
            hideContent();
        })
    
        about.addEventListener('click', () => {
            hideContent();
        })
    }
    addEventListeners();
 };
