const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const content = item.querySelector('.accordion-content');
        if (content.styles.display === 'none' || content.styles.display === '') {
            content.styles.display = 'block';
        } else {
            content.styles.display = 'none';
        }
    });

    // Add focus and blur event listeners to apply focus styles
    item.addEventListener('focus', () => {
        item.classList.add('focused');
    });

    item.addEventListener('blur', () => {
        item.classList.remove('focused');
    });
});
