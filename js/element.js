
function setMarkers(param){
   let curParam;
   let position;	
   let maxCase;
   if(param != false && param != undefined) curParam = param;
   else curParam = 'cases';
      switch(curParam){
   		case 'casesPerOneHundred': maxCase = countryArr[0]['casesPerOneMillion']/10;
   								   break;
		case 'deathsPerOneHundred': maxCase = countryArr[0]['deathsPerOneMillion']/10;
									break;
		case 'recoveredPerOneHundred': maxCase = countryArr[0]['recoveredPerOneMillion']/10;
									   break;
		case 'todayCasePerOneHundred': maxCase = (100000*countryArr[0]['todayCases']/countryArr[0]['population']).toFixed(2);
									   break;
		case 'todayDeathsPerOneHundred': maxCase = (100000*countryArr[0]['todayDeaths']/countryArr[0]['population']).toFixed(2);
									     break;
		case 'todayRecoveredPerOneHundred': maxCase = (100000*countryArr[0]['todayRecovered']/countryArr[0]['population']).toFixed(2);
									        break;
		default: maxCase = countryArr[0][curParam];
				break;
   }

   let color = '';
   countryArr.forEach((el)=>{
 		let markerOptions = {
   		title: "MyLocation",
   		alt: "Hello",
   		clickable: true,
   		draggable: false
		}
		switch(curParam){
			case 'casesPerOneHundred': position = (el.casesPerOneMillion/10).toFixed(2);
									   break;
			case 'deathsPerOneHundred': position = (el.deathsPerOneMillion/10).toFixed(2);
										break;
			case 'recoveredPerOneHundred': position = (el.recoveredPerOneMillion/10).toFixed(2);
										   break;
			case 'todayCasePerOneHundred': position = (100000*el.todayCases/el.population).toFixed(2);
										   break;
			case 'todayDeathsPerOneHundred': position = (100000*el.todayDeaths/el.population).toFixed(2);
											 break;
			case 'todayRecoveredPerOneHundred': position = (100000*el.todayRecovered/el.population).toFixed(2);
												break;
			default: position = el[curParam];
					 break;
		}
		if ( ((position*100)/maxCase) < 25) color = 'green';
		if ( ((position*100)/maxCase) > 25 && ((position*100)/maxCase) < 40) color = 'yellow';
		if ( ((position*100)/maxCase) > 40) color = 'red';
		
		let iconHtml = `<div style="width: 15px; height: 15px; border-radius: 50%; background: ${color};"></div>`;

		let myIcon = L.divIcon({
  			className: 'my-div-icon',
  			html: iconHtml
		});

		let marker = new L.Marker([el.countryInfo.lat, el.countryInfo.long], {icon: myIcon});
		marker.addTo(map);
		let str = `${el.country}: ${position}`;
		marker.addEventListener('mouseover', ()=>{marker.bindPopup(str).openPopup();});

		marker.addEventListener('click',()=>{
			listOfParametrs(el);
			drawChart(el['countryInfo']['iso3']);
			}, false);

		markersArr.push(marker);

		});		
}

function listOfCountry(srh){
	
	if(srh == undefined) fCountryArr = countryArr;
	else fCountryArr = countryArr.filter((el)=>el.country.toLowerCase().startsWith(srh));
	let dockElement4LeftBottom = document.querySelector('.dock-element4-left-bottom');
		dockElement4LeftBottom.innerHTML="";
	fCountryArr.forEach((el)=>{
		

		let itemText = document.createElement('div');
			itemText.classList.add('item-text');
			dockElement4LeftBottom.append(itemText);

		let imgFlag = document.createElement('div');
			imgFlag.classList.add('img-flag');
			itemText.append(imgFlag);

		let imgCountry = document.createElement('img');
			imgCountry.setAttribute("src",`${el.countryInfo.flag}`);
			imgCountry.setAttribute("alt","no img");
			imgFlag.append(imgCountry);

		let flagCountry = document.createElement('div');
			flagCountry.classList.add('flag-country');
			flagCountry.innerHTML = `${el.country}`;
			itemText.append(flagCountry);

	});

	let list = document.getElementById('flag');
	let imgFlag = document.querySelectorAll('.img-flag');
	for(let i = 0; i<imgFlag.length; i++){
		imgFlag[i].addEventListener('click', function(){
			listOfParametrs(fCountryArr[i]);
			drawChart(fCountryArr[i]['countryInfo']['iso3']);
		}, false);
	}
}

function mainListOfCountry(param){
	let curParam;
	if(param != false && param != undefined) curParam = param;
	else curParam = 'cases';

	let str = '';
	countryArr.forEach((el)=>{
		str += '<div class="dock-element2-bottom-text">';
		switch(curParam){
			case 'casesPerOneHundred': str += `<p><strong>${el.casesPerOneMillion/10} </strong>`;
									   break;
			case 'deathsPerOneHundred': str += `<p><strong>${el.deathsPerOneMillion/10} </strong>`;
										break;
			case 'recoveredPerOneHundred': str += `<p><strong>${(el.recoveredPerOneMillion/10).toFixed(2)} </strong>`;
										   break;
			case 'todayCasePerOneHundred': str += `<p><strong>${(100000*el.todayCases/el.population).toFixed(2)} </strong>`;
										   break;
			case 'todayDeathsPerOneHundred': str += `<p><strong>${(100000*el.todayDeaths/el.population).toFixed(2)} </strong>`;
											 break;
			case 'todayRecoveredPerOneHundred':str += `<p><strong>${(100000*el.todayRecovered/el.population).toFixed(2)} </strong>`;
											   break;
			default: str += `<p><strong>${el[curParam]} </strong>`;
					break;
		}
		str += `<span><strong> ${el.country}</strong></span></p>`;
		str += '</div>';
	});
	document.querySelector('.dock-element2-bottom').innerHTML = str;
}

function listOfParametrs(country){
	let flagCountryText = document.querySelector('.flag-country-text');
		flagCountryText.innerHTML = '';

	let index = document.createElement('div');
		index.classList.add('index');
		index.innerHTML = `<p><strong>${country.country}</strong></p>`;
		flagCountryText.append(index);

	let indexCase = document.createElement('div');
		indexCase.classList.add('index');
		indexCase.innerHTML = `<p><strong>Cases: </strong><span>${country.cases}</span></p>`;
		flagCountryText.append(indexCase);

	let indexDeaths = document.createElement('div');
		indexDeaths.classList.add('index');
		indexDeaths.innerHTML = `<p><strong>Deaths: </strong><span>${country.deaths}</span></p>`;
		flagCountryText.append(indexDeaths);

	let indexRecovered = document.createElement('div');
		indexRecovered.classList.add('index');
		indexRecovered.innerHTML = `<p><strong>Recovered: </strong><span>${country.recovered}</span></p>`;
		flagCountryText.append(indexRecovered);

	let todayCases = document.createElement('div');
		todayCases.classList.add('index');
		todayCases.innerHTML = `<p><strong>todayCases: </strong><span>${country.todayCases}</span></p>`;
		flagCountryText.append(todayCases);

	let todayDeaths = document.createElement('div');
		todayDeaths.classList.add('index');
		todayDeaths.innerHTML = `<p><strong>todayDeaths: </strong><span>${country.todayDeaths}</span></p>`;
		flagCountryText.append(todayDeaths);

	let todayRecovered = document.createElement('div');
		todayRecovered.classList.add('index');
		todayRecovered.innerHTML = `<p><strong>todayRecovered: </strong><span>${country.todayRecovered}</span></p>`;
		flagCountryText.append(todayRecovered);

	let casesPerOneHundred = document.createElement('div');
		casesPerOneHundred.classList.add('index');
		casesPerOneHundred.innerHTML = `<p><strong>casesPerOne Hundred: </strong><span>${country.casesPerOneMillion/10}</span></p>`;
		flagCountryText.append(casesPerOneHundred);

	let deathsPerOneHundred = document.createElement('div');
		deathsPerOneHundred.classList.add('index');
		deathsPerOneHundred.innerHTML = `<p><strong>deathsPerOne Hundred: </strong><span>${country.deathsPerOneMillion/10}</span></p>`;
		flagCountryText.append(deathsPerOneHundred);

	let recoveredPerOneHundred = document.createElement('div');
		recoveredPerOneHundred.classList.add('index');
		recoveredPerOneHundred.innerHTML = `<p><strong>recoveredPerOne Hundred: </strong><span>${country.recoveredPerOneMillion/10}</span></p>`;
		flagCountryText.append(recoveredPerOneHundred);

	let todayCasePerOneHundred = document.createElement('div');
		todayCasePerOneHundred.classList.add('index');
		todayCasePerOneHundred.innerHTML = `<p><strong>todayCasePerOne Hundred: </strong><span>${(100000*country.todayCases/country.population).toFixed(2)}</span></p>`;
		flagCountryText.append(todayCasePerOneHundred);

	let todayDeathsPerOneHundred = document.createElement('div');
		todayDeathsPerOneHundred.classList.add('index');
		todayDeathsPerOneHundred.innerHTML = `<p><strong>todayDeathsPerOne Hundred: </strong><span>${(100000*country.todayDeaths/country.population).toFixed(2)}</span></p>`;
		flagCountryText.append(todayDeathsPerOneHundred);

	let todayRecoveredPerOneHundred = document.createElement('div');
		todayRecoveredPerOneHundred.classList.add('index');
		todayRecoveredPerOneHundred.innerHTML = `<p><strong>todayRecoveredPerOneHundred: </strong><span>${(100000*country.recovered/country.population).toFixed(2)}</span></p>`;
		flagCountryText.append(todayRecoveredPerOneHundred);

	let parametrs = document.getElementById('parametrs');
}





