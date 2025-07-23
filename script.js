document.addEventListener('DOMContentLoaded', () => {
    // Countdown timer
    function updateCountdown() {
        const now = new Date();
        const nextBirthday = new Date(now.getFullYear(), 7, 2); // August 2
        if (now > nextBirthday) {
            nextBirthday.setFullYear(now.getFullYear() + 1);
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

    // Message toggle
    const messageToggle = document.getElementById('messageToggle');
    const hiddenMessage = document.getElementById('hiddenMessage');
    messageToggle.addEventListener('click', () => {
        hiddenMessage.classList.toggle('hidden');
        messageToggle.textContent = hiddenMessage.classList.contains('hidden') 
            ? 'Show Special Message' 
            : 'Hide Special Message';
    });

    // Music control
    const musicControl = document.getElementById('musicControl');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;
    
    musicControl.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicControl.innerHTML = '<i class="fas fa-music"></i>';
        } else {
            bgMusic.play();
            musicControl.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    });

    // Update countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown();
});
