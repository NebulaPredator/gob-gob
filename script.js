// Create floating elements
function createFloatingElements() {
    const elements = ['heart', 'balloon', 'flower', 'star'];
    const colors = ['#ff6b6b', '#74b9ff', '#f9ca24', '#55efc4', '#a29bfe', '#ff7979', '#badc58'];
    const flowerIcons = ['🌸', '🌹', '🌺', '🌻', '🌼', '🌷', '💐'];
    
    // Create balloons and flowers that rise from the bottom
    setInterval(() => {
        const element = document.createElement('div');
        const type = Math.random() > 0.5 ? 'balloon' : 'flower';
        element.className = `floating ${type}`;
        
        // Random position at bottom
        const left = Math.random() * 100;
        element.style.left = `${left}vw`;
        element.style.bottom = '-50px';
        
        // Random animation duration
        const duration = 5 + Math.random() * 10;
        element.style.animationDuration = `${duration}s`;
        
        // Customize based on type
        if (type === 'balloon') {
            element.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        } else if (type === 'flower') {
            element.innerHTML = flowerIcons[Math.floor(Math.random() * flowerIcons.length)];
            element.style.fontSize = `${1 + Math.random() * 2}rem`;
        }
        
        document.body.appendChild(element);
        
        // Remove element after animation completes
        setTimeout(() => {
            element.remove();
        }, duration * 1000);
    }, 800);
    
    // Create other floating elements (hearts, stars)
    for (let i = 0; i < 20; i++) {
        const element = document.createElement('div');
        const type = Math.random() > 0.5 ? 'heart' : 'star';
        element.className = `floating ${type}`;
        
        // Random position
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        element.style.left = `${left}vw`;
        element.style.top = `${top}vh`;
        
        // Random animation duration and delay
        const duration = 3 + Math.random() * 7;
        const delay = Math.random() * 5;
        element.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        if (type === 'heart') {
            element.innerHTML = '<i class="fas fa-heart"></i>';
            element.style.color = colors[Math.floor(Math.random() * colors.length)];
        } else if (type === 'star') {
            element.innerHTML = '<i class="fas fa-star"></i>';
            element.style.color = colors[Math.floor(Math.random() * colors.length)];
        }
        
        document.body.appendChild(element);
    }
}

// Hidden message
document.getElementById('hiddenMessage').addEventListener('click', function() {
    this.classList.add('revealed');
});

// Music control
const musicControl = document.getElementById('musicControl');
const bgMusic = document.getElementById('bgMusic');

musicControl.addEventListener('click', function() {
    if (bgMusic.paused) {
        bgMusic.play();
        musicControl.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        bgMusic.pause();
        musicControl.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
});

// Countdown to next birthday
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Set birthday (June 15) - change this to the actual birthday
    let nextBirthday = new Date(currentYear, 5, 15); // Month is 0-indexed (5 = June)
    
    // If birthday has already passed this year, set to next year
    if (now > nextBirthday) {
        nextBirthday = new Date(currentYear + 1, 5, 15);
    }
    
    const diff = nextBirthday - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createFloatingElements();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Try to autoplay music (may be blocked by browser)
    document.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play().then(() => {
                musicControl.innerHTML = '<i class="fas fa-volume-up"></i>';
            }).catch(error => {
                console.log("Autoplay was prevented");
            });
        }
    }, { once: true });
});
