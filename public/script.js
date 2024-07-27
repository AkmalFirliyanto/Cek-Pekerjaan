document.getElementById('pekerjaanForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;

    try {
        let response = await fetch('/api/get-pekerjaan', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        let result = await response.json();
        document.getElementById("pekerjaanResult").innerText = result.pekerjaan;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
});
