document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Here you can send the data to your server using Fetch or XMLHttpRequest (not implemented in this example)
  // For now, we will just display a success message

  // Display the response message
  const responseMessage = document.getElementById('responseMessage');
  responseMessage.innerHTML = `<p>Thank you, ${name}! Your message has been sent.</p>`;
  responseMessage.style.color = 'green';

  // Clear the form fields
  document.getElementById('contactForm').reset();
});
