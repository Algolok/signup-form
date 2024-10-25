document.addEventListener('DOMContentLoaded', function() {
  // Get the form element and success message container
  const form = document.getElementById('signupForm');
  const successMessage = document.getElementById('successMessage');
  const emailField = document.getElementById('email');  // Get the email input field

  // Add a 'submit' event listener to the form
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();
    const userEmail = emailField.value;
    successMessage.innerHTML = `Your email ${userEmail} has been successfully signed up!`;
    successMessage.classList.remove('hidden');
    form.classList.add('hidden');
    form.reset();
  });
});

  