var crackers = 100000000000000
var crackersPerClick = 1

var isCheese = false

var isUpgrade = false
var isInfo = false
var isSkins = false

var upgradeOneAdd = 1

var upgradeOnePrice = 30

var isMeltedCheese = false
var isMeltedCheeseOn = false
var isJam = false
var isJamOn = false
var isBacon = false
var isBaconOn = false
var isGoldenCracker = false
var isGoldenCrackerOn = false

// Refresh Screen Variables

function refresh() {
    document.getElementById("crackerCounter").innerHTML = crackers
    upgradeOnePriceCheck()
}

// cracker click 

function crackerClick() {
    crackers += crackersPerClick
    refresh()
}

// upgrade price check

function upgradeOnePriceCheck() {
    //upgrade 1
    if (crackers >= upgradeOnePrice) {
        document.getElementById("upgradeButtonPriceOne").style.color = "green"
        isCheese = true
    }
    else {
        document.getElementById("upgradeButtonPriceOne").style.color = "red"
    }
    if (isCheese === true) {
        document.getElementById("upgradeButtonOneImg").src = "images/cheese.png"
        document.getElementById("UpgradeButtonOneName").innerHTML = "Cheese"
    }
    // ---


}

// upgrade buttons onclick{}

function  upgradeButtonOneOnclick() {
    if (crackers >= upgradeOnePrice) {
        crackers -= upgradeOnePrice
        crackersPerClick += upgradeOneAdd
    }
    refresh()
}

// skins buying

function skinsButtonOneOnclick() {
    if (isMeltedCheese === false) {
       if (crackers >= 100000000) {
        crackers -= 100000000
        document.getElementById("skinsOne").style.color = "green"
        isMeltedCheese = true

        isMeltedCheeseOn = true
        document.getElementById("meltedCheese").style.display = "block"

        refresh()
    } 
    }
    else {
        if (isMeltedCheeseOn === false) {
            isMeltedCheeseOn = true
            document.getElementById("meltedCheese").style.display = "block"
            refresh()
        }
        else {
            isMeltedCheeseOn = false
            document.getElementById("meltedCheese").style.display = "none"
            refresh()
        }
    }
    
}

// screen open and close onclick{}

function upgradeToggle() {
    if (isSkins === true) {
        document.getElementById("skinsBoxOuter").style.display = "none"
        isSkins = false
        if (isUpgrade === false) {
            document.getElementById("upgradesBoxOuter").style.display = "block"
            isUpgrade = true
        }
        else {
            document.getElementById("upgradesBoxOuter").style.display = "none"
            isUpgrade = false
        }
    }
    else {
    if (isUpgrade === false) {
        document.getElementById("upgradesBoxOuter").style.display = "block"
        isUpgrade = true
    }
    else {
        document.getElementById("upgradesBoxOuter").style.display = "none"
        isUpgrade = false
    }
    }
}
function skinsToggle() {
if (isUpgrade === true) {
    document.getElementById("upgradesBoxOuter").style.display = "none"
    isUpgrade = false
    if (isSkins === false) {
        document.getElementById("skinsBoxOuter").style.display = "block"
        isSkins = true
    }
    else {
        document.getElementById("skinsBoxOuter").style.display = "none"
        isSkins = false
    }
}
else {
    if (isSkins === false) {
        document.getElementById("skinsBoxOuter").style.display = "block"
        isSkins = true
    }
    else {
        document.getElementById("skinsBoxOuter").style.display = "none"
        isSkins = false
    }
}
}
function infoToggle() {
    if (isInfo === false) {
        document.getElementById("infoBoxOuter").style.display = "block"
        isInfo = true
    }
    else {
        document.getElementById("infoBoxOuter").style.display = "none"
        isInfo = false
    }
}
