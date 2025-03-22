document.addEventListener('DOMContentLoaded', function() {
        // Get elements
        const forgiveButton = document.getElementById('forgiveButton');
        const flowers = document.querySelector('.flowers');
        const message = document.querySelector('.message');
        const backgroundMusic = document.getElementById('backgroundMusic');
        
        // Initially hide flowers and pause animations
        flowers.classList.add('hidden');
        
        // Add click event to the forgive button
        forgiveButton.addEventListener('click', function() {
            // Show flowers
            flowers.classList.remove('hidden');
            
            // Start animations by removing container class
            document.body.classList.remove('container');
            
            // Hide the message
            message.style.display = 'none';
            
            // Play background music
            backgroundMusic.play().catch(error => {
                console.log('Audio playback failed:', error);
            });
        });
    });