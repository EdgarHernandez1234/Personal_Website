// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    
    const pingBtn = document.getElementById('ping-btn');
    const pingMessage = document.getElementById('ping-message');

    // Array of simple tech/coding tips
    const tips = [
        "Consistency is key. Write a little bit of code every single day!",
        "Don't just copy-paste. Take time to understand how the code works.",
        "The best way to learn a new tech stack is to build a messy project with it.",
        "Console.log() is your friend, but don't forget to clean them up before pushing!",
        "Mastering vanilla JavaScript makes learning frameworks like React or Vue way easier."
    ];

    // Add click event listener to the button
    pingBtn.addEventListener('click', () => {
        // Pick a random tip from the array
        const randomIndex = Math.floor(Math.random() * tips.length);
        
        // Update the message text and make it visible
        pingMessage.textContent = tips[randomIndex];
        pingMessage.classList.remove('hidden');
    });
});