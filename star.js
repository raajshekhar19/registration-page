document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    const content = document.querySelector('.content');
    const numberOfStars = 200;

    const contentRect = content.getBoundingClientRect();

    function isInsideContentArea(x, y) {
        return x >= contentRect.left && x <= contentRect.right && y >= contentRect.top && y <= contentRect.bottom;
    }
    for (let i = 0; i < numberOfStars; i++) {
        let x, y;
        do {
            x = Math.random() * window.innerWidth;
            y = Math.random() * window.innerHeight;
        } while (isInsideContentArea(x, y));
//crea..
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        container.appendChild(star);
    }

    //reveal stars
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        setTimeout(() => {
            star.style.opacity = 1;
        }, index * 100);
    });
});
