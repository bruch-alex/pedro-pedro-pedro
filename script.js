let image = document.querySelector("img")
let body = document.querySelector("body")
let counter = 0


if (navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)) {
    alert("mobile")
    document.addEventListener("touchstart", handleTouchStartEvent)
    document.addEventListener("touchmove", handleTouchMoveEvent)
}
else {
    document.addEventListener("wheel", handleWheelMoveEvent)
    alert("desktop")
}

function handleWheelMoveEvent(event) {
    counter += event.deltaY * 0.1
    console.log(counter)

    image.style.rotate = counter + "deg"
    let hue = counter
    body.style.background = "hsl(" + hue + ", 70%, 30%)"
}

let startX = 0;
let startY = 0;

function handleTouchStartEvent(event) {
    // Capture the starting position
    const touch = event.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    console.log('Touch start:', startX, startY);
}

function handleTouchMoveEvent(event) {
    // Get the current touch position
    const touch = event.touches[0];
    const currentX = touch.clientX;
    const currentY = touch.clientY;

    // Calculate the distance moved
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    let hue = distance
    body.style.background = "hsl(" + hue + ", 70%, 30%)"
    image.style.rotate = counter + "deg"
    // Update the starting position for the next move
    startX = currentX;
    startY = currentY;
}