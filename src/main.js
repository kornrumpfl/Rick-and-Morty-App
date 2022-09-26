var button = document.getElementById("filter-button");
var container = document.getElementById("filter-container");
// var input = document.querySelectorAll("input");

button.onclick = function (e) {
  e.stopPropagation();
  if (container.classList.contains("filters--active")) {
    container.classList.remove("filters--active");
  } else {
    container.classList.add("filters--active");
  }
};

container.onclick = function (e) {
  e.stopPropagation();
};

window.onclick = function () {
  container.classList.remove("filters--active");
};

var filterName = document.getElementById("f1");
var filterAlive = document.getElementById("f2");
var filterDead = document.getElementById("f3");
var filterUnknown = document.getElementById("f4");
var nameFilter = document.getElementById("name");


filterName.addEventListener('click',()=>{
    const listResults = document.getElementById("listResults");
    listResults.innerHTML='';
    fetchData(`https://rickandmortyapi.com/api/character?name=${nameFilter.value}`);
    container.classList.remove("filters--active");
})
filterAlive.addEventListener('click',()=>{
    const listResults = document.getElementById("listResults");
    listResults.innerHTML='';
    fetchData(`https://rickandmortyapi.com/api/character?name=${nameFilter.value}&status=alive`);
    container.classList.remove("filters--active");
})
filterDead.addEventListener('click',()=>{
    const listResults = document.getElementById("listResults");
    listResults.innerHTML='';
    fetchData(`https://rickandmortyapi.com/api/character?name=${nameFilter.value}&status=dead`);
    container.classList.remove("filters--active");
})
filterUnknown.addEventListener('click',()=>{
    const listResults = document.getElementById("listResults");
    listResults.innerHTML='';
    fetchData(`https://rickandmortyapi.com/api/character?name=${nameFilter.value}&status=unknown`);
    container.classList.remove("filters--active");
})


  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      makeCard(data.results);
    } catch (error) {
      console.error(error.message);
    }
  }  

function makeCard(brokkoli){    
const listResults = document.getElementById("listResults");
    brokkoli?.forEach((card)=>{
        console.log(card);
        const item = document.createElement("li");
        if (card.status.toLowerCase() === "alive"){
            item.classList.add("Alive");
        } else if (card.status.toLowerCase() === "dead"){
            item.classList.add("Dead") ;
        } else {
            item.classList.add("Unknown");
        }
        item.innerHTML = `
            <img src= ${card.image}>
            <p>${card.name}</p>`;
        listResults.append(item);    
    });
}
     
             
