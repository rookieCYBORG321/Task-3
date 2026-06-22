document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. DYNAMIC NAVBAR HANDLING
    // ==========================================
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");

    // Toggle background styling when scrolling past 50px
    window.addEventListener("scroll", function() {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
        highlightNav();
    });

    // Dynamic menu item highlighting matching visible section
    function highlightNav() {
        let scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${section.id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    // ==========================================
    // 2. CONTACT FORM INLINE VALIDATION
    // ==========================================
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Reset previous error texts and states
        document.querySelectorAll(".error-text").forEach(el => el.textContent = "");
        document.getElementById("successMessage").textContent = "";

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let isValid = true;

        // Check for empty fields
        if (!name) {
            document.getElementById("nameError").textContent = "Name field is required.";
            isValid = false;
        }

        // Check valid email expression format
        if (!email) {
            document.getElementById("emailError").textContent = "Email field is required.";
            isValid = false;
        } else if (!email.includes("@") || !email.includes(".")) {
            document.getElementById("emailError").textContent = "Please enter a valid email address containing '@' and '.'";
            isValid = false;
        }

        if (!message) {
            document.getElementById("messageError").textContent = "Message field is required.";
            isValid = false;
        }

        // Drop success payload notice if validation checks pass completely
        if (isValid) {
            document.getElementById("successMessage").textContent = "Thank you! Your portfolio message was successfully processed.";
            contactForm.reset();
        }
    });

    // ==========================================
    // 3. DARK MODE TOGGLE & LOCALSTORAGE STATES
    // ==========================================
    const themeToggle = document.getElementById("themeToggle");

    // Evaluate storage preferences instantly on initialization load
    if (localStorage.getItem("dark") === "true") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "Light Mode";
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Sync configuration variables back to user storage cache
        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("dark", isDark);

        // Update contextual text display on button node
        themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
    });
});