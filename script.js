// script.js

document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const data = {
        name: name,
        email: email,
        message: message
    };

    try {
        const response = await fetch('https://78uobwxd2g.execute-api.ap-south-1.amazonaws.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();
        } else {
            alert('Failed to send message.');
            console.error(await response.text());
        }
    } catch (error) {
        alert('Error: ' + error.message);
        console.error(error);
    }
});
