// script.js
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage || (linkPage === "index.html" && currentPage === "")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

// ==============================
// DONATION POPUPS
// ==============================
document.addEventListener("DOMContentLoaded", () => {
    // Modals
    const mpesaModal = document.getElementById('mpesa-modal');
    const paypalModal = document.getElementById('paypal-modal');
    const closeButtons = document.querySelectorAll('.close');

    // Buttons
    const mpesaBtn = document.getElementById('mpesa-btn');
    const paypalBtn = document.getElementById('paypal-btn');

    // Copy buttons
    const copyPaybill = document.getElementById('copy-paybill');
    const copyTill = document.getElementById('copy-till');
    const copyPaypal = document.getElementById('copy-paypal');

    // Open modals
    mpesaBtn.addEventListener('click', () => mpesaModal.style.display = 'block');
    paypalBtn.addEventListener('click', () => paypalModal.style.display = 'block');

    // Close modals (X)
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            mpesaModal.style.display = 'none';
            paypalModal.style.display = 'none';
        });
    });

    // Close when clicking outside modal
    window.addEventListener('click', e => {
        if (e.target === mpesaModal || e.target === paypalModal) {
            mpesaModal.style.display = 'none';
            paypalModal.style.display = 'none';
        }
    });

    // Copy functions
    copyPaybill.addEventListener('click', () => {
        const paybill = document.getElementById('mpesa-paybill').textContent;
        navigator.clipboard.writeText(paybill);
        copyPaybill.textContent = "Copied!";
        setTimeout(() => copyPaybill.textContent = "Copy Paybill", 2000);
    });

    copyTill.addEventListener('click', () => {
        const till = document.getElementById('mpesa-till').textContent;
        navigator.clipboard.writeText(till);
        copyTill.textContent = "Copied!";
        setTimeout(() => copyTill.textContent = "Copy Till", 2000);
    });

    copyPaypal.addEventListener('click', () => {
        const email = document.getElementById('paypal-email').textContent;
        navigator.clipboard.writeText(email);
        copyPaypal.textContent = "Copied!";
        setTimeout(() => copyPaypal.textContent = "Copy Email", 2000);
    });
});