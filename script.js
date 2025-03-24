// Function to update the services button based on user type
function updateServicesButton(userType) {
    const servicesContainer = document.querySelector('.container');
    if (servicesContainer) {
        servicesContainer.innerHTML = `
            <h1>Our services</h1>
            <div class="buttons">
                <button id="serviceBtn">${userType === 'farmer' ? 'Search for Contracts' : 'Give Contract'}</button>
            </div>
        `;

        // Add event listener to the new button
        document.getElementById('serviceBtn').addEventListener('click', function() {
            if (userType === 'farmer') {
                window.location.href = 'farmer.html';
            } else {
                window.location.href = 'contractor.html';
            }
        });
    }
}

// Function to open the modal on page load
window.onload = function() {
    const userType = localStorage.getItem("userType");
    if (!userType) {
        const modal = document.getElementById("userTypeModal");
        if (modal) {
            modal.style.display = "flex";
        }
    } else {
        updateServicesButton(userType);
    }
};

// Function to handle user selection in the modal
function setUserType(type) {
    localStorage.setItem("userType", type);
    const modal = document.getElementById("userTypeModal");
    if (modal) {
        modal.style.display = "none";
    }
    updateServicesButton(type);
}

// Event listener for feedback form submission
document.getElementById('feedbackForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for your feedback!");
    this.reset();
});

// ... any other main page specific code ...
document.addEventListener('DOMContentLoaded', function() {
    const openChatBtn = document.getElementById('open-chat');
    const closeChatBtn = document.getElementById('close-chat');
    const chatContainer = document.querySelector('.chat-container');
    const sendMessageBtn = document.getElementById('send-message');
    const userInput = document.getElementById('user-input');
    const chatMessages = document.querySelector('.chat-messages');

    openChatBtn.addEventListener('click', function() {
        chatContainer.style.display = 'block';
        openChatBtn.style.display = 'none';
    });

    closeChatBtn.addEventListener('click', function() {
        chatContainer.style.display = 'none';
        openChatBtn.style.display = 'block';
    });

    sendMessageBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage('user', message);
            userInput.value = '';
            // Simulate AI response (replace with actual AI integration later)
            setTimeout(() => {
                addMessage('ai', "I'm Sahayak, your AI assistant. How can I help you today?");
            }, 1000);
        }
    }

    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Initial greeting
    addMessage('ai', "Hello! I'm Sahayak, your AI chatbot. How can I assist you today?");
});
document.addEventListener('DOMContentLoaded', function() {
    // ... (existing code) ...

    // Add event listeners for mic icons
    const micIcons = document.querySelectorAll('.mic-icon');
    micIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const inputField = this.previousElementSibling;
            // Here you would typically start voice recognition
            // For now, we'll just show an alert
            alert(`Voice input activated for ${inputField.placeholder}`);
        });
    });
});
