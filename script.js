// Select all available seats
const seats = document.querySelectorAll(".seat.available");
const movieSelect = document.getElementById("movie");
const confirmButton = document.getElementById("confirm-selection");
let ticketPrice = parseInt(movieSelect.value);

// Update total price dynamically based on seat selection
let totalAmount = 0;

// Function to calculate total
function calculateTotal() {
  const selectedSeats = document.querySelectorAll(".seat.selected");
  const seatPrices = Array.from(selectedSeats).map((seat) => {
    const row = seat.parentNode; // Get parent row
    return parseInt(row.dataset.price);
  });

  totalAmount =
    seatPrices.reduce((total, price) => total + price, 0) +
    ticketPrice * selectedSeats.length;

  // Update the confirm button text
  confirmButton.innerText = `Total: $${totalAmount} - Confirm Selection`;
}

// Add click event to toggle seat selection and calculate price
seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    seat.classList.toggle("selected");
    calculateTotal();
  });
});

// Confirm button action
confirmButton.addEventListener("click", () => {
  const selectedSeats = document.querySelectorAll(".seat.selected");
  if (selectedSeats.length > 0) {
    alert(
      `You have selected ${selectedSeats.length} seat(s) with a total cost of $${totalAmount}.`
    );
  } else {
    alert("Please select at least one seat.");
  }
});

// Update ticket price when the movie is changed
movieSelect.addEventListener("change", (e) => {
  ticketPrice = parseInt(e.target.value);
  calculateTotal();
});
