// Function to open the modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close the modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const bouquetItems = document.querySelectorAll('.bouquet-item');

    const showOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.75;

        bouquetItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', showOnScroll);
    showOnScroll(); // Initial check for items in view
});
