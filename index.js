async function fetchAndDisplayJoke() {
    try {
        console.log("Fetching a joke..."); // Debugging log
        // Fetch a random joke
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        console.log("Joke fetched:", response.data); // Debugging log
        
        // Construct the joke and calculate its character count
        const joke = `${response.data.setup} ${response.data.punchline}`;
        const characterCount = joke.length;
        
        // Display the joke and character count in the DOM
        document.getElementById('joke-display').innerText = joke;
        document.getElementById('character-count').innerText = `Character Count: ${characterCount}`;
    } catch (error) {
        console.error("Error fetching the joke:", error.message); // Debugging log
        document.getElementById('joke-display').innerText = "Failed to load joke. Please try again!";
        document.getElementById('character-count').innerText = "";
    }
}

// Clear the joke display
function clearJoke() {
    document.getElementById('joke-display').innerText = "Press 'Add Joke' to get a new joke!";
    document.getElementById('character-count').innerText = "";
}

// Add event listeners to the buttons
document.getElementById('add-joke').addEventListener('click', fetchAndDisplayJoke);
document.getElementById('clear-joke').addEventListener('click', clearJoke);
