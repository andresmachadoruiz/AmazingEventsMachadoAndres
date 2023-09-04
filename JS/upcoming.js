let eventsList = data.events;
const currentDate = parseInt(data.currentDate.split("-").join(""));

function createCard(indEvents) {
    return `
    <div class="card1 col">
        <img src="${indEvents.image}" class="card-img-top" alt="homebanner2" style="width: 18rem">
        <div class="card-body">
            <h2 class="card-title">${indEvents.name}</h2>
            <p class="card-text">${indEvents.description}</p>
            <a href="./pages/details.html" class="btn btn-primary">See More Details</a>
        </div>
    </div>`;
}

function newCards(listCards) 
    let template = "";
    for (const indEvents of listCards) {
        if (dateToNumber >= currentDate) {

        if (dateToNumber >= currentDate) {
            template += createCard(indEvents);
        }
    }
    return template;
}

function printSite(template, id) {
    let container = document.getElementById(id);
    container.innerHTML = template;
}
const cardDisplay = newCards(eventsList);
printSite(cardDisplay, "cardsContain");

