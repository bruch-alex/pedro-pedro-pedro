let image = document.querySelector("img")

let body = document.querySelector("body")
let counter = 0
function handleMouseMoveEvent(event){
    counter += event.deltaY/10
    console.log(counter)

    image.style.rotate = counter + "deg"
    let hue = counter
    let sat = counter
    body.style.background = "hsl(" + hue + ", " + sat + "%, 30%)"
}
// document.addEventListener("mousemove", handleMouseMoveEvent)
document.addEventListener("wheel", handleMouseMoveEvent)