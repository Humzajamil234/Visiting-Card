// JavaScript code for interactive animations and hover effects
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    
    // Hover effect: Rotate the card
    card.addEventListener('mouseenter', () => {
        card.style.transform = "rotateY(10deg)";
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "rotateY(0deg)";
    });

    // Trigger the animation on scroll or when the page is loaded
    window.addEventListener('scroll', () => {
        const skills = document.querySelectorAll('.card-body .skills li, .card-body .contact li');
        skills.forEach(skill => {
            const skillPosition = skill.getBoundingClientRect().top;
            if (skillPosition < window.innerHeight) {
                skill.style.opacity = 1;
                skill.style.transform = 'translateY(0)';
            }
        });
    });
});
