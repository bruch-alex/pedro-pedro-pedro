let image = document.querySelector("img")
let body = document.querySelector("body")
let counter = 0

if (navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)) {
    document.addEventListener("touchmove", handleMoveEvent)
}
else {
    document.addEventListener("wheel", handleMoveEvent)
}

function handleMoveEvent(event) {
    counter += event.deltaY * 0.1
    console.log(counter)

    image.style.rotate = counter + "deg"
    let hue = counter
    body.style.background = "hsl(" + hue + ", 70%, 30%)"
}