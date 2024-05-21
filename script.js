function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGenerating() {
    const selectBox = document.getElementById('range');
    const result = document.getElementById('result');
    let min, max;

    if (selectBox.value === 'main') {
        min = 1;
        max = 75;
    } else if (selectBox.value === 'extended') {
        min = 76;
        max = 150;
    } else if (selectBox.value === 'custom') {
        min = parseInt(document.getElementById('min').value);
        max = parseInt(document.getElementById('max').value);
    }

    let intervalId;
    const startTime = Date.now();
    const duration = 1500;

    function updateNumber() {
        const randomNumber = getRandomNumber(min, max);
        result.textContent = `순위: ${randomNumber}`;

        if (Date.now() - startTime >= duration) {
            clearInterval(intervalId);
        }
    }

    intervalId = setInterval(updateNumber, 100);
}

function toggleCustomRange() {
    const selectBox = document.getElementById('range');
    const customRangeDiv = document.getElementById('customRange');

    if (selectBox.value === 'custom') {
        customRangeDiv.style.display = 'block';
    } else {
        customRangeDiv.style.display = 'none';
    }
}
