const button = document.getElementById("submit-button")
const input = document.getElementById("input-box")
const container = document.getElementById("container")

const secretCode = "You guessed the code!"
try {
    button.addEventListener("click", () => {
        if (input.value === "25705") {
            console.log("guessed value")
            button.classList.add("hidden")
            input.classList.add("hidden")
            const text = document.createElement("div")
            text.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/O91DT1pR1ew?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            container.appendChild(text)
        }
        else if (input.value === "test") {
            button.classList.add("hidden")
            input.classList.add("hidden")
            const text = document.createElement("h1")
            text.innerText = "Working!"
            container.appendChild(text)
        }
    })
} catch
{

}


const icon = document.getElementById("hamburger-icon");
const navMain = document.getElementById("nav-main");

let down = false

console.dir(icon)

icon.onclick = () => {
    if (down) {
        down = false
        navMain.classList.remove("expanded")
    }
    else {
        down = true
        navMain.classList.add("expanded")
    }
}

