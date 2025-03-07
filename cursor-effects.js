// Create cursor glow effect
const cursorGlow = document.createElement('div');
cursorGlow.classList.add('cursor-glow');
document.body.appendChild(cursorGlow);

// Update cursor glow position
document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        cursorGlow.style.left = e.clientX - 10 + 'px';
        cursorGlow.style.top = e.clientY - 10 + 'px';
    });
});

// Add click effect
document.addEventListener('mousedown', () => {
    cursorGlow.style.transform = 'scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursorGlow.style.transform = 'scale(1)';
});

// Add hover effect for interactive elements
const interactiveElements = document.querySelectorAll('a, button, input, .condition-card');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursorGlow.style.transform = 'scale(1.5)';
        cursorGlow.style.background = 'rgba(0, 245, 255, 0.4)';
    });

    element.addEventListener('mouseleave', () => {
        cursorGlow.style.transform = 'scale(1)';
        cursorGlow.style.background = 'rgba(0, 245, 255, 0.3)';
    });
}); 