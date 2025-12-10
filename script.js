// ============================
// MOBILE MENU TOGGLE
// ============================
const mobileMenu = document.getElementById("mobile-menu");
const navbarMenu = document.querySelector(".navbar__menu");

mobileMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
});

// CLOSE MOBILE MENU WHEN NAV LINK IS CLICKED
const navLinks = document.querySelectorAll(".navbar__links");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navbarMenu.classList.contains("active")) {
            navbarMenu.classList.remove("active");
        }
    });
});

// ============================
// VALIDATION FUNCTIONS
// ============================

// Name: letters + spaces only (3–40 chars)
function validateName(name) {
    return /^[A-Za-z\s]{3,40}$/.test(name);
}

// Email format
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Phone validation: exactly 10 digits, numbers only
    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be exactly 10 digits and contain numbers only (no letters or symbols).");
        return;
    }

    bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = eventSelect.value;
    const adults = parseInt(adultsInput.value) || 0;
    const kids = parseInt(kidsInput.value) || 0;

    // Validate event selection
    if (!value) {
        alert("Please select an event.");
        return;
    }

    // Validate that at least 1 ticket is selected
    if (adults + kids === 0) {
        alert("Please select at least one adult or child ticket.");
        return;
    }

    alert(`Thank you, ${document.getElementById("name").value}!\n\nYour booking for "${events[value].name}" on ${dateInput.value} at ${timeInput.value} has been confirmed.\n\nAdults: ${adultsInput.value}, Kids: ${kidsInput.value}\nTotal: $${totalCostDisplay.textContent}\n\nOrganizer: ${events[value].organizer}\nContact: ${events[value].contact}`);

    bookingForm.reset();
    eventSummary.innerHTML = "<h3>Event Summary</h3><p>Select an event to see details.</p>";
    totalCostDisplay.textContent = "0";
});


// ============================
// HERO IMAGE FADE-IN
// ============================
document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero-text");
    if (heroText) {
        heroText.style.opacity = 0;
        heroText.style.transition = "opacity 2s ease-in-out";
        setTimeout(() => {
            heroText.style.opacity = 1;
        }, 300);
    }
});

// ============================
// HERO IMAGE ZOOM ON SCROLL
// ============================
window.addEventListener("scroll", () => {
    const heroImg = document.querySelector(".hero img");
    if (heroImg) {
        let scrollY = window.scrollY;
        heroImg.style.transform = `scale(${1 + scrollY / 5000})`;
    }
});

// ============================
// EVENT BOOKING FUNCTIONALITY
// ============================

// Event data with costs
const eventSummaries = {
    "ybor-walking-tour": {
        title: "Ybor City Walking Tour",
        summary: "Explore the vibrant streets of historic Ybor City, Tampa’s Cuban-Italian-Spanish neighborhood. Learn about its immigrant roots, cigar industry, and cultural landmarks.",
        datetime: "10:00 AM – 11:30 AM",
        organizer: "Tampa Bay History Center",
        email: "info@tampabayhistorycenter.org",
        phone: "(813) 228-0097",
        costAdult: 15,
        costChild: 8
    },
    "walking-central-ave": {
        title: "Walking Tour Central Avenue",
        summary: "Discover the rich history of Central Avenue in Tampa. Highlights historic buildings, local landmarks, and hidden gems.",
        datetime: "1:00 PM – 2:30 PM",
        organizer: "Tampa Bay History Center",
        email: "info@tampabayhistorycenter.org",
        phone: "(813) 228-0097",
        costAdult: 12,
        costChild: 6
    },
    "cruise-tour": {
        title: "Tampa Bay Cruise Tour",
        summary: "Enjoy a scenic cruise around Tampa Bay while learning about its maritime history and waterfront landmarks.",
        datetime: "3:00 PM – 5:00 PM",
        organizer: "Tampa Bay History Center",
        email: "info@tampabayhistorycenter.org",
        phone: "(813) 228-0097",
        costAdult: 25,
        costChild: 12
    },
    "history-joke-event": {
        title: "History Joke Experience",
        summary: "Interactive and humorous event where Tampa Bay’s history meets fun activities, suitable for families and groups.",
        datetime: "11:00 AM – 12:00 PM",
        organizer: "Tampa Bay History Center",
        email: "info@tampabayhistorycenter.org",
        phone: "(813) 228-0097",
        costAdult: 10,
        costChild: 5
    }
};

// Show event summary when selecting an event

// ============================
// WEBSITE BOOKING FORM SUBMISSION
// ============================
const bookingForm = document.getElementById("booking-form");

if (bookingForm) {
    bookingForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Get form values
        const eventKey = document.getElementById("event").value;
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const date = document.getElementById("date").value;
        const adults = parseInt(document.getElementById("adults").value) || 0;
        const kids = parseInt(document.getElementById("kids").value) || 0;

        // ============================
        // BASIC VALIDATION
        // ============================
        if (!eventKey || !name || !email || !phone || !date) {
            alert("Please fill out all required fields.");
            return;
        }

        // Must select at least one ticket
        if (adults + kids === 0) {
            alert("Please select at least one ticket.");
            return;
        }

        // No negative numbers
        if (adults < 0 || kids < 0) {
            alert("Ticket quantities cannot be negative.");
            return;
        }

         // ============================
         // NAME VALIDATION (letters + spaces only, 3–40 characters)
         // ============================
        const trimmedName = name.trim();
        if (!/^[A-Za-z\s]+$/.test(trimmedName) || trimmedName.length < 3 || trimmedName.length > 40) {
             alert("Please enter a valid name (letters and spaces only, 3–40 characters).");
            return;
         }


        // ============================
        // EMAIL VALIDATION
        // ============================
        if (!email.includes("@")) {
            alert("Please enter a valid email address containing '@'.");
            return;
        }

        // ============================
        // PHONE VALIDATION
        // ============================
        if (!/^\d{10}$/.test(phone)) {
            alert("Phone number must be exactly 10 digits and contain numbers only (no letters or symbols).");
            return;
        }

        // ============================
        // CALCULATE TOTAL
        // ============================
        const eventInfo = eventSummaries[eventKey];
        const totalCost = (adults * eventInfo.costAdult) + (kids * eventInfo.costChild);

        // ============================
        // SHOW CONFIRMATION
        // ============================
        alert(`Thank you, ${name}!

Your booking for "${eventInfo.title}" on ${date} (${eventInfo.datetime}) is confirmed.

Adults: ${adults} x $${eventInfo.costAdult} = $${adults * eventInfo.costAdult}
Kids: ${kids} x $${eventInfo.costChild} = $${kids * eventInfo.costChild}
Total Cost: $${totalCost}

Organizer: ${eventInfo.organizer}
Email: ${eventInfo.email}
Phone: ${eventInfo.phone}`);

        // Reset form
        bookingForm.reset();
        document.getElementById("event-summary").innerHTML = "<p>Please select an event to see the details.</p>";
    });
}

// ============================
// CONTACT FORM SUBMISSION
// ============================
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !phone || !message) {
            alert("Please fill out all fields before sending.");
            return;
        }

        // Show confirmation message
        const formMessage = document.getElementById("form-message");
        formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
        
        // Reset form
        contactForm.reset();
    });
}


