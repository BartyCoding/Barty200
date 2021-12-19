const button = document.getElementById("submit-button")
const input = document.getElementById("input-box")
const container = document.getElementById("container")

const secretCode = "Hello!"
try{
  button.addEventListener("click", () => {
    if (input.value === "hi there") {
        console.log("guessed value")
        button.classList.add("hidden")
        input.classList.add("hidden")
        const text = document.createElement("h1")
        text.innerText = secretCode
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

