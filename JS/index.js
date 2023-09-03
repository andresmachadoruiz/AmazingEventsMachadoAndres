let eventsList = data.events

function createCard(indEvents) {
 return   `<div class="card1 col">
 <img src="${indEvents.image}" class="card-img-top" alt="homebanner2" style="width: 18rem">
 <div class="card-body">
   <h2 class="card-title">${indEvents.name}</h2>
   <p class="card-text">${indEvents.description}</p>
   <a href="./pages/details.html" class="btn btn-primary">See More Details</a>
 </div>
</div> `
}

function newCards(listCards) {
let template = "";
for (const card of listCards) {
    template += createCard(card);
}
return template;
}

function printSite(template, id){

let container = document.getElementById(id);
container.innerHTML = template;
}

const template = newCards(eventsList);
printSite(template, "cardsContain");
