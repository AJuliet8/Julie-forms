
function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  
  // You can perform any validation here
  
  // Example: Check if name and email are not empty
  if (name.trim() === "" || email.trim() === "") {
    alert("Please fill out all fields.");
    return;
  }
  
  // If all validation passes, you can submit the form data
  // Here, we're just logging the data to the console for demonstration
  console.log("Name: " + name);
  console.log("Email: " + email);
  
  // You can also submit the form data to a server using AJAX
  // Example: Using fetch API to send data to a server
  /*
  fetch('https://example.com/submit', {
    method: 'POST',
    body: JSON.stringify({ name: name, email: email }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data received from server:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  */
}


