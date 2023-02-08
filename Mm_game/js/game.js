const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

let loop;


const characters = [
    'do',
    're',
    'mi',
    'fa',
    'sol',
    'la',
    'si',
  
        
];
    

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className =  className;
    return element;  
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');
    
    if (disabledCards.length === 14) {
        clearInterval(loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de: ${timer.innerHTML}`);
    }
}

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');
    
   if (firstCharacter === secondCharacter){
   
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');   
        
        firstCard = '';
        secondCard = '';
         
        checkEndGame();
        
    } else {
        setTimeout(() => {
        
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
            
            
            firstCard = '';
            secondCard = '';
       
        }, 500);        
    }   
}


const revealCard = ({target}) => {
    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }
    
    if (firstCard === ''){
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secondCard === ''){
    
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;
       
        checkCards();
        }    
    }
   

const createCard = (character) => {
    const card = createElement('div', 'card');
    const front= createElement('div', 'face front');
    const back = createElement('div', 'face back');
    
    front.style.backgroundImage = `url('../images_notes/${character}.jpg')`;
    
    card.appendChild(front);
    card.appendChild(back);
    
    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);
       
    return card;
}

const loadGame = () => {
    const duplicateCharacters = [...characters, ...characters];
    
    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);
    
    shuffledArray.forEach((character) => {       
        const card = createCard(character);
        grid.appendChild(card);       
    });
}



const startTimer = () => {
    
    let currentTime = 1;
    

    loop = setInterval(() => {
        currentTime++;
        
        if (currentTime === 0) {
        timer.innerHTML = '00:00';
        return;
        
        
}

        // Convert time to minutes and seconds
        const minutes = Math.floor(currentTime / 60);
        const seconds = currentTime % 60;

        // Update timer element with minutes and seconds
        timer.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);
}



window.onload = () => {   
    startTimer(); 
    spanPlayer.innerHTML = localStorage.getItem('player');     
    loadGame();   
}




