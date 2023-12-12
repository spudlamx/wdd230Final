function checkDates() {
    var rentalDate = new Date(document.getElementById('rental_date').value);
    var returnDate = new Date(document.getElementById('return_date').value);
  
    if (returnDate <= rentalDate) {
      alert("Return date must be after the rental date.");
      
    }
  }