
const menuButton = document.getElementById('menuButton');
const popupMenu = document.getElementById('popupMenu');

menuButton.addEventListener('click', () => {
    popupMenu.style.display = popupMenu.style.display === 'block' ? 'none' : 'block';
});

// Close the popup menu if clicking outside of it
window.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !popupMenu.contains(event.target)) {
        popupMenu.style.display = 'none';
    }
});
