const formHeading = document.getElementById('heading');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const numberInput = document.getElementById('phone');
    const form = document.getElementById('registration-form');


    nameInput.addEventListener('focus', function() {
        formHeading.textContent = 'Enter your name, buddy!';
    });

    nameInput.addEventListener('blur', function() {
        formHeading.textContent = 'Register for IEEE 21 Days of Code';
    });

    emailInput.addEventListener('focus', function() {
        const nameValue = nameInput.value.trim();
        const firstName = nameValue.split(' ')[0];
        if (firstName) {
            formHeading.textContent = `Enter your email, ${firstName}!`;
        } else {
            formHeading.textContent = 'Enter your email!';
        }
    });

    emailInput.addEventListener('blur', function() {
        formHeading.textContent = 'Register for IEEE 21 Days of Code';
    });

    
    numberInput.addEventListener('focus', function() {
        const nameValue = nameInput.value.trim();
        const firstName = nameValue.split(' ')[0];
        if (firstName) {
            formHeading.textContent = `Enter your phone number, ${firstName}!`;
        } else {
            formHeading.textContent = 'Enter your phone number!';
        }
    });

    numberInput.addEventListener('blur', function() {
        formHeading.textContent = 'Register for IEEE 21 Days of Code';
    });



    
const starsContainer = document.createElement('div');
starsContainer.classList.add('stars');
document.body.appendChild(starsContainer);

const numStars = 100;

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.setProperty('--i', i);
    starsContainer.appendChild(star);
}
