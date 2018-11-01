document.addEventListener('DOMContentLoaded', function(event) {

//-------------Declare Variables------------------------->

let pokemonDiv = document.getElementById('pokemon-container');

let xyz;

let pokemonImages;

//-------------Fetch Data----------------------------->

pokemonImages = fetch('http://localhost:3000/pokemon', {
  method: 'GET'
}).then(function(responseObj) {
  console.log(responseObj)
  return responseObj.json() //parse the JSON from the HTTP response obj
  // responseObj.json() returns a promise; i can only read that data in another .then callback fn
}).then(function(parsedJSON) { //invoke when json.parse() completes
  console.log(parsedJSON)
  pokemonImages = parsedJSON//assign quote to whatever we got back from the server
  console.log('parsedJSON[0] is:' + parsedJSON[0]["sprites"]["front"])
  appendImageToDom(parsedJSON)
}).then(function(string) {
  console.log(string) //does not return anything
}).then(function(wut) { //wut will therefore be undefined
  console.log(wut) //undefined
}).catch(function(error) {
  console.error('here is ur error', error)
})

//-------------Add images to DOM----------------------------->

function appendImageToDom(pokemonImages, toggleImages) {
    pokemonImages.forEach(function(img){
      pokemonDiv.innerHTML += `
      <div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text">${img["name"]}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img src="${img["sprites"]["front"]}" name = 'pic' onclick=src="${img["sprites"]["back"]}"></img>
            </div>
          </div>
        </div>
      </div>`
    })
  }

//-------------Toggle images------------------------->

function searchPokemon() {}

}) //end of everything
