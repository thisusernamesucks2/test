// URL to fetch data from
const url = "https://cors-anywhere.herokuapp.com/https://cs-api.pltw.org/rant"; // Example API

// Function to fetch and display data
async function fetchData() {
    const contentDiv = document.getElementById("content");

    try {
        // Fetch data from the URL
        const response = await fetch(url, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });

        // Check if the response is OK (status 200)
        if (response.ok) {
            const data = await response.json(); // Parse the response as JSON

            // Display data in the HTML content
            contentDiv.innerHTML = `
                <p><strong>ID:</strong> ${data.id}</p>
                <p><strong>Title:</strong> ${data.title}</p>
                <p><strong>Completed:</strong> ${data.completed}</p>
            `;
        } else {
            contentDiv.textContent = "Failed to load data.";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        contentDiv.textContent = "An error occurred while fetching data.";
    }
}

// Call fetchData when the page loads
window.onload = fetchData;
