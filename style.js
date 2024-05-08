document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    var greeting = document.getElementById('greeting');
    var intro = document.getElementById('intro');
    var message = "I'm Viraj. Welcome to my social media website. Please Follow me on Different Social media Platforms to get updated with more better content.";
    var words = message.split(' ');
    var index = 0;
    var timer = setInterval(function() {
        if (index < words.length) {
            intro.textContent += words[index] + ' ';
            index++;
        } else {
            clearInterval(timer);
        }
    }, 300); // Add each word every 1 second

    // Play audio when the user interacts with the page
    var backgroundAudio = document.getElementById('backgroundAudio');
    document.addEventListener('click', function() {
        backgroundAudio.play();
    });
    
    // Close the popup after 7 seconds
    setTimeout(function() {
        popup.classList.add('hidden');
        document.getElementById('page').classList.remove('popup-visible');
        document.getElementById('page').style.filter = 'blur(0)'; // Remove blur
    }, 9000); // Close after 7 seconds
});