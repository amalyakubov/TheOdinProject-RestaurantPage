import './style.css'
import { createAppendFooter, loadDel, pageLoad, pageReload } from './pageload';
import { logoAppend } from './append';
import { loadAboutPage } from './truth';

let WELCOMECONTAINER = document.getElementById('welcome-container');
let PRODUCTSCONTAINER = document.getElementById('products-display');
let MENUCONTAINER = document.getElementById('menu-container');
let FOOTER = document.getElementById('footer');
let DELIVERYDIV = document.getElementById('delivery-div');
let INFOCONTAINER = document.getElementById('info-container');

    function refreshVariables() {
     WELCOMECONTAINER = document.getElementById('welcome-container');
     PRODUCTSCONTAINER = document.getElementById('products-display');
     MENUCONTAINER = document.getElementById('menu-container');
     FOOTER = document.getElementById('footer');
     DELIVERYDIV = document.getElementById('delivery-div');
     INFOCONTAINER = document.getElementById('info-container');
    }

    function deleteDelivery() {
        if (document.getElementById('delivery-div') && document.getElementById('info-container')) {
        document.getElementById('delivery-div').remove();
        document.getElementById('info-container').remove();
        }
    }

    function deleteContent() {
        WELCOMECONTAINER.remove();
        PRODUCTSCONTAINER.remove();
        MENUCONTAINER.remove();
    }

    function deleteFooter() {
        FOOTER.remove();
    }

    function resetNavBarStyle () {
    const NAIVGATION = document.getElementById('navigation-container');
    NAIVGATION.style.backgroundColor = 'white';
    NAIVGATION.style.color = 'black';
    NAIVGATION.style.margin = '20px';
    }

    function wipeTruth() {
        const TRUTH = document.getElementById('truth-container');
        if (TRUTH) {
        TRUTH.remove();
        }
    }
    
    function addEventListeners() {
        let home = document.getElementById('home');
        let delivery = document.getElementById('delivery');
        let about = document.getElementById('about');
    
        home.addEventListener('click', () => {
            wipeTruth();
            deleteDelivery();
            deleteContent();
            pageReload();

            if (document.getElementById('footer') === null) {
                createAppendFooter();
            }

            refreshVariables();
            deleteEventListeners();
            resetNavBarStyle();
        })
    
        delivery.addEventListener('click', () => {
            wipeTruth();
            deleteContent();
            loadDel();
            resetNavBarStyle();
        })
    
        about.addEventListener('click', () => {
            deleteContent();
            deleteDelivery();
            deleteFooter();
            loadAboutPage();
        })
    }
    function deleteEventListeners() {
        let home = document.getElementById('home');
        let delivery = document.getElementById('delivery');
        let about = document.getElementById('about');

        home.removeEventListener('click', () => {
            wipeTruth();
            deleteDelivery();
            deleteContent();
            pageReload();

            if (document.getElementById('footer') === null) {
                createAppendFooter();
            }

            refreshVariables();
            deleteEventListeners();
            resetNavBarStyle();
        })

        delivery.removeEventListener('click', () => {
            wipeTruth();
            deleteContent();
            loadDel();
            resetNavBarStyle();
        })

        about.removeEventListener('click', () => {
            deleteContent();
            deleteDelivery();
            deleteFooter();
            loadAboutPage();
        })
    }

pageLoad();
refreshVariables();
addEventListeners();