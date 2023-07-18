import { content } from "./append";

export function loadAboutPage() {
    if (document.getElementById('truth-container') === null) {
    let truthContainer = document.createElement('div');
    truthContainer.id = 'truth-container';
    let truth = document.createElement('p');
    truth.classList.add('truth');
    
    const NAIVGATION = document.getElementById('navigation-container');
    NAIVGATION.style.backgroundColor = 'black';
    NAIVGATION.style.color = 'white';
    NAIVGATION.style.margin = '0';
    
    truth.innerHTML = 'The truth this is that <span>the Los Pollos Hermanos is not a </span> chicken <span>restaurant. It is the coverup for the </span>massive<span> criminal syndicate operating on the terrtory of the </span> southern United States of America <span>and Mexico. The law enforcement agencies such as the</span> Department of Homeland Security are <span> not only aware of their existence, but they are actively sponsoring them as a method to exert their</span> influence. The Gustav Fring, is <span> actually a criminal with ties to the Chilean Military and the CIA. The Los Pollos Hermanos is a cover up for the </span> Operation Backwaters <span>, which has played a large role in the CIA\'s </span> Overlord Program. <span> Los Pollos Hermanos shall continue to operate under the guidance of the CIA! </span> God save us all';
    truthContainer.style.height = '100vh';
    truthContainer.style.padding = '35vh';
    truthContainer.style.backgroundColor = 'black';
    truth.style.fontSize = '25px';
    truth.style.color = 'white';
    truthContainer.appendChild(truth);  
    content.appendChild(truthContainer);
    }
}