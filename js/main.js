
const arrOfParam = ['cases', 'deaths', 'recovered'];
const leftArrParam = ['cases', 'deaths', 'recovered', 'todayCases', 'todayDeaths', 
'todayRecovered', 'casesPerOneHundred', 'deathsPerOneHundred', 'recoveredPerOneHundred',
'todayCasePerOneHundred', 'todayDeathsPerOneHundred', 'todayRecoveredPerOneHundred'];
let currentParam = 0;
let left_currentParam = 0;
let currentISOCountry;
let fCountryArr;
let markersArr = [];

//--------------поиск----------------
const search = document.getElementById('countrySearch');
const searchBotton = document.getElementById('srhBtn');

search.addEventListener('keyup', function(e){
	listOfCountry(this.value);
});

searchBotton.addEventListener('click', ()=>{
	listOfParametrs(fCountryArr[0]);
});

const right = document.getElementById('chartRight');
const left = document.getElementById('chartLeft');
const navigation = document.getElementById('naviChart');

navigation.innerHTML = arrOfParam[currentParam];

right.addEventListener('click', ()=>{
	currentParam +=1;
	if(currentParam == arrOfParam.length) currentParam = 0;
	navigation.innerHTML = arrOfParam[currentParam];
	drawChart(false, currentParam);
});

left.addEventListener('click', ()=>{
	currentParam -=1;
	if(currentParam < 0) currentParam = arrOfParam.length-1;
	navigation.innerHTML = arrOfParam[currentParam];
	drawChart(false, currentParam);
});
//-------------------------------------

//----------навигация слева-------------
const countryLeft = document.getElementById('countryLeft');
const countryRight = document.getElementById('countryRight');
const naviCountry = document.getElementById('naviCountry');
naviCountry.innerHTML = leftArrParam[left_currentParam];

countryLeft.addEventListener('click', ()=>{
	left_currentParam -=1;
	if(left_currentParam < 0) left_currentParam = leftArrParam.length-1;
	naviCountry.innerHTML = leftArrParam[left_currentParam];
	mainListOfCountry(leftArrParam[left_currentParam]);
});

countryRight.addEventListener('click', ()=>{
	left_currentParam +=1;
	if(left_currentParam == leftArrParam.length) left_currentParam = 0;
	naviCountry.innerHTML = leftArrParam[left_currentParam];
	mainListOfCountry(leftArrParam[left_currentParam]);
});
//--------------------------------------

//----------навигация на карте----------
const mapLeft = document.getElementById('mapLeft');
const mapRight = document.getElementById('mapRight');
const naviMap = document.getElementById('naviMap');
naviMap.innerHTML = leftArrParam[left_currentParam];
mapLeft.addEventListener('click', ()=>{
	left_currentParam -=1;
	if(left_currentParam < 0) left_currentParam = leftArrParam.length-1;
	naviMap.innerHTML = leftArrParam[left_currentParam];
	markersArr.map((el)=>{el.removeFrom(map)});
	markersArr = [];
	setMarkers(leftArrParam[left_currentParam]);
});

mapRight.addEventListener('click', ()=>{
	left_currentParam +=1;
	if(left_currentParam == leftArrParam.length) left_currentParam = 0;
	naviMap.innerHTML = leftArrParam[left_currentParam];
	markersArr.map((el)=>{el.removeFrom(map)});
	markersArr = [];
	setMarkers(leftArrParam[left_currentParam]);
});
//--------------------------------------

fetch('https://disease.sh/v3/covid-19/all')
	.then(response => response.json())
	.then(result =>{
		document.querySelector('.dock-element1-footer').innerHTML = result['cases'];
	})
	.catch(error => console.log('error', error));

let m = document.querySelector('.dock-map');
let mapOptions = {
   center: [17.385044, 78.486671],
   zoom: 1
}
let map = L.map(m, mapOptions);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let countryArr = [];

fetch('https://disease.sh/v3/covid-19/countries?sort=cases')
    .then(response => response.json())
    .then(result => {
    		result.forEach((e)=>countryArr.push(e));
    		mainListOfCountry();
    		listOfCountry();	
    		listOfParametrs(countryArr[1]);
    		drawChart(countryArr[1]['countryInfo']['iso3']);
    	})
    .then(result => {
    		setMarkers();
    	})
    .catch(error => console.log('error', error));

// график
let dataArr = [];
let dataArr_X = [];
let dataArr_Y = [];

function drawChart(coutryISO, param){
	
	if(coutryISO != false && coutryISO != undefined) currentISOCountry = coutryISO;
	if(param != false && param != undefined) currentParam = param;

	fetch(`https://disease.sh/v3/covid-19/historical/${currentISOCountry}?lastdays=all`)
    .then(response => response.json())
    .then(result =>{
  
		let d = '';
		let dArr = [];
		dataArr_X = [];
		dataArr_Y = [];
    	for (let key in result['timeline']['cases']){
 
			dArr = key.split('/');
			d = '20'+dArr[2]+'-'+dArr[0]+'-'+dArr[1];
			dataArr.push({'x':d, 'y':result['timeline'][arrOfParam[currentParam]][key]});
			dataArr_X.push(d);
			dataArr_Y.push(result['timeline'][arrOfParam[currentParam]][key]);
    	}

    	document.querySelector('.chart').innerHTML = '<canvas id="myChart"></canvas>';
    	
    	let ctx = document.getElementById('myChart');
    
		let chart = new Chart(ctx, {

    type: 'bar',

    data: {
        labels: dataArr_X,
        datasets: [{
            label: `${currentISOCountry}  ${arrOfParam[currentParam]}`,
            backgroundColor: 'rgb(237, 226, 17)', 
            borderColor: 'rgb(237, 226, 17)',
            data: dataArr_Y
        }]
    },

    options: {
      scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
    })
    .catch(error => console.log('error', error)); 
}



