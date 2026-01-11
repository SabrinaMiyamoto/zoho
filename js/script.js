document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-section .content-item');

    faqItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            faqItems.forEach(i => {
                i.classList.remove('active');
                const icon = i.querySelector('.accordion-header i');
                if (icon) {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            });

            if (!isActive) {
                item.classList.add('active');
                const currentIcon = header.querySelector('i');
                if (currentIcon) {
                    currentIcon.classList.remove('fa-chevron-down');
                    currentIcon.classList.add('fa-chevron-up');
                }
            }
        });
    });
});