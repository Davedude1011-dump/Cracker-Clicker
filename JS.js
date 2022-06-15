var crackers = 0
var crackersPerClick = 1

var isCheese = false

var isUpgrade = false
var isInfo = false

var upgradeOneAdd = 1

var upgradeOnePrice = 30

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

// screen open and close onclick{}

function upgradeToggle() {
    if (isUpgrade === false) {
        document.getElementById("upgradesBoxOuter").style.display = "block"
        isUpgrade = true
    }
    else {
        document.getElementById("upgradesBoxOuter").style.display = "none"
        isUpgrade = false
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