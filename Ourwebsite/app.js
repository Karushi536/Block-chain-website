document.getElementById('submit-button').addEventListener('click', function() {
    const voterId = document.getElementById('voter-id').value;
    if (voterId) {
        document.getElementById('positions').style.display
