document.getElementById('submit-button').addEventListener('click', function() {
    const voterId = document.getElementById('voter-id').value;
    if (voterId) {
        document.getElementById('positions').style.display = 'block';
    } else {
        alert('Please enter a valid voting ID.');
    }
});

const positions = ['presidency', 'governorship', 'senate', 'mp', 'mca'];
positions.forEach(position => {
    document.getElementById(position).addEventListener('click', function() {
        showCandidates(position);
    });
});

function showCandidates(position) {
    let candidatesHTML = '';
    switch(position) {
        case 'presidency':
            candidatesHTML = '<p>Presidential Candidates: Candidate A, Candidate B</p>';
            break;
        case 'governorship':
            candidatesHTML = '<p>Gubernatorial Candidates: Candidate C, Candidate D</p>';
            break;
        case 'senate':
            candidatesHTML = '<p>Senate Candidates: Candidate E, Candidate F</p>';
            break;
        case 'mp':
            candidatesHTML = '<p>MP Candidates: Candidate G, Candidate H</p>';
            break;
        case 'mca':
            candidatesHTML = '<p>MCA Candidates: Candidate I, Candidate J</p>';
            break;
    }
    document.getElementById('candidates-list').innerHTML = candidatesHTML;
    document.getElementById('vote-form').style.display = 'block';
}

document.getElementById('vote-button').addEventListener('click', function() {
    // Add code here to handle the voting process
    alert('Vote submitted!');
});
