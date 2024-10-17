// signup.js
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('signupForm');
    const successMessage = document.getElementById('successMessage');
  
    // Add a 'submit' event listener to the form
    form.addEventListener('submit', function(event) {
      // Prevent the default form submission behavior (page reload)
      event.preventDefault();
  
      // Show the success message (by removing the 'hidden' class)
      successMessage.classList.remove('hidden');
  
      // Optionally reset the form fields
      form.reset();
    });
  });
  
