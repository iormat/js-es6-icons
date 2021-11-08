/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, 
in cui è presente il nome dell’icona e l’icona stessa.
Milestone 2
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
*/

const getMainCont = document.querySelector(".container");
console.log(getMainCont);

iconsArr.forEach((element) => {
// print inner html
getMainCont.innerHTML += `
    <div class="card-container">
        <div class="card">
            <i class="${element.family} ${element.prefix}${element.name} ${element.type} ${element.color}"></i>
            <p>${element.name}</p>
        </div>    
    </div>`;
})




