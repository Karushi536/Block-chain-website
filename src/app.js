document.getElementById('submit-button').addEventListener('click', function() {
    const voterId = document.getElementById('voter-id').value;
    if (voterId) {
        document.getElementById('positions').style.display = 'block';
    } else {
        alert('Please enter a valid voting ID.');
    }
});

const positions = ['president', 'governor', 'senate', 'mp', 'mca'];
positions.forEach(position => {
    document.querySelector(`[data-position="${position}"]`).addEventListener('click', function(event) {
        event.preventDefault();
        showCandidates(position);
    });
});

function showCandidates(position) {
    const candidatesData = {
        president: [
            { name: 'Joseph Njoroge', photo: 'images\Joseph_Njoroge.png' },
            { name: 'Jane Smith', photo: 'jane_smith.jpg' },
            { name: 'Sam Wilson', photo: 'sam_wilson.jpg' },
            { name: 'Linda Taylor', photo: 'linda_taylor.jpg' },
            { name: 'Michael Brown', photo: 'michael_brown.jpg' },
            { name: 'Susan Green', photo: 'susan_green.jpg' }
        ],
        governor: [
            { name: 'Alice Johnson', photo: 'alice_johnson.jpg' },
            { name: 'Bob Brown', photo: 'bob_brown.jpg' },
            { name: 'Charlie Davis', photo: 'charlie_davis.jpg' },
            { name: 'Dana White', photo: 'dana_white.jpg' },
            { name: 'Eve Black', photo: 'eve_black.jpg' },
            { name: 'Frank Green', photo: 'frank_green.jpg' }
        ],
        senate: [
            { name: 'Grace Lee', photo: 'grace_lee.jpg' },
            { name: 'Hank Hill', photo: 'hank_hill.jpg' },
            { name: 'Ivy King', photo: 'ivy_king.jpg' },
            { name: 'Jackie Chan', photo: 'jackie_chan.jpg' },
            { name: 'Kyle Lowry', photo: 'kyle_lowry.jpg' },
            { name: 'Laura Moon', photo: 'laura_moon.jpg' }
        ],
        mp: [
            { name: 'Monica Green', photo: 'monica_green.jpg' },
            { name: 'Nathan Drake', photo: 'nathan_drake.jpg' },
            { name: 'Oscar Wilde', photo: 'oscar_wilde.jpg' },
            { name: 'Paul Harris', photo: 'paul_harris.jpg' },
            { name: 'Quincy Adams', photo: 'quincy_adams.jpg' },
            { name: 'Rachel Brown', photo: 'rachel_brown.jpg' }
        ],
        mca: [
            { name: 'Steve Jobs', photo: 'steve_jobs.jpg' },
            { name: 'Tim Cook', photo: 'tim_cook.jpg' },
            { name: 'Uma Thurman', photo: 'uma_thurman.jpg' },
            { name: 'Vince Gilligan', photo: 'vince_gilligan.jpg' },
            { name: 'Wendy Davis', photo: 'wendy_davis.jpg' },
            { name: 'Xander Cage', photo: 'xander_cage.jpg' }
        ]
    };

    const candidatesListSection = document.getElementById('candidates-list');
    const positionsSection = document.getElementById('positions');
    const candidateCards = document.getElementById('candidate-cards');
    const positionTitle = document.getElementById('position-title');

    positionTitle.textContent = position.charAt(0).toUpperCase() + position.slice(1);
    candidateCards.innerHTML = '';

    candidatesData[position].forEach((candidate, index) => {
        const card = document.createElement('div');
        card.classList.add('candidate-card');
        card.innerHTML = `
            <input type="radio" id="candidate-${index}" name="candidate" value="${candidate.name}">
            <label for="candidate-${index}">
                <img src="${candidate.photo}" alt="${candidate.name}">
                <p>${candidate.name}</p>
            </label>
        `;
        candidateCards.appendChild(card);
    });

    positionsSection.style.display = 'none';
    candidatesListSection.style.display = 'block';
    document.getElementById('vote-button').setAttribute('data-position', position); // Set data-position attribute for vote button
}

document.getElementById('candidates-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
    const position = document.getElementById('vote-button').getAttribute('data-position');
    if (selectedCandidate) {
        // Add code here to handle the voting process
        alert(`Vote for ${selectedCandidate.value} submitted for ${position}.`);
        document.getElementById('positions').style.display = 'block'; // Show positions after voting
        document.getElementById('candidates-list').style.display = 'none'; // Hide candidates list after voting
        if (position === 'mca') {
            // Show thank you message after the last position
            alert('Thank you for participating in your citizen role!');
        } else {
            document.getElementById('next-post-prompt').style.display = 'block'; // Show next post prompt
        }
    } else {
        alert('Please select a candidate.');
    }
});

document.getElementById('back-button').addEventListener('click', () => {
    document.getElementById('candidates-list').style.display = 'none';
    document.getElementById('positions').style.display = 'block';
});

document.getElementById('next-post-prompt').addEventListener('click', () => {
    document.getElementById('next-post-prompt').style.display = 'none';
    // Add code here to handle moving to the next post
});
