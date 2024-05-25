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
            { name: 'Joseph Njoroge', photo: 'src\images\Joseph_Njoroge.png' },
            { name: 'Jane Smith', photo: 'images\Joseph_Njoroge.png' },
            { name: 'Sam Wilson', photo: 'images\Joseph_Njoroge.png' },
            { name: 'Linda Taylor', photo: 'images\Joseph_Njoroge.png' },
            { name: 'Michael Brown', photo: 'images\Joseph_Njoroge.png' },
            { name: 'Susan Green', photo: 'images\Joseph_Njoroge.png' }
        ],
        governor: [
            { name: 'Alice Johnson', photo: 'images\Joseph_Njoroge.png' },
            { name: 'Bob Brown', photo: 'images\Joseph_Njoroge.png' },
            { name: 'Charlie Davis', photo: 'images\Joseph_Njoroge.png' },
            { name: 'Dana White', photo: 'images\Joseph_Njoroge.png' },
            { name: 'Eve Black', photo: 'images\Joseph_Njoroge.png.jpg' },
            { name: 'Frank Green', photo: 'images\Joseph_Njoroge.png.jpg' }
        ],
        senate: [
            { name: 'Grace Lee', photo: 'grace_lee.images\Joseph_Njoroge.png' },
            { name: 'Hank Hill', photo: 'images\Joseph_Njoroge.png.jpg' },
            { name: 'Ivy King', photo: 'images\Joseph_Njoroge.png.jpg' },
            { name: 'Jackie Chan', photo: 'images\Joseph_Njoroge.png' },
            { name: 'Kyle Lowry', photo: 'images\Joseph_Njoroge.png.jpg' },
            { name: 'Laura Moon', photo: 'images\Joseph_Njoroge.png' }
        ],
        mp: [
            { name: 'Monica Green', photo: 'images\Joseph_Njoroge.png' },
            { name: 'Nathan Drake', photo: 'images\Joseph_Njoroge.png' },
            { name: 'Oscar Wilde', photo: 'images\Joseph_Njoroge.png.jpg' },
            { name: 'Paul Harris', photo: 'images\Joseph_Njoroge.png.jpg' },
            { name: 'Quincy Adams', photo: 'images\Joseph_Njoroge.png.jpg' },
            { name: 'Rachel Brown', photo: 'images\Joseph_Njoroge.png.jpg' }
        ],
        mca: [
            { name: 'Steve Jobs', photo: 'images\Joseph_Njoroge.png.jpg' },
            { name: 'Tim Cook', photo: 'images\Joseph_Njoroge.png.jpg' },
            { name: 'Uma Thurman', photo: 'images\Joseph_Njoroge.png.jpg' },
            { name: 'Vince Gilligan', photo: 'images\Joseph_Njoroge.png.jpg' },
            { name: 'Wendy Davis', photo: 'images\Joseph_Njoroge.png.jpg' },
            { name: 'Xander Cage', photo: 'images\Joseph_Njoroge.png.jpg' }
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
