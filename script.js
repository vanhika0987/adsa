const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Define the route (for demonstration purposes)
const route = [
    { x: 100, y: 100 }, // Warehouse
    { x: 200, y: 200 }, // Point A
    { x: 300, y: 150 }, // Point B
    // Add more points as needed
];

// Function to draw the cartoon car at a given position
function drawCar(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, 50, 30); // Car body
    ctx.fillRect(x + 10, y - 20, 30, 20); // Car roof
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(x + 10, y + 30, 10, 0, Math.PI, true); // Left wheel
    ctx.arc(x + 40, y + 30, 10, 0, Math.PI, true); // Right wheel
    ctx.fill();
}

// Function to animate the car along the route
function animate() {
    let index = 0;
    const interval = setInterval(() => {
        const point = route[index];
        drawCar(point.x, point.y);
        index++;
        if (index >= route.length) {
            clearInterval(interval);
        }
    }, 1000); // Adjust the interval for smoother animation
}

// Start the animation
animate();
