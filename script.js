document.addEventListener('DOMContentLoaded', function() {
    // Text change animation for Hero Section
    const texts = ['Designer', 'Programmer', 'Developer'];
    let index = 0;
    const changingTextElement = document.getElementById('changing-text');
    const interval = 100; // Time between character updates in milliseconds
    const animationDuration = 2000; // Total duration of the animation in milliseconds

    function animateText(fromText, toText) {
        const startTime = Date.now();
        const endTime = startTime + animationDuration;

        function update() {
            const currentTime = Date.now();
            const progress = Math.min((currentTime - startTime) / animationDuration, 1);
            const charsToShow = Math.floor(progress * toText.length);

            if (progress < 1) {
                changingTextElement.textContent = toText.substring(0, charsToShow);
                requestAnimationFrame(update);
            } else {
                changingTextElement.textContent = toText;
                setTimeout(() => {
                    const nextIndex = (index + 1) % texts.length;
                    animateText(toText, texts[nextIndex]);
                    index = nextIndex;
                }, 1000); // Pause for 1 second before starting the next animation
            }
        }

        update();
    }

    animateText('', texts[index]);
});
document.addEventListener('DOMContentLoaded', function() {
    // Text change animation (already updated in the previous section)

    // Number animation
    function animateNumber(elementId, start, end, duration) {
        const element = document.getElementById(elementId);
        let startTimestamp = null;

        function step(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentNumber = Math.floor(progress * (end - start) + start);
            element.textContent = currentNumber;

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    animateNumber('number1', 0, 1234, 2000);
    animateNumber('number2', 0, 5678, 2000);
    animateNumber('number3', 0, 91011, 2000);
});
