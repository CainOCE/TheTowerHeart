function toggleInventoryMenu() {
    document.querySelector('.inventory').classList.toggle('active');
}

function toggleSettingsMenu() {
    document.querySelector('.settings').classList.toggle('active');
}

function quit() {
    window.close();
}

// Set Version Number String
const textElement = document.createElement('div');
textElement.textContent = "The Tower Heart, 'Creation', v0.0.1";
textElement.style.position = 'fixed';
textElement.style.bottom = '10px';
textElement.style.right = '10px';
textElement.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
textElement.style.padding = '4px';

// Append the text element to the document body
document.body.appendChild(textElement);

// Load JSON resources
const fetchData = async () => await (await fetch('data/resources.json')).json();
const fetchItems = async () => await (await fetch('data/items.json')).json();

// Populate the resources
async function populateResources() {
    const resourcesDiv = document.querySelector('.resources');
    const data = await fetchData();

    data.forEach(resource => {
        const div = document.createElement('div');
        div.classList.add('resource');
        div.innerHTML = `
            <img src="${resource.image}" alt="${resource.name}">
            <h1>${resource.name}</h1>
            <h2>${resource.value || 0}</h2>
            <h3>${resource.rate || '+0/s'}</h3>`;
        resourcesDiv.appendChild(div);
    });
}

// Function to update the fill height based on value
function updateFill(value) {
    const fill = document.getElementById('fill');
    const maxHeight = 100;
    const height = (value / 100) * maxHeight;
    fill.style.height = height + '%';
}

// Example usage:
updateFill(50); // Will fill half the circle

populateResources();
