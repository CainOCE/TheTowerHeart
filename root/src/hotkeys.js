document.addEventListener('keydown', function(event) {
    if (event.key === 'i' || event.key === 'I') {
        document.querySelector('.inventory').classList.toggle('active');
    }
    if (event.key === 'F1') {
        event.preventDefault();
        console.log('F1 key pressed');
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevent default context menu behavior
    // Your custom right-click behavior goes here
    console.log('Right-click prevented');
});