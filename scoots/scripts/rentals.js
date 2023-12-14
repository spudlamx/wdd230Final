document.addEventListener('DOMContentLoaded', function() {
    fetch('data/scoots.json') // Fetch the JSON file
      .then(response => response.json())
      .then(data => {
        const rentalsCards = document.getElementById('rentalsCards');
  
        data.vehicles.forEach(vehicle => {
          const card = document.createElement('div');
          card.classList.add('card');
  
          card.innerHTML = `
          <h3>${vehicle['Rental Type']}</h3>
            <img src="${vehicle.img}" alt="${vehicle['Rental Type']}">
            <div class="card-info">
              <p>Max. Persons: ${vehicle['Max. Persons']}</p>
              <h4>Reservation:</h4>
              <p>Half Day (3 hrs): ${vehicle['reservation Half Day (3 hrs)']}</p>
              <p>Full Day: ${vehicle['reservation Full Day']}</p>
              <h4>Walk-in:</h4>
              <p>Half Day (3 hrs): ${vehicle['walk-in Half Day (3 hrs)']}</p>
              <p>Full Day: ${vehicle['walk-in Full Day']}</p>
            </div>
          `;
  
          rentalsCards.appendChild(card);
        });
      })
      .catch(error => console.log(error));
  });
  