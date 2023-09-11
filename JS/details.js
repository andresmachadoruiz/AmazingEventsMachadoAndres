let parametro = location.search;

let searchPa = new URLSearchParams(parametro);

let idEvent = searchPa.get("parametro");

let event = data.events.find((events) => events._id === idEvent);

let containerCards = document.getElementById("insertCardIntoContainer");

// Function to create the card HTML
function createDCard(element, detailsCard) {
  element.innerHTML += `<div class="row">
  <div class="col-6 object-fit-scale "><img src="${detailsCard.image}" alt="costume party" class="img-fluid"></div>
  <div class="col-6 ">
    <h3>${detailsCard.name}</h3>
    <p>${detailsCard.description}</p>
    <p>Date: ${detailsCard.date}</p>
    <p>Category:${detailsCard.category}</p>
    <p>Place: ${detailsCard.place}</p>
    <p>Capacity: ${detailsCard.capacity}</p>
    <p>Estimate: 9000</p>
    <p>Price: $12</p>
  </div>
</div>`;
}
createDCard(containerCards, event)
// Function to insert the card HTML into the container
/*function insertCardIntoContainer() {
  const detailsData = data.events[0];
  const detailsCardHtml = createDCard(detailsData);
  const container = document.getElementById("insertCardIntoContainer");

  if (container) { 
      container.innerHTML = detailsCardHtml;
  } else {
      console.error("Container element not found");
  }
}

// Call the function to insert the card into the container
insertCardIntoContainer();*/

