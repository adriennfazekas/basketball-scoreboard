let homeCount = 0
let guestCount = 0
let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")


function addToHome(mennyit) {
    homeCount += mennyit
    homeEl.innerText = homeCount
}

function addToGuest(mennyit) {
    guestCount += mennyit
    guestEl.innerText = guestCount
}

function newGame() {
    homeEl.innerText = 0
    guestEl.innerText = 0
    homeCount = 0
    guestCount = 0
}
