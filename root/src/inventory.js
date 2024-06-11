document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.inventory-tab');
    const panels = document.querySelectorAll('.inventory-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetPanelId = this.dataset.target;
            const targetPanel = document.getElementById(targetPanelId);

            panels.forEach(panel => {
                panel.classList.remove('active');
            });
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });

            this.classList.add('active');
            targetPanel.classList.add('active');
        });
    });
});
