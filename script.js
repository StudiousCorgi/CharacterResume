
document.addEventListener('DOMContentLoaded', function() {
    // Wax seal click handler
    const waxSeal = document.getElementById('wax-seal');
    const scrollOverlay = document.getElementById('scroll-overlay');
    const backgroundMusic = document.getElementById('background-music');  // Get the audio element
    
    waxSeal.addEventListener('click', function() {
        // Start the background music
        backgroundMusic.play();  // Start playing the music when the wax seal is clicked
        
        // Unfurling animation class
        scrollOverlay.classList.add('scroll-unfurling');
        
        // Add class to body to reveal content
        document.body.classList.add('scroll-opened');
        
        // Remove the overlay after animation completes
        setTimeout(() => {
            scrollOverlay.style.display = 'none';
        }, 2000);
        
        // Animate skill bars
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    });
});
