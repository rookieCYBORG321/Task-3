document.getElementById("contactForm").addEventListener("submit", function(e) {
    // Prevent standard page reload behavior on form submit
    e.preventDefault();

    // Capture input values from form fields
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Client-side Validation: Check for empty input fields
    if (!name || !email || !message) {
        alert("All fields are required!");
        return;
    }

    // Retrieve existing submissions array from LocalStorage, or initialize empty array if none exists
    let submissions = JSON.parse(localStorage.getItem("contacts")) || [];

    // Push new structured dataset into array
    submissions.push({ name, email, message });

    // Save updated array back to LocalStorage as a string
    localStorage.setItem("contacts", JSON.stringify(submissions));

    // UI Confirmation & Input Field Reset
    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
});