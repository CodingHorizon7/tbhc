document.addEventListener("DOMContentLoaded", () => {

    const bookingForm = document.getElementById("booking-form");
    const adultsInput = document.getElementById("adults");
    const kidsInput = document.getElementById("kids");
    const totalCostDisplay = document.getElementById("total-cost");
    const eventSelect = document.getElementById("event-select");
    const dateInput = document.getElementById("date");
    const timeInput = document.getElementById("time");
    const eventSummary = document.getElementById("event-summary");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    const events = {
        "central-walk": { 
            name: "Walking Tour Central Avenue", 
            costAdult: 15, 
            costChild: 10, 
            date: "2025-12-20", 
            time: "10:00", 
            organizer: "Tampa Bay History Center", 
            contact: "info@tampabayhistory.org | 813-228-0097", 
            description: "Explore the rich history along Central Avenue with a guided walking tour. Learn about historic buildings, local stories, and Tampa Bay culture." 
        },
        "yuber-walk": { 
            name: "Walking Tour Yuber", 
            costAdult: 15, 
            costChild: 10, 
            date: "2025-12-21", 
            time: "11:00", 
            organizer: "Tampa Bay History Center", 
            contact: "info@tampabayhistory.org | 813-228-0097", 
            description: "Join us for a historical walking tour through the Yuber neighborhood, exploring hidden gems and local history." 
        },
        "cruise": { 
            name: "Cruise Adventure", 
            costAdult: 25, 
            costChild: 15, 
            date: "2025-12-22", 
            time: "14:00", 
            organizer: "Tampa Bay History Center", 
            contact: "info@tampabayhistory.org | 813-228-0097", 
            description: "Experience Tampa Bay's history from the water on our guided cruise. Learn about the port, trade, and the bay's role in local development." 
        },
        "history-joke": { 
            name: "History Joke Tour", 
            costAdult: 10, 
            costChild: 5, 
            date: "2025-12-23", 
            time: "15:00", 
            organizer: "Tampa Bay History Center", 
            contact: "info@tampabayhistory.org | 813-228-0097", 
            description: "Laugh while you learn on this fun history-themed tour. Perfect for families and those who enjoy a humorous take on the past." 
        }
    };

    // Update event details when an event is selected
    function updateEventSummary() {
        const value = eventSelect.value;
        if (events[value]) {
            const e = events[value];
            eventSummary.innerHTML = `
                <h3>${e.name}</h3>
                <p>${e.description}</p>
                <p><strong>Date:</strong> ${e.date}</p>
                <p><strong>Time:</strong> ${e.time}</p>
                <p><strong>Organizer:</strong> ${e.organizer}</p>
                <p><strong>Contact:</strong> ${e.contact}</p>
                <p><strong>Cost:</strong> Adults $${e.costAdult}, Kids $${e.costChild}</p>
            `;
            dateInput.value = e.date;
            timeInput.value = e.time;
            updateTotalCost();
        } else {
            eventSummary.innerHTML = "<h3>Event Summary</h3><p>Select an event to see details.</p>";
            dateInput.value = "";
            timeInput.value = "";
            totalCostDisplay.textContent = "0";
        }
    }

    // Calculate total cost
    function updateTotalCost() {
        const value = eventSelect.value;
        if (events[value]) {
            const e = events[value];
            const adults = parseInt(adultsInput.value) || 0;
            const kids = parseInt(kidsInput.value) || 0;
            const total = (adults * e.costAdult) + (kids * e.costChild);
            totalCostDisplay.textContent = total;
        } else {
            totalCostDisplay.textContent = "0";
        }
    }

    // Event listeners for input changes
    eventSelect.addEventListener("change", updateEventSummary);
    adultsInput.addEventListener("input", updateTotalCost);
    kidsInput.addEventListener("input", updateTotalCost);

    // Form submission
    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const adults = parseInt(adultsInput.value) || 0;
        const kids = parseInt(kidsInput.value) || 0;

        if (!eventSelect.value) {
            alert("Please select an event.");
            return;
        }

        if (adults + kids === 0) {
            alert("Please select at least one adult or child ticket.");
            return;
        }

        // Get contact info
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();

        // Required fields validation
        if (!name || !email || !phone) {
            alert("Please fill out your name, email, and phone number.");
            return;
        }

        // Name validation: letters + spaces, 3–40 characters
        if (!/^[A-Za-z\s]{3,40}$/.test(name)) {
            alert("Please enter a valid name (letters and spaces only, 3–40 characters).");
            return;
        }

        // Email validation
        if (!email.includes("@")) {
            alert("Please enter a valid email address containing '@'.");
            return;
        }

        // Phone validation: exactly 10 digits
        if (!/^\d{10}$/.test(phone)) {
            alert("Phone number must be exactly 10 digits and contain numbers only (no letters or symbols).");
            return;
        }

        // All validations passed
        alert(`Thank you, ${name}!\n\nYour booking for "${events[eventSelect.value].name}" on ${dateInput.value} at ${timeInput.value} has been confirmed.\n\nAdults: ${adults}, Kids: ${kids}\nTotal: $${totalCostDisplay.textContent}\n\nOrganizer: ${events[eventSelect.value].organizer}\nContact: ${events[eventSelect.value].contact}`);

        // Reset form
        bookingForm.reset();
        eventSummary.innerHTML = "<h3>Event Summary</h3><p>Select an event to see details.</p>";
        totalCostDisplay.textContent = "0";
    });

});
