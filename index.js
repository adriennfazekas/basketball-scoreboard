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
