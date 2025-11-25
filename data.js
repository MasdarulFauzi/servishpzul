// ANIMASI KETIKA SCROLL (LAYANAN MUNCUL)
    const boxes = document.querySelectorAll('.service-box');

    const showOnScroll = () => {
        const trigger = window.innerHeight - 100;

        boxes.forEach(box => {
            const top = box.getBoundingClientRect().top;
            if (top < trigger) {
                box.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', showOnScroll);
    showOnScroll();
    
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('overlay');
    const menuItems = document.querySelectorAll('#nav-links li a');
    
    // fungsi toggle menu
        function toggleMenu() {
    navLinks.classList.toggle('show');
     hamburger.classList.toggle('active');
     overlay.classList.toggle('show');
}

// klik menu item → tutup menu
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('show');
        hamburger.classList.remove('active');
        overlay.classList.remove('show');
    });
});

// klik overlay → tutup menu
overlay.addEventListener('click', () => {
    navLinks.classList.remove('show');
    hamburger.classList.remove('active');
    overlay.classList.remove('show');
});