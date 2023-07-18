import './style.css'
import { pageLoad } from './pageload';
import { logoAppend } from './append';
import { loadDelivery } from './delivery';

const NAVIGATION = function() {

    const WELCOMECONTAINER = document.getElementById('welcome-container');
    const PRODUCTSCONTAINER = document.getElementById('products-display');
    const MENUCONTAINER = document.getElementById('menu-container');
    const FOOTER = document.getElementById('footer');
    const DELIVERYDIV = document.getElementById('delivery-div');
    const INFOCONTAINER = document.getElementById('info-container');

    function hideContent() {
        WELCOMECONTAINER.classList.add('hidden');
        PRODUCTSCONTAINER.classList.add('hidden');
        MENUCONTAINER.classList.add('hidden');
        FOOTER.classList.add('hidden');
        DELIVERYDIV.classList.remove('hidden');
        INFOCONTAINER.classList.remove('hidden');
    }
    
    function showContent() {
        WELCOMECONTAINER.classList.remove('hidden');
        PRODUCTSCONTAINER.classList.remove('hidden');
        MENUCONTAINER.classList.remove('hidden');
        FOOTER.classList.remove('hidden');
        DELIVERYDIV.classList.add('hidden');
        INFOCONTAINER.classList.add('hidden');
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

pageLoad();
NAVIGATION();