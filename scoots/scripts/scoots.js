function closeBanner() {
  const banner = document.getElementById("banner");
  banner.style.display = "none";
}

window.onload = function () {
  if (shouldDisplayBanner()) {
    const banner = document.getElementById("banner");
    banner.style.display = "block";
  }
};

fetch("data/scoots.json") // Fetch the JSON file
  .then((response) => response.json()) // Parse JSON
  .then((data) => {
    const tableBody = document.getElementById("vehicleTableBody");

    data.vehicles.forEach((vehicle) => {
      const row = document.createElement("tr");

      // Check if the current property is 'img'; if yes, skip adding it to the table
      Object.entries(vehicle).forEach(([key, value]) => {
        const allowedKeys = ["reservation Half Day (3 hrs)", "Max. Persons", "Rental Type"];
        if (allowedKeys.includes(key)) {
          const cell = document.createElement("td");
          cell.textContent = value;
          row.appendChild(cell);
        }
      });

      tableBody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("Error fetching or parsing the JSON file:", error);
  });
