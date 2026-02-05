document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-icon-open');
    const closeIcon = document.getElementById('menu-icon-close');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                // Open menu
                mobileMenu.classList.remove('hidden');
                // Small delay to allow transition
                setTimeout(() => {
                    mobileMenu.classList.remove('scale-y-0', 'opacity-0', 'invisible');
                    mobileMenu.classList.add('scale-y-100', 'opacity-100', 'visible');
                }, 10);
                openIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            } else {
                // Close menu
                mobileMenu.classList.remove('scale-y-100', 'opacity-100', 'visible');
                mobileMenu.classList.add('scale-y-0', 'opacity-0', 'invisible');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300); // Match duration-300
                openIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('bg-white', 'shadow-md', 'py-3');
                navbar.classList.remove('bg-transparent', 'py-5');
            } else {
                navbar.classList.remove('bg-white', 'shadow-md', 'py-3');
                navbar.classList.add('bg-transparent', 'py-5');
            }
        });
    }

    // Logo Click Scroll to Top
    const logoLink = document.getElementById('logo-link');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // Menu Accordion Logic
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('.chevron-icon');
            
            // Close other items
            accordionBtns.forEach(otherBtn => {
                if (otherBtn !== btn) {
                    const otherContent = otherBtn.nextElementSibling;
                    const otherIcon = otherBtn.querySelector('.chevron-icon');
                    if (otherContent) {
                        otherContent.style.maxHeight = '0px';
                        otherContent.classList.remove('opacity-100');
                        otherContent.classList.add('opacity-0');
                    }
                    otherBtn.classList.remove('bg-primary', 'text-white');
                    otherBtn.classList.add('hover:bg-stone-50', 'text-stone-900');
                    if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current item
            if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                content.style.maxHeight = '0px';
                content.classList.remove('opacity-100');
                content.classList.add('opacity-0');
                btn.classList.remove('bg-primary', 'text-white');
                btn.classList.add('hover:bg-stone-50', 'text-stone-900');
                if (icon) icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.maxHeight = content.scrollHeight + 500 + "px"; // Add buffer for subcategories
                content.classList.remove('opacity-0');
                content.classList.add('opacity-100');
                btn.classList.add('bg-primary', 'text-white');
                btn.classList.remove('hover:bg-stone-50', 'text-stone-900');
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // Automatically open first category on menu page
    const firstAccordionBtn = document.querySelector('.accordion-btn');
    if(firstAccordionBtn && window.location.pathname.includes('menu.html')) {
        firstAccordionBtn.click();
    }
    
    // Reservation Form (WhatsApp)
    const reserveForm = document.getElementById('reservation-form');
    if (reserveForm) {
        reserveForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('res-name').value;
            const date = document.getElementById('res-date').value;
            const time = document.getElementById('res-time').value;
            const guests = document.getElementById('res-guests').value;
            
            const message = `Hello, I would like to book a table.\n\nName: ${name}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`;
            const whatsappUrl = `https://wa.me/211928011500?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }
});