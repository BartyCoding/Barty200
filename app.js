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