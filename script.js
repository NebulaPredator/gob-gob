body {
    background: linear-gradient(to bottom right, #FFD700, #F4A460, #8B4513);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 800px;
    margin: 20px;
    padding: 24px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.5s ease;
}

.container:hover {
    transform: translateY(-5px);
}

h1 {
    font-size: 2.5rem;
    color: #FFD700;
    margin-bottom: 16px;
    animation: bounce 1.5s infinite;
}

h2 {
    font-size: 1.5rem;
    color: #8B4513;
    margin-bottom: 24px;
}

.birthdate {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 1.125rem;
    color: #4b5563;
    margin-bottom: 32px;
}

.birthdate i {
    color: #FFD700;
}

button#messageToggle {
    padding: 8px 24px;
    background: #8B4513;
    color: white;
    border: none;
    border-radius: 9999px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;
    margin-bottom: 24px;
}

button#messageToggle:hover {
    background: #A0522D;
}

.hidden-message {
    padding: 16px;
    background: #FFFACD;
    border-radius: 8px;
    color: #1f2937;
    margin-bottom: 32px;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: opacity 0.5s ease, max-height 0.5s ease;
}

.hidden-message:not(.hidden) {
    opacity: 1;
    max-height: 200px;
}

.hidden-message p {
    font-size: 1.125rem;
    margin: 0;
}

.countdown {
    background: #F5F5DC;
    padding: 24px;
    border-radius: 8px;
}

.countdown-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #8B4513;
    margin-bottom: 16px;
}

.countdown-timer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
}

.countdown-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.countdown-number {
    font-size: 2rem;
    font-weight: bold;
    color: #FFD700;
}

.countdown-item div:last-child {
    color: #4b5563;
}

.music-control {
    position: fixed;
    bottom: 16px;
    right: 16px;
    padding: 12px;
    background: #8B4513;
    color: white;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
}

.music-control:hover {
    background: #A0522D;
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

@media (max-width: 640px) {
    .container {
        padding: 16px;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.25rem;
    }

    .countdown-timer {
        grid-template-columns: repeat(2, 1fr);
    }
}
