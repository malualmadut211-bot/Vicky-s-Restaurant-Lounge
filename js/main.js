
// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const reservationForm = document.getElementById('reservation-form');

// Concierge Elements
const conciergeBtn = document.getElementById('concierge-btn');
const conciergeModal = document.getElementById('concierge-modal');
const conciergeContent = document.getElementById('concierge-content');
const conciergeClose = document.getElementById('concierge-close');
const conciergeForm = document.getElementById('concierge-form');
const conciergeInput = document.getElementById('concierge-input');
const conciergeResponse = document.getElementById('concierge-response');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Render Icons
    lucide.createIcons();

    // Scroll Listener
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-black/95', 'shadow-xl', 'py-2');
            navbar.classList.remove('bg-transparent', 'py-6');
        } else {
            navbar.classList.remove('bg-black/95', 'shadow-xl', 'py-2');
            navbar.classList.add('bg-transparent', 'py-6');
        }
    });

    // Mobile Menu Listeners
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('translate-x-full');
        if (isOpen) {
            mobileMenu.classList.add('translate-x-full');
            mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
        } else {
            mobileMenu.classList.remove('translate-x-full');
            mobileMenuBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
        }
        lucide.createIcons();
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
            lucide.createIcons();
        });
    });

    // Reservation Form
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(reservationForm);
        const name = formData.get('name');
        const date = formData.get('date');
        const time = formData.get('time');
        const guests = formData.get('guests');
        const phone = formData.get('phone');

        if (!name || !date) {
            alert("Please provide your name and a date for the reservation.");
            return;
        }

        const message = `*New Table Reservation Request*\n\n👤 Name: ${name}\n📅 Date: ${date}\n⏰ Time: ${time}\n👥 Guests: ${guests}\n📞 Phone: ${phone}`;
        // Target Number: 0928011500 (International format: 211928011500)
        const whatsappUrl = `https://wa.me/211928011500?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });

    // Concierge Logic
    setupConcierge();
});

function setupConcierge() {
    if (!conciergeBtn) return;
    conciergeBtn.addEventListener('click', () => {
        conciergeModal.classList.remove('hidden');
        // Small delay to allow display block to apply before opacity transition
        setTimeout(() => {
            conciergeModal.classList.remove('opacity-0');
            conciergeContent.classList.remove('translate-y-10');
        }, 10);
    });

    const closeConcierge = () => {
        conciergeModal.classList.add('opacity-0');
        conciergeContent.classList.add('translate-y-10');
        setTimeout(() => {
            conciergeModal.classList.add('hidden');
        }, 300);
    };

    conciergeClose.addEventListener('click', closeConcierge);

    // Close on click outside
    conciergeModal.addEventListener('click', (e) => {
        if (e.target === conciergeModal) {
            closeConcierge();
        }
    });

    conciergeForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const query = conciergeInput.value.trim();
        if (!query) return;

        // Simulate Loading
        const btn = document.getElementById('concierge-submit');
        const originalIcon = btn.innerHTML;
        btn.innerHTML = '<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>';
        
        // Mock AI response for static site (no API key needed)
        setTimeout(() => {
            const recommendations = [
                "I highly recommend our Grilled Tilapia. It is a local favorite!",
                "If you are in the mood for something hearty, try the Ribeye Steak.",
                "The Vicky's Mixed Grill is perfect for sharing with friends.",
                "For a light evening, the Chef's Soup and a glass of House Wine is divine."
            ];
            const randomRec = recommendations[Math.floor(Math.random() * recommendations.length)];
            
            conciergeResponse.textContent = randomRec;
            conciergeResponse.classList.remove('hidden');
            
            btn.innerHTML = originalIcon;
        }, 1000);
    });
}
