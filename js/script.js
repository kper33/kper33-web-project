document.addEventListener("DOMContentLoaded", function() {
    // Select form items and the target insertion box
    const fanForm = document.getElementById("fanForm");
    const dynamicGreeting = document.getElementById("dynamicGreeting");

    // Event listener processing the form logic
    fanForm.addEventListener("submit", function(event) {
        // Stop default browser page reload behavior
        event.preventDefault();

        // Capture input clean text strings
        const nameInput = document.getElementById("userName").value.trim();
        const generationSelection = document.getElementById("favGen").value;

        // Custom structural responses based on generation chosen
        let specialMessage = "";
        if (generationSelection === "2nd Gen") {
            specialMessage = "The legendary Bandit era! Excellent choice, watch out for Sheriff Buford T. Justice!";
        } else {
            specialMessage = `The ${generationSelection} cars are an absolute masterpiece of American automotive design.`;
        }

        // Output and display elements into the dynamic box container
        dynamicGreeting.innerHTML = `<p style="color: #ffcc00;">Welcome to the crew, ${nameInput}! <br> ${specialMessage}</p>`;
        dynamicGreeting.style.border = "2px dashed #ffcc00";
        dynamicGreeting.style.backgroundColor = "#222";

        // Reset the input elements form fields automatically
        fanForm.reset();
    });
});