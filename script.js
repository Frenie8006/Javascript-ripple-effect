'use strict';

////// Old version
//// Function to handle the ripple effect
// const handleRipple = function () {
//   const buttons = document.querySelectorAll('.ripple');

//   buttons.forEach(button => {
//     button.addEventListener('click', function (e) {
//       const x = e.clientX;
//       const y = e.clientY;

//       const buttonLeft = e.target.offsetLeft;
//       const buttonTop = e.target.offsetTop;

//       const xInside = x - buttonLeft;
//       const yInside = y - buttonTop;

//       const circle = document.createElement('span');
//       circle.classList.add('circle');

//       circle.style.left = xInside + 'px';
//       circle.style.top = yInside + 'px';

//       this.appendChild(circle);

//       setTimeout(() => circle.remove(), 500);
//     });
//   });
// };
// handleRipple();

////// Best and new version
// Function to handle the ripple effect
// const handleRipple = function (event) {
//   // Get the button element that was clicked
//   const button = event.target.closest('.ripple');

//   // If the click was not on a button with the 'ripple' class, exit the function
//   if (!button) return;

//   // Get the mouse coordinates relative to the button
//   const x = event.clientX;
//   const y = event.clientY;

//   // Get the position of the button relative to the viewport
//   const buttonRect = button.getBoundingClientRect();

//   // Calculate the position of the click inside the button
//   const xInside = x - buttonRect.left;
//   const yInside = y - buttonRect.top;

//   // Create a new 'circle' element for the ripple effect
//   const circle = document.createElement('span');
//   circle.classList.add('circle');

//   // Position the circle at the click coordinates
//   circle.style.left = xInside + 'px';
//   circle.style.top = yInside + 'px';

//   // Append the circle element to the button
//   button.appendChild(circle);

//   // Remove the circle element after a short delay (500ms)
//   setTimeout(() => circle.remove(), 500);
// };

// // Function to initialize the ripple effect by delegating the click event to the document
// const initializeRippleEffect = function () {
//   // Delegate the click event to the document
//   document.addEventListener('click', handleRipple);
// };

// // Call the initializeRippleEffect function to set up the ripple effect
// initializeRippleEffect();

////// Show ripple effect when click the body
// Function to handle the ripple effect
const handleRipple = function (event) {
  // Get the body by its closest parent that was clicked
  const body = event.target.closest('html');

  // Get the mouse coordinates
  const x = event.clientX;
  const y = event.clientY;

  // Get the position of the body relative to the viewport
  const bodyRect = body.getBoundingClientRect();

  // Calculate the position of the click inside the HTML
  const xInside = x - bodyRect.left;
  const yInside = y - bodyRect.top;

  // Create a new 'circle' element for the ripple effect
  const circle = document.createElement('span');
  circle.classList.add('circle');

  // Position the circle at the click coordinates
  circle.style.left = xInside + 'px';
  circle.style.top = yInside + 'px';

  // Append the circle element to the HTML child element
  body.appendChild(circle);

  // Remove the circle element after a short delay (500ms)
  setTimeout(() => circle.remove(), 500);
};

// Function to initialize the ripple effect by delegating the click event to the document
const initializeRippleEffect = function () {
  // Delegate the click event to the document
  document.addEventListener('click', handleRipple);
};

// Call the initializeRippleEffect function to set up the ripple effect
initializeRippleEffect();
