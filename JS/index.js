let eventsList = data.events;
let listCards = eventsList;
const containerChecks = document.getElementById("checkContainer")
const contenedorCartas = document.getElementById("cardsContain")

function createCard(indEvents) {
    return `<div class="card m-3" style="width: 18rem;">
    <img src="${indEvents.image}" class="card-img-top cardimg" alt="homebanner2" style="width: 18rem">
    <div class="card-body">
      <h2 class="card-title">${indEvents.name}</h2>
      <p class="card-text">${indEvents.description}</p>
      <a href="../pages/details.html?parametro=${indEvents._id}" class="btn btn-primary">See More Details</a>
    </div>
   </div> `;
}

function newCards(listCards, container){
    let template = "";
    for (const indEvents of listCards) {
            template += createCard(indEvents);
    }
    container.innerHTML = template;
}

newCards(listCards, contenedorCartas)



//Checkboxes 

const categories = [];

for (const iterator of listCards) {
  const keyCategory = iterator.category;
  if (!categories.includes(keyCategory)) {
    categories.push(keyCategory);
  }
}

function checkBox(categ) {
  let template = "";
  for (let i = 0; i < categ.length; i++) {
    template += `<div class="form-check form-check-inline">
    <input class="form-check-input"  type="checkbox"  id="${[i]}"  value="${categ[i]}">
    <label class="form-check-label" for="${[i]}">${categ[i]}</label>
  </div>`;
  }
  return template;
}

function printCheckBox(array, container) {
  const template = checkBox(array);
  container.innerHTML = template;
}

printCheckBox(categories, checkContainer);


//Checkboxes container structure


//Filtering events

//

checkContainer.addEventListener("change", () => {
const returnFilter = filterCheck(eventsList);
printSite(returnFilter, contenedorCartas)

})

function filterCheck(array) {
  const nodeList = document.querySelectorAll("input[type='checkbox']:checked");

  const checkBoxArray = Array.from(nodeList);
  const valueArray = checkBoxArray.map((input) => input.value);
  const filterArray = array.filter((objeto) =>
    valueArray.includes(objeto.category)
  );

  return filterArray;
}
