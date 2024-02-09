const postFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const title = document.querySelector('#post-title').value.trim();
    const description = document.querySelector('#post-description').value.trim();
  
    if (title && description) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  document.querySelector(".post-form").addEventListener("submit",postFormHandler)