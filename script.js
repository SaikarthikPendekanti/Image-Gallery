document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const images = document.querySelectorAll('.image');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Remove active class from all buttons and add it to the clicked button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter images based on the selected category
            images.forEach(image => {
                const tag = image.getAttribute('data-tag');
                if (filter === 'all' || tag === filter) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        });
    });
});