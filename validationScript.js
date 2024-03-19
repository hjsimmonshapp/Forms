    // JavaScript code for form validation
    document.addEventListener('DOMContentLoaded', function() {
      const form = document.getElementById('myForm'); // Retrieve the form element
  
      form.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent form from submitting
  
          const inputField = document.getElementById('inputField'); // Retrieve the input field element
          const inputValue = inputField.value.trim(); // Retrieve the input field value and trim whitespace
  
          const alphanumericPattern = /^[a-zA-Z0-9]+$/; // Regular expression pattern for alphanumeric input
  
          if (!alphanumericPattern.test(inputValue)) { // Check if the input value matches the pattern
              // Invalid input: display error message
              alert('Error: Input must contain only alphanumeric characters.');
          } else {
              // Valid input: display confirmation
              alert('Input is valid!');
              // You can optionally submit the form here if needed
              // form.submit();
          }
      });
  });
  