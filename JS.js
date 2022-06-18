var crackers = 1990
var totalCrackers = 0
var crackersPerClick = 1
var totalCrackerClicks = 0

var isCheese = false
var isJamUpg = false
var isBaconUpg = false
var isMicrowave = false

var isUpgrade = false
var isInfo = false
var isSkins = false
var isStats = false

var ownedBuildings = 0

var upgradeOneAdd = 1
var upgradeTwoAdd = 5
var upgradeThreeAdd = 15
var upgradeFourAdd = 40
var upgradeFiveAdd = 200
var upgradeSixAdd = 500
var upgradeSevenAdd = 1000
var upgradeEightAdd = 20000
var upgradeNineAdd = 100000
var upgradeTenAdd = 50000000

var upgradeOnePrice = 30
var upgradeTwoPrice = 500
var upgradeThreePrice = 5000
var upgradeFourPrice = 20000
var upgradeFivePrice = 200000
var upgradeSixPrice = 5000000
var upgradeSevenPrice = 30000000
var upgradeEightPrice = 500000000
var upgradeNinePrice = 20000000000
var upgradeTenPrice = 10000000000000

var isMeltedCheese = false
var isMeltedCheeseOn = false
var isJam = false
var isJamOn = false
var isBacon = false
var isBaconOn = false
var isGoldenCracker = false
var isGoldenCrackerOn = false

var zoom = "normal"

var references = true

var ADMIN = false

// school zoom :P
function schoolZoomToggle() {
    if (zoom === "normal") {
        document.body.style.zoom = "67%"
        document.getElementById("zoomText").innerHTML = "normal"
        zoom = "small"
    }
    else {
        document.body.style.zoom = "100%"
        document.getElementById("zoomText").innerHTML = "Small Moniter"
        zoom = "normal"
    }
    refresh()
}

// references (i had to search up how to spell that :P )
function referencesToggle() {
    if (references === true) {
        references = false
        document.getElementById("referencesText").innerHTML = "References Off"
        document.getElementById("referencesText").style.color = "red"
    }
    else {
        references = true
        document.getElementById("referencesText").innerHTML = "References On"
        document.getElementById("referencesText").style.color = "green"
    }
    refresh()
}

// Refresh Screen Variables

function statsRefresh() {
    //portrait VAR's
    document.getElementById("crackersInBankPortrait").innerHTML = crackers
    document.getElementById("crackersAllTimePortrait").innerHTML = totalCrackers
    document.getElementById("spentCrackersPortrait").innerHTML = totalCrackers - crackers
    document.getElementById("upgradesOwnedPortrait").innerHTML = ownedBuildings
    document.getElementById("crackersPerClickPortrait").innerHTML = crackersPerClick
    document.getElementById("totalClicksPortrait").innerHTML = totalCrackerClicks
    document.getElementById("zoomPortrait").innerHTML = document.body.style.zoom

    // landscape VAR's
    document.getElementById("crackersInBankLandscape").innerHTML = crackers
    document.getElementById("crackersAllTimeLandscape").innerHTML = totalCrackers
    document.getElementById("spentCrackersLandscape").innerHTML = totalCrackers - crackers
    document.getElementById("upgradesOwnedLandscape").innerHTML = ownedBuildings
    document.getElementById("crackersPerClickLandscape").innerHTML = crackersPerClick
    document.getElementById("totalClicksLandscape").innerHTML = totalCrackerClicks
    document.getElementById("zoomLandscape").innerHTML = document.body.style.zoom
}

function refresh() {
    document.getElementById("crackerCounter").innerHTML = crackers
    document.getElementById("crackerCounterText").innerHTML = " Crackers"

    upgradeOnePriceCheck()
    upgradeTwoPriceCheck()
    upgradeThreePriceCheck()
    upgradeFourPriceCheck()
    upgradeFivePriceCheck()
    upgradeSixPriceCheck()
    upgradeSevenPriceCheck()
    upgradeEightPriceCheck()
    upgradeNinePriceCheck()
    upgradeTenPriceCheck()

    statsRefresh()

    if (references === true) {
        if (crackers > 1000 & crackers < 1050) {
            document.getElementById("crackerCounter").innerHTML = "Thanks Sam, " + crackers
            document.getElementById("crackerCounterText").innerHTML = ""
        }
        if (crackers > 1500 & crackers < 1550) {
            document.getElementById("crackerCounter").innerHTML = "00111010 00101001"
            document.getElementById("crackerCounterText").innerHTML = ""
        }
        if (crackers === 69) {
            document.getElementById("crackerCounter").innerHTML = ":P"
            document.getElementById("crackerCounterText").innerHTML = ""
        }
        if (crackers > 1999 & crackers < 2021) {
            document.getElementById("crackerCounter").innerHTML = "CHICKY TENDER FOREVER"
            document.getElementById("crackerCounterText").innerHTML = ""
        }
    }
    
}

// cracker click 

function crackerClick() {
    crackers += crackersPerClick
    totalCrackers += crackersPerClick
    totalCrackerClicks += 1
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
    document.getElementById("upgradeButtonOnePrice").innerHTML = upgradeOnePrice
    // ---
}
function upgradeTwoPriceCheck() {
    //upgrade 2
    if (crackers >= upgradeTwoPrice) {
        document.getElementById("upgradeButtonPriceTwo").style.color = "green"
        isJamUpg = true
    }
    else {
        document.getElementById("upgradeButtonPriceTwo").style.color = "red"
    }
    if (isJamUpg === true) {
        document.getElementById("upgradeButtonTwoImg").src = "images/jam.png"
        document.getElementById("UpgradeButtonTwoName").innerHTML = "Jam"
        
    }
    document.getElementById("upgradeButtonTwoPrice").innerHTML = upgradeTwoPrice
    // ---


}
function upgradeThreePriceCheck() {
    //upgrade 3
    if (crackers >= upgradeThreePrice) {
        document.getElementById("upgradeButtonPriceThree").style.color = "green"
        isBaconUpg = true
        
    }
    else {
        document.getElementById("upgradeButtonPriceThree").style.color = "red"
    }
    if (isBaconUpg === true) {
        document.getElementById("upgradeButtonThreeImg").src = "images/bacon.png"
        document.getElementById("UpgradeButtonThreeName").innerHTML = "bacon"
        
    }
    document.getElementById("upgradeButtonThreePrice").innerHTML = upgradeThreePrice
    // ---


}
function upgradeFourPriceCheck() {
    //upgrade 4
    if (crackers >= upgradeFourPrice) {
        document.getElementById("upgradeButtonPriceFour").style.color = "green"
        isMicrowave = true
        
    }
    else {
        document.getElementById("upgradeButtonPriceFour").style.color = "red"
    }
    if (isMicrowave === true) {
        document.getElementById("upgradeButtonFourImg").src = "images/microwave.png"
        document.getElementById("UpgradeButtonFourName").innerHTML = "Warm Up"
        
    }
    document.getElementById("upgradeButtonFourPrice").innerHTML = upgradeFourPrice
    // ---


}
function upgradeFivePriceCheck() {
    //upgrade 5
    if (crackers >= upgradeFivePrice) {
        document.getElementById("upgradeButtonPriceFive").style.color = "green"
        isCheese = true
        
    }
    else {
        document.getElementById("upgradeButtonPriceFive").style.color = "red"
    }
    if (isCheese === true) {
        document.getElementById("upgradeButtonFiveImg").src = "images/cheese.png"
        document.getElementById("UpgradeButtonFiveName").innerHTML = "Cheese"
        
    }
    document.getElementById("upgradeButtonFivePrice").innerHTML = upgradeFivePrice
    // ---


}
function upgradeSixPriceCheck() {
    //upgrade 6
    if (crackers >= upgradeSixPrice) {
        document.getElementById("upgradeButtonPriceSix").style.color = "green"
        isCheese = true
        
    }
    else {
        document.getElementById("upgradeButtonPriceSix").style.color = "red"
    }
    if (isCheese === true) {
        document.getElementById("upgradeButtonSixImg").src = "images/cheese.png"
        document.getElementById("UpgradeButtonSixName").innerHTML = "Cheese"
        
    }
    document.getElementById("upgradeButtonSixPrice").innerHTML = upgradeSixPrice
    // ---


}
function upgradeSevenPriceCheck() {
    //upgrade 7
    if (crackers >= upgradeSevenPrice) {
        document.getElementById("upgradeButtonPriceSeven").style.color = "green"
        isCheese = true
        
    }
    else {
        document.getElementById("upgradeButtonPriceSeven").style.color = "red"
    }
    if (isCheese === true) {
        document.getElementById("upgradeButtonSevenImg").src = "images/cheese.png"
        document.getElementById("UpgradeButtonSevenName").innerHTML = "Cheese"
        
    }
    document.getElementById("upgradeButtonSevenPrice").innerHTML = upgradeSevenPrice
    // ---


}
function upgradeEightPriceCheck() {
    //upgrade 8
    if (crackers >= upgradeEightPrice) {
        document.getElementById("upgradeButtonPriceEight").style.color = "green"
        isCheese = true
        
    }
    else {
        document.getElementById("upgradeButtonPriceEight").style.color = "red"
    }
    if (isCheese === true) {
        document.getElementById("upgradeButtonEightImg").src = "images/cheese.png"
        document.getElementById("UpgradeButtonEightName").innerHTML = "Cheese"
        
    }
    document.getElementById("upgradeButtonEightPrice").innerHTML = upgradeEightPrice
    // ---


}
function upgradeNinePriceCheck() {
    //upgrade 9
    if (crackers >= upgradeNinePrice) {
        document.getElementById("upgradeButtonPriceNine").style.color = "green"
        isCheese = true
        
    }
    else {
        document.getElementById("upgradeButtonPriceNine").style.color = "red"
    }
    if (isCheese === true) {
        document.getElementById("upgradeButtonNineImg").src = "images/cheese.png"
        document.getElementById("UpgradeButtonNineName").innerHTML = "Cheese"
        
    }
    document.getElementById("upgradeButtonNinePrice").innerHTML = upgradeNinePrice
    // ---


}
function upgradeTenPriceCheck() {
    //upgrade 10
    if (crackers >= upgradeTenPrice) {
        document.getElementById("upgradeButtonPriceTen").style.color = "green"
        isCheese = true
        
    }
    else {
        document.getElementById("upgradeButtonPriceTen").style.color = "red"
    }
    if (isCheese === true) {
        document.getElementById("upgradeButtonTenImg").src = "images/cheese.png"
        document.getElementById("UpgradeButtonTenName").innerHTML = "Cheese"
        
    }
    document.getElementById("upgradeButtonTenPrice").innerHTML = upgradeTenPrice
    // ---


}

// upgrade buttons onclick{}

function  upgradeButtonOneOnclick() {
    if (crackers >= upgradeOnePrice) {
        crackers -= upgradeOnePrice
        crackersPerClick += upgradeOneAdd
        upgradeOnePrice += parseInt(upgradeOnePrice * 0.2)
        ownedBuildings += 1
    }
    refresh()
}
function  upgradeButtonTwoOnclick() {
    if (crackers >= upgradeTwoPrice) {
        crackers -= upgradeTwoPrice
        crackersPerClick += upgradeTwoAdd
        upgradeTwoPrice += parseInt(upgradeTwoPrice * 0.2)
        ownedBuildings += 1
    }
    refresh()
}
function  upgradeButtonThreeOnclick() {
    if (crackers >= upgradeThreePrice) {
        crackers -= upgradeThreePrice
        crackersPerClick += upgradeThreeAdd
        upgradeThreePrice += parseInt(upgradeThreePrice * 0.2)
        ownedBuildings += 1
    }
    refresh()
}
function  upgradeButtonFourOnclick() {
    if (crackers >= upgradeFourPrice) {
        crackers -= upgradeFourPrice
        crackersPerClick += upgradeFourAdd
        upgradeFourPrice += parseInt(upgradeFourPrice * 0.3)
        ownedBuildings += 1
    }
    refresh()
}
function  upgradeButtonFiveOnclick() {
    if (crackers >= upgradeFivePrice) {
        crackers -= upgradeFivePrice
        crackersPerClick += upgradeFiveAdd
        upgradeFivePrice += parseInt(upgradeFivePrice * 0.3)
        ownedBuildings += 1
    }
    refresh()
}
function  upgradeButtonSixOnclick() {
    if (crackers >= upgradeSixPrice) {
        crackers -= upgradeSixPrice
        crackersPerClick += upgradeSixAdd
        upgradeSixPrice += parseInt(upgradeSixPrice * 0.3)
        ownedBuildings += 1
    }
    refresh()
}
function  upgradeButtonSevenOnclick() {
    if (crackers >= upgradeSevenPrice) {
        crackers -= upgradeSevenPrice
        crackersPerClick += upgradeSevenAdd
        upgradeSevenPrice += parseInt(upgradeSevenPrice * 0.4)
        ownedBuildings += 1
    }
    refresh()
}
function  upgradeButtonEightOnclick() {
    if (crackers >= upgradeEightPrice) {
        crackers -= upgradeEightPrice
        crackersPerClick += upgradeEightAdd
        upgradeEightPrice += parseInt(upgradeEightPrice * 0.4)
        ownedBuildings += 1
    }
    refresh()
}
function  upgradeButtonNineOnclick() {
    if (crackers >= upgradeNinePrice) {
        crackers -= upgradeNinePrice
        crackersPerClick += upgradeNineAdd
        upgradeNinePrice += parseInt(upgradeNinePrice * 0.4)
        ownedBuildings += 1
    }
    refresh()
}
function  upgradeButtonTenOnclick() {
    if (crackers >= upgradeTenPrice) {
        crackers -= upgradeTenPrice
        crackersPerClick += upgradeTenAdd
        upgradeTenPrice += parseInt(upgradeTenPrice * 0.5)
        ownedBuildings += 1
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

        document.getElementById("jam").style.display = "none"
        isJamOn = false
        document.getElementById("bacon").style.display = "none"
        isBaconOn = false
        document.getElementById("goldenCracker").style.display = "none"
        isGoldenCrackerOn = false

        isMeltedCheeseOn = true
        document.getElementById("meltedCheese").style.display = "block"

        refresh()
    } 
    }
    else {
        if (isMeltedCheeseOn === false) {
            isMeltedCheeseOn = true
            document.getElementById("meltedCheese").style.display = "block"
            isMeltedCheeseOn = true

            document.getElementById("jam").style.display = "none"
            isJamOn = false
            document.getElementById("bacon").style.display = "none"
            isBaconOn = false
            document.getElementById("goldenCracker").style.display = "none"
            isGoldenCrackerOn = false

            refresh()
        }
        else {
            isMeltedCheeseOn = false
            document.getElementById("meltedCheese").style.display = "none"

            

            refresh()
        }
    }
    
}

function skinsButtonTwoOnclick() {
    if (isJam === false) {
       if (crackers >= 5000000000000) {
        crackers -= 5000000000000
        document.getElementById("skinsTwo").style.color = "green"
        isJam = true

        document.getElementById("meltedCheese").style.display = "none"
        isMeltedCheeseOn = false
        document.getElementById("bacon").style.display = "none"
        isBaconOn = false
        document.getElementById("goldenCracker").style.display = "none"
        isGoldenCrackerOn = false
        
        isJamOn = true
        document.getElementById("jam").style.display = "block"

        refresh()
    } 
    }
    else {
        if (isJamOn === false) {
            isJamOn = true
            document.getElementById("jam").style.display = "block"

            document.getElementById("meltedCheese").style.display = "none"
            isMeltedCheeseOn = false
            document.getElementById("bacon").style.display = "none"
            isBaconOn = false
            document.getElementById("goldenCracker").style.display = "none"
            isGoldenCrackerOn = false

            refresh()
        }
        else {
            isJamOn = false
            document.getElementById("jam").style.display = "none"
            refresh()
        }
    }
    
}

function skinsButtonFiveOnclick() {
       if (ADMIN === true) {
        document.getElementById("skinsFive").style.color = "green"
        document.getElementById("skinsButtonFivePrice").innerHTML = "✔️"

        document.getElementById("meltedCheese").style.display = "none"
        isMeltedCheeseOn = false
        document.getElementById("bacon").style.display = "none"
        isBaconOn = false
        document.getElementById("goldenCracker").style.display = "none"
        isGoldenCrackerOn = false
        document.getElementById("jam").style.display = "none"
        isGoldenCrackerOn = false

        document.getElementById("cracker").src = "images/Puuuur fect cracker.png"

        refresh()
    }
    else {
        document.getElementById("skinsFive").style.color = "red"
        document.getElementById("skinsButtonFivePrice").innerHTML = "❌"
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
    if (isStats === true) {
        document.getElementById("statsBoxOuter").style.display = "none"
        isStats = false
        if (isInfo === false) {
            document.getElementById("infoBoxOuter").style.display = "block"
            isInfo = true
        }
        else {
            document.getElementById("infoBoxOuter").style.display = "none"
            isInfo = false
        }
    }
    else {
        if (isInfo === false) {
            document.getElementById("infoBoxOuter").style.display = "block"
            isInfo = true
        }
        else {
            document.getElementById("infoBoxOuter").style.display = "none"
            isInfo = false
        }
    }
}
function statsToggle() {
if (isInfo === true) {
    document.getElementById("infoBoxOuter").style.display = "none"
    isInfo = false
    if (isStats === false) {
        document.getElementById("statsBoxOuter").style.display = "block"
        isStats = true
    }
    else {
        document.getElementById("statsBoxOuter").style.display = "none"
        isStats = false
    }
}
else {
    if (isStats === false) {
        document.getElementById("statsBoxOuter").style.display = "block"
        isStats = true
    }
    else {
        document.getElementById("statsBoxOuter").style.display = "none"
        isStats = false
    }
}
}