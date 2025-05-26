document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const menuItems = document.getElementById('menu-items');

    if (menuToggle && menuItems) {
        menuToggle.addEventListener('click', function() {
            if (menuItems.style.display === 'none' || menuItems.style.display === '') {
                menuItems.style.display = 'block';
            } else {
                menuItems.style.display = 'none';
            }
        });
    }

    // Abas
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons && tabContents) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.dataset.tab;

                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                button.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    // Accordions
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    if (accordionHeaders) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                content.classList.toggle('show');
            });
        });
    }
});