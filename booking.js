const form = document.getElementById('bookingForm');
const totalAmount = document.getElementById('totalAmount');
const confirmation = document.getElementById('confirmation');

const prices = {
    adult: 20,
    child: 10,
    senior: 15,
    youth: 8,
    college: 12
};

// Calculate total tickets
function calculateTotal() {
    const adult = parseInt(document.getElementById('adult').value) || 0;
    const child = parseInt(document.getElementById('child').value) || 0;
    const senior = parseInt(document.getElementById('senior').value) || 0;
    const youth = parseInt(document.getElementById('youth').value) || 0;
    const college = parseInt(document.getElementById('college').value) || 0;

    const total = (adult * prices.adult) + 
                  (child * prices.child) + 
                  (senior * prices.senior) +
                  (youth * prices.youth) +
                  (college * prices.college);

    totalAmount.textContent = total;
}

form?.addEventListener('input', calculateTotal);

form?.addEventListener('submit', function(e) {
    e.preventDefault();

    const adult = parseInt(document.getElementById('adult').value) || 0;
    const child = parseInt(document.getElementById('child').value) || 0;
    const senior = parseInt(document.getElementById('senior').value) || 0;
    const youth = parseInt(document.getElementById('youth').value) || 0;
    const college = parseInt(document.getElementById('college').value) || 0;

    const totalTickets = adult + child + senior + youth + college;

    // At least one ticket
    if (totalTickets === 0) {
        alert("Please select at least one ticket.");
        return;
    }

    // Get contact info
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim();

    // Basic validation
    if (!name || !email || !phone) {
        alert("Please fill out your name, email, and phone number.");
        return;
    }

    // Name validation: letters + spaces only
    if (!/^[A-Za-z\s]{3,40}$/.test(name)) {
        alert("Please enter a valid name (letters and spaces only, 3–40 characters).");
        return;
    }

    // Email validation: must contain @
    if (!email.includes("@")) {
        alert("Please enter a valid email address containing '@'.");
        return;
    }

    // Phone validation: exactly 10 digits, numbers only
    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be exactly 10 digits and contain numbers only (no letters or symbols).");
        return;
    }

    // Show confirmation
    confirmation.textContent = "Ticket Purchased!";

    // Reset form
    form.reset();
    totalAmount.textContent = '0';
});

