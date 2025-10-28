// Step 1: Select all price elements
const prices = document.querySelectorAll('.price');

// Step 2: Initialize total variable
let total = 0;

// Step 3: Loop through prices and calculate total
prices.forEach(price => {
  total += parseFloat(price.textContent); // convert text to number
});

// Step 4: Create a new table row and cell for total
const newRow = document.createElement('tr');
const totalCell = document.createElement('td');

// Step 5: Set the cell to span 2 columns and display total
totalCell.colSpan = 2;
totalCell.textContent = `Total Price: Rs ${total}`;
totalCell.style.fontWeight = 'bold';
totalCell.style.textAlign = 'center';

// Step 6: Append the total cell and row to the table
newRow.appendChild(totalCell);
document.querySelector('table').appendChild(newRow);
