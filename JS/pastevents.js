let eventsList = data.events;
const currentDate = parseInt(data.currentDate.split("-").join(""));

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

function newCards(listCards) {
    let template = "";
    for (const indEvents of listCards) {
        let dateToNumber = parseInt(indEvents.date.split("-").join(""));
        if (dateToNumber < currentDate) {
            template += createCard(indEvents);
        }
    }
    return template;
}

function printSite(template, id) {
    const container = document.getElementById(id);

    // Check if the container element was found
    if (container) {
        // Access and manipulate the container's properties, like innerHTML
        container.innerHTML = template;
    } else {
        console.error("Container element not found");
    }
}  
    const cardsTemplate = newCards(eventsList);
    printSite(cardsTemplate, "cardsContain");


//Checkboxes 

function createChecks(checksCats) {
    return `
      <div class="form-check form-check-inline">
        <input class="form-check-input"  type="checkbox"  id="${checksCats}"  value="${checksCats}">
        <label class="form-check-label" for="${checksCats}">${checksCats}</label>
      </div>  
    `
  }
  
  // checks creation
  
  
  function filteredChecks (eventsList, category) {
    let filteringArray = [];
    for (const card of eventsList) {
      if (card.category == checkBox.value) {
        filteringArray.push(card);
      }
    }
    const filteredArray = filteringArray.filter(filteredChecks);
    return filteringArray
  }
  
  
  
  function newCheckBox(eventsList) {
    let template = "";
    for (const event of eventsList) {
      let aux = event.category;
        console.log(aux)
        template += createChecks(aux);
    }
   return template
    } 
  const checkbox = newCheckBox (eventsList);
  
  
  //Print checks array
  printSite(checkbox, "checkContainer");
  
  //remove repeat arrays
  const arrayChecks = eventsList.map(event => event.category);
  
  const uniqueSet = new Set(arrayChecks);
  const uniqueArray = [...uniqueSet];
  
  console.log(uniqueArray)
  
  // Define a Set to store unique categories
  const uniqueCategories = new Set();
  
  // Iterate through events and add unique categories to the Set
  for (const event of eventsList) {
    uniqueCategories.add(event.category);
  }
  
  // Create checkboxes based on unique categories
  let checkboxesHTML = "";
  for (const category of uniqueCategories) {
    checkboxesHTML += createChecks(category);
  }
  
  // Print the checkboxes
  printSite(checkboxesHTML, "checkContainer");

