document.addEventListener("DOMContentLoaded", function() {
    // Get DOM elements
    const votingIdForm = document.querySelector(".voting-id-form");
    const positionsSection = document.getElementById("positions");
    const submitButton = document.getElementById("submit-button");

    // Event listener for submit button
    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Hide voting ID form and show positions section
        votingIdForm.style.display = "none";
        positionsSection.style.display = "block";
    });

    // Event listener for position links
    const positions = ["presidency", "deputy-presidency", "governor", "deputy-governor", "senator", "mp"];
    positions.forEach(position => {
        const positionLink = document.getElementById(`${position}-link`);
        positionLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            // Show candidates list for the selected position
            displayCandidates(position);
        });
    });

    // Function to display candidates for a given position
    function displayCandidates(position) {
        // Mock candidate data (Replace this with actual data from your backend)
        const candidatesData = {
            presidency: [
                { name: "Candidate 1", party: "Party A", image: "candidate1.jpg" },
                { name: "Candidate 2", party: "Party B", image: "candidate2.jpg" }
            ],
            // Add data for other positions as needed
        };

        // Get candidates list container
        const candidatesList = document.getElementById("candidates-list");
        // Clear previous candidates
        candidatesList.innerHTML = "";

        // Fetch candidates data for the selected position
        const candidates = candidatesData[position];

        // Display candidates
        candidates.forEach(candidate => {
            const candidateElement = document.createElement("div");
            candidateElement.classList.add("candidate");

            const imageElement = document.createElement("img");
            imageElement.src = candidate.image;
            candidateElement.appendChild(imageElement);

            const nameElement = document.createElement("p");
            nameElement.textContent = candidate.name;
            candidateElement.appendChild(nameElement);

            const partyElement = document.createElement("p");
            partyElement.textContent = `Party: ${candidate.party}`;
            candidateElement.appendChild(partyElement);

            candidatesList.appendChild(candidateElement);
        });

        // Hide positions section and show vote form
        positionsSection.style.display = "none";
        document.getElementById("vote-form").style.display = "block";
    }
});
