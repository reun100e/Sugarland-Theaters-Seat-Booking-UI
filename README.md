# Sugarland Theater Seat Booking UI

This project is my submission for "Create a responsive seat selector UI in HTML, CSS, and JS" project as part of Coursera Project Network. [Coursera Project link](https://www.coursera.org/learn/showcase-create-a-responsive-seat-selector-ui-in-html-css-js/)

## Features:
- **Responsive Seat Layout:** The seat layout adjusts the size of the seat buttons based on screen size, providing a larger tap area on smaller screens.
- **Dynamic Seat Status:** The JavaScript code allows users to toggle the seat status between selected and available. Occupied seats cannot be selected.
- **Mobile-Friendly:** The layout adapts for mobile screens by reducing the seat size and making the controls more touch-friendly.
- **Movie Selection:** A movie selection dropdown is added that dynamically changes the ticket price based on the selected movie.
- **Row-Based Pricing:** Each row has a different price, making premium rows cost more. Rows can have a data-price attribute that defines the cost per seat.
- **Multiple Rows:** The layout now includes three pricing tiers—Premium, Standard, and Economy, with multiple rows in each section.
- **Row Price Labels:** Each row group is labeled with its pricing, displayed as Premium Seats, Standard Seats, and Economy Seats.
- **Pricing per Row:** Each row has a data-price attribute to indicate its per-seat price.
- **Dynamic Button Update:** The confirmation button dynamically shows the total cost of selected seats, providing immediate feedback to the user.
- **Total Price Calculation:** The total cost is updated as users select or deselect seats. This includes the price for each selected seat, combined with the movie ticket price.
- **Confirmation:** A simple confirmation message shows the number of selected seats and total price.