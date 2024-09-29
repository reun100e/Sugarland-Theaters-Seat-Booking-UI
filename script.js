// Select all available seats
const seats = document.querySelectorAll(".seat.available");

// Add click event to toggle seat selection
seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    seat.classList.toggle("selected");
  });
});

// Confirm button action
document.getElementById("confirm-selection").addEventListener("click", () => {
  const selectedSeats = document.querySelectorAll(".seat.selected");
  if (selectedSeats.length > 0) {
    alert(`You have selected ${selectedSeats.length} seat(s).`);
  } else {
    alert("Please select at least one seat.");
  }
});
