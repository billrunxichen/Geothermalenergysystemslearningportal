document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        item.classList.toggle('active');
        
        // Change + to - 
        const icon = button.querySelector('span');
        icon.innerText = item.classList.contains('active') ? '−' : '+';
    });
});

