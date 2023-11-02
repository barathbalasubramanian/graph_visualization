let y = [];
let timeLabels = [];

document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('myChart').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: timeLabels,
            datasets: [{
                label: 'Temperature VS Time',
                data: y,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Y axis'
                    }
                }
            }
        }
    });

    function getCurrentTimeString() {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    setInterval(() => {
        const randomY = getRandomInt(20, 50);
        const currentTime = getCurrentTimeString();

        
        if (timeLabels.length > 11) {
            y.splice(0, 1);
            timeLabels.splice(0, 1);
        }
        
        y.push(randomY);
        timeLabels.push(currentTime);

        myChart.update();
    }, 1000);
});
