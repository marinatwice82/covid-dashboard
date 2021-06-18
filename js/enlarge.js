let flagStyle = true;

let enlarge1 = document.getElementById('enlarge1');
let enlarge2 = document.getElementById('enlarge2');
let enlarge3 = document.getElementById('enlarge3');
let enlarge4 = document.getElementById('enlarge4');


let outerBlock1 = document.querySelector('.dock-element1');
let textHeader = document.querySelector('.dock-element1-header');
let textMain = document.querySelector('.dock-element1-footer');

let outerBlock2 = document.querySelector('.dock-element2');
let textHeaderTop = document.querySelector('.dock-element2-top');
let textHeaderBottom = document.querySelector('.dock-element2-bottom');
let navigationCountry = document.querySelector('.navigation-country');

let outerBlockMap = document.querySelector('.section-map');
let navigationMap = document.querySelector('.navigation-map');

let outerBlockSearch = document.querySelector('.search');
let outerBlockSearchBox = document.querySelector('.search-box');
let outerBlock4 = document.querySelector('.dock-element4');
let globalP = document.querySelector('.global');

let outerBlock5 = document.querySelector('.dock-element5');
let navigationChart = document.querySelector('.navigation');
let main = document.querySelector('.main');

enlarge1.onclick = function(e){
	if ( flagStyle == true) {
        outerBlock1.style.height = '95%';
        outerBlock1.style.width = '95%';
        textHeader.style.fontSize = '2rem';
        textMain.style.fontSize = '2.5rem';

        outerBlock2.style.display = 'none';
        outerBlockMap.style.display = 'none';
        outerBlockSearch.style.display = 'none';
        outerBlock5.style.display = 'none';
        main.style.alignItems = 'center';
	} 
	else {
        outerBlock1.style.height = '15%';
        outerBlock1.style.width = '15%';

        outerBlock2.style.display = 'block';
        outerBlockMap.style.display = 'block';
        outerBlockSearch.style.display = 'flex';
        outerBlock5.style.display = 'block';
        main.style.alignItems = 'flex-start';

        if(screen.width > 992 ) {
            textHeader.style.fontSize = '1rem';
            textMain.style.fontSize = '1.5rem';    
        }
        else if (screen.width <= 992 && screen.width >= 768) {
            textHeader.style.fontSize = '0.9rem';
            textMain.style.fontSize = '1rem';
        }
        else if (screen.width >= 490  && screen.width < 767) {
            textHeader.style.fontSize = '0.55rem';
            textMain.style.fontSize = '0.7rem';
        }
	}
	flagStyle = !flagStyle;
}
enlarge2.onclick = function(e){
	if ( flagStyle == true) {
        outerBlock2.style.height = '95%';
        outerBlock2.style.width = '95%';
     
        outerBlock1.style.display = 'none';
        outerBlockMap.style.display = 'none';
        outerBlockSearch.style.display = 'none';
        outerBlock5.style.display = 'none';
        main.style.alignItems = 'center';

        if(screen.width >992 ) {
            textHeaderTop.style.fontSize = '1.5rem';
            textHeaderBottom.style.fontSize = '1.2rem';
            navigationCountry.style.fontSize = '1rem';
        }
        else if (screen.width <= 992 && screen.width >= 768) {
            textHeaderTop.style.fontSize = '1.2rem';
            textHeaderBottom.style.fontSize = '1.05rem';
            navigationCountry.style.fontSize = '1rem';
        }
        else if (screen.width >= 490  && screen.width < 767) {
            textHeaderTop.style.fontSize = '0.9rem';
            textHeaderBottom.style.fontSize = '0.8rem';
            navigationCountry.style.fontSize = '0.9rem';
        }
	} 
	else {  
            outerBlock2.style.height = '78%';
            outerBlock2.style.width = '15%';

            outerBlock1.style.display = 'flex';
            outerBlockMap.style.display = 'block';
            outerBlockSearch.style.display = 'flex';
            outerBlock5.style.display = 'block';
            main.style.alignItems = 'flex-start';

        if (window.screen.width >= 992 ) {
            textHeaderTop.style.fontSize = '0.8rem';
            textHeaderBottom.style.fontSize = '0.9rem';
            navigationCountry.style.fontSize = '0.6rem';  
        }
        else if (window.screen.width >= 768 && window.screen.width < 992) {
            textHeaderTop.style.fontSize = '0.7rem';
            textHeaderBottom.style.fontSize = '0.7rem';
            navigationCountry.style.fontSize = '0.55rem';
        }
        else if (screen.width >= 490  && screen.width < 767) {
            textHeaderTop.style.fontSize = '0.55rem';
            textHeaderBottom.style.fontSize = '0.6rem';
            navigationCountry.style.fontSize = '0.38rem';
        }
	}
	flagStyle = !flagStyle;
}
enlarge3.onclick = function(e){
	if ( flagStyle == true) {
        outerBlockMap.style.height = '95%';
        outerBlockMap.style.width = '80%';

        outerBlock1.style.display = 'none';
        outerBlock2.style.display = 'none';
        outerBlockSearch.style.display = 'none';
        outerBlock5.style.display = 'none';
        main.style.alignItems = 'center';

        if (screen.width >= 768 && screen.width < 992) {
            navigationMap.style.fontSize = '1rem';
        }
        else if (screen.width >= 490  && screen.width < 767) { 
            navigationMap.style.fontSize = '0.75rem';
        }
	} 
	else {
        outerBlockMap.style.height = '96%';
        outerBlockMap.style.width = '55%';

        outerBlock1.style.display = 'flex';
        outerBlock2.style.display = 'block';
        outerBlockSearch.style.display = 'flex';
        outerBlock5.style.display = 'block';
        main.style.alignItems = 'flex-start';

        if (window.screen.width >= 768 && window.screen.width < 992) {
            navigationMap.style.fontSize = '0.7rem';
        }
        else if (screen.width >= 490  && screen.width < 767) { 
            navigationMap.style.fontSize = '0.7rem';
        }
	}
	flagStyle = !flagStyle;
}
enlarge4.onclick = function(e){
	if ( flagStyle == true) {
        outerBlockSearch.style.height = '90%';
        outerBlockSearch.style.width = '90%';
        outerBlockSearchBox.style.width = '30%';
        outerBlockSearchBox.style.height = '5%';
        outerBlock4.style.height = '90%';

        outerBlock1.style.display = 'none';
        outerBlock2.style.display = 'none';
        outerBlockMap.style.display = 'none';
        outerBlock5.style.display = 'none';
        main.style.alignItems = 'center';
        
        if (screen.width >= 992 ) {
            globalP.style.fontSize = '1.5rem';
        }
        else if (screen.width >= 768 && screen.width < 992) {
            globalP.style.fontSize = '1.3rem';
        }
        else if (screen.width >= 490  && screen.width < 767) {
           globalP.style.fontSize = '1rem';
        }
	} 
	else {
        outerBlockSearch.style.height = '55%';
        outerBlockSearch.style.width = '28%';
        outerBlockSearchBox.style.width = '100%';
        outerBlockSearchBox.style.height = '10%';
        outerBlock4.style.height = '86%';

        outerBlock1.style.display = 'flex';
        outerBlock2.style.display = 'block';
        outerBlockMap.style.display = 'block';
        outerBlock5.style.display = 'block';
        main.style.alignItems = 'flex-start';

        if (screen.width >= 992 ) {
            globalP.style.fontSize = '1.1rem';
        }
        else if (screen.width >= 768 && screen.width < 992) {
            globalP.style.fontSize = '1rem';
        }
        else if (screen.width >= 490  && screen.width < 767) {
           globalP.style.fontSize = '0.75rem';
        }
	}
	flagStyle = !flagStyle;
}

enlarge5.onclick = function(e){
	if ( flagStyle == true) {
        outerBlock5.style.height = '80%';
        outerBlock5.style.width = '80%';
        outerBlock5.style.marginTop = '1%';
     
        outerBlock1.style.display = 'none';
        outerBlock2.style.display = 'none';
        outerBlockMap.style.display = 'none';
        outerBlockSearch.style.display = 'none';
        main.style.justifyContent = "center";
        main.style.alignItems = 'center';

        if (screen.width >= 768 && screen.width < 992) {
            navigationChart.style.fontSize = '1rem';
        }
        else if (screen.width >= 490  && screen.width < 767) {
            navigationChart.style.fontSize = '0.75rem';
        }
	} 
	else {
        outerBlock5.style.height = '36%';
        outerBlock5.style.width = '27%';

        outerBlock1.style.display = 'flex';
        outerBlock2.style.display = 'block';
        outerBlockMap.style.display = 'block';
        outerBlockSearch.style.display = 'flex';
        main.style.justifyContent = "space-around";

        if (screen.width >= 768 && screen.width < 992) {
            navigationChart.style.fontSize = '0.7rem';
        }
        else if (screen.width >= 490  && screen.width < 767) {
            navigationChart.style.fontSize = '0.7rem';
        } 
	}
	flagStyle = !flagStyle;
}