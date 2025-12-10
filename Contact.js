document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");
    const formMessage = document.getElementById("form-message");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // prevent form from refreshing the page

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const message = messageInput.value.trim();

        // Basic validation
        if (!name || !email || !phone || !message) {
            formMessage.textContent = "Please fill out all fields.";
            formMessage.style.color = "red";
            return;
        }
      
    // Phone validation: exactly 10 digits, numbers only
    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be exactly 10 digits and contain numbers only (no letters or symbols).");
        return;
    }

        // All validations passed
        formMessage.textContent = "Message sent successfully! Thank you for contacting us.";
        formMessage.style.color = "green";

        // Optionally, you can clear the form
        contactForm.reset();
    });
});
