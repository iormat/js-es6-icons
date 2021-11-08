/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, 
in cui è presente il nome dell’icona e l’icona stessa.
Milestone 2
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
*/

const getMainCont = document.querySelector(".container");

//get select tag in HTML
const chooseThem = document.getElementById('filter_options');

//divide different types in different Arrays
const animalsArr = iconsArr.filter((element) => element.type === "animal");

const vegetablesArr = iconsArr.filter((element) => element.type === "vegetable");

const usersArr = iconsArr.filter((element) =>  element.type === "user");

// generalized function to print chosen type
function printResults(relativeArr) {
    getMainCont.innerHTML = "";
    relativeArr.forEach((element) =>{
        getMainCont.innerHTML += `
        <div class="card-container">
            <div class="card">
                <i class="${element.family} ${element.prefix}${element.name} ${element.type} ${element.color}"></i>
                <p>${element.name}</p>
            </div>    
        </div>`;
    });
}

//print all icons prior to choice
printResults(iconsArr);

// take value of select tag and use it to change displayed icons
document.getElementById('filter_options').addEventListener('change',

    function(){
        if(chooseThem.value === "all") {
            printResults(iconsArr);
        }else if(chooseThem.value === "animal") {
            printResults(animalsArr);
        }else if(chooseThem.value === "user") {
            printResults(usersArr);
        }else if(chooseThem.value === "vegetable") {
            printResults(vegetablesArr);
        }
    }
);