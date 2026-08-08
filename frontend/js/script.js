document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        const answer = question.nextElementSibling;
        answer.style.display = "none"; 

        question.addEventListener('click', () => {
            if (answer.style.display === "none") {
                answer.style.display = "block";
                question.style.color = "#990000"; 
            } else {
                answer.style.display = "none";
                question.style.color = "#cc0000"; 
            }
        });
    });

    const form = document.getElementById('artwork-submission-form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const existingError = document.getElementById('form-error-message');
            if (existingError) {
                existingError.remove();
            }

            const artistName = document.getElementById('artist-name').value.trim();
            const email = document.getElementById('artist-email').value.trim();
            const title = document.getElementById('artwork-title').value.trim();
            const categorySelected = document.querySelector('input[name="category"]:checked');

            let errorMessage = "";

            if (artistName === "") {
                errorMessage += "Artist Name is required.<br>";
            }
            
            if (email === "" || !email.includes('@') || !email.includes('.')) {
                errorMessage += "A valid Email Address is required.<br>";
            }
            
            if (title === "") {
                errorMessage += "Artwork Title is required.<br>";
            }
            
            if (!categorySelected) {
                errorMessage += "Please select a Category.<br>";
            }

            if (errorMessage !== "") {
                const errorDiv = document.createElement('div');
                errorDiv.id = 'form-error-message';
                errorDiv.style.color = "white";
                errorDiv.style.backgroundColor = "#cc0000";
                errorDiv.style.padding = "10px";
                errorDiv.style.marginBottom = "15px";
                errorDiv.style.borderRadius = "4px";
                errorDiv.innerHTML = `<strong>Please fix the following errors:</strong><br>${errorMessage}`;

                form.insertBefore(errorDiv, form.firstChild);
            } else {
                // --- NEW FETCH CODE STARTS HERE ---
                const formData = {
                    name: artistName,
                    email: email
                };

                fetch('http://localhost:3000/api/students/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                .then(response => response.json())
                .then(data => {
  
                    alert(data.message); 
                    form.reset();
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert("There was an error connecting to the server.");
                });

            }
        });
    }

    const artworkImages = document.querySelectorAll('.artwork-card img');

    artworkImages.forEach(img => {
        img.style.cursor = "zoom-in";

        img.addEventListener('click', () => {
            if (img.style.transform === "scale(1.5)") {
                img.style.transform = "scale(1)";
                img.style.position = "static";
                img.style.zIndex = "1";
                img.style.boxShadow = "none";
                img.style.cursor = "zoom-in";
            } else {
                img.style.transform = "scale(1.5)";
                img.style.transition = "transform 0.3s ease";
                img.style.position = "relative";
                img.style.zIndex = "100"; 
                img.style.boxShadow = "0px 10px 30px rgba(0,0,0,0.5)";
                img.style.cursor = "zoom-out";
            }
        });
    });
});