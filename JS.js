var crackers = 0
var totalCrackers = 0
var crackersPerClick = 1
var totalCrackerClicks = 0

var isCheese = false
var isJamUpg = false
var isBaconUpg = false
var isMicrowave = false
var isChair = false
var isChocolate = false
var isChips = false
var isKetchup = false
var isMustard = false
var isMayo = false

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
var upupOne = false
var upupTwo = true

var inFlight = false

// adam fly animation 

function adamFly() {
    if (references === true) {
        if (inFlight === false) {
            inFlight = true
            document.getElementById("adamCrackerFly").style.display = "block";
            document.getElementById("adamCrackerFly").style.animation = "adamCrackerFlyAnimation 10s linear";
            setTimeout(() => {  document.getElementById("adamCrackerFly").style.display = "none"; }, 10000);
            setTimeout(() => {  inFlight = false; }, 10000);
    }
    else {

    }
    }
    else {

    }
}

// secret code to get ADMIN and the Puuuur fect cat
function upup() {
    if (crackers === 31) {
        upupOne = true
        crackers = 0
    }
    if (upupOne === true) {
        if (crackers === 41) {
            upupTwo = true
            crackers = 0
        }
    }
    if (upupOne === true) {
        if (upupOne = true) {
            if (crackers === 59) {
                ADMIN = true
                crackers = Infinity
                ownedBuildings = Infinity
                crackersPerClick = Infinity
                totalCrackerClicks = Infinity
                upupOne = false
                upupTwo = false
            }
        }
    }
    if (document.getElementById("upupInput").value === "ADAM") {
        ADMIN = true
        upupOne = false
        upupTwo = false
    }
    if (document.getElementById("upupInput").value === "3.14159") {
        ADMIN = true
        crackers = Infinity
        ownedBuildings = Infinity
        crackersPerClick = Infinity
        totalCrackerClicks = Infinity
        upupOne = false
        upupTwo = false
    }
    refresh()
}

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
        isChair = true
        
    }
    else {
        document.getElementById("upgradeButtonPriceFive").style.color = "red"
    }
    if (isChair === true) {
        document.getElementById("upgradeButtonFiveImg").src = "images/chair.png"
        document.getElementById("UpgradeButtonFiveName").innerHTML = "Chair?"
        
    }
    document.getElementById("upgradeButtonFivePrice").innerHTML = upgradeFivePrice
    // ---


}
function upgradeSixPriceCheck() {
    //upgrade 6
    if (crackers >= upgradeSixPrice) {
        document.getElementById("upgradeButtonPriceSix").style.color = "green"
        isChocolate = true
        
    }
    else {
        document.getElementById("upgradeButtonPriceSix").style.color = "red"
    }
    if (isChocolate === true) {
        document.getElementById("upgradeButtonSixImg").src = "images/chocolate.png"
        document.getElementById("UpgradeButtonSixName").innerHTML = "chocolate"
        
    }
    document.getElementById("upgradeButtonSixPrice").innerHTML = upgradeSixPrice
    // ---


}
function upgradeSevenPriceCheck() {
    //upgrade 7
    if (crackers >= upgradeSevenPrice) {
        document.getElementById("upgradeButtonPriceSeven").style.color = "green"
        isChips = true
        
    }
    else {
        document.getElementById("upgradeButtonPriceSeven").style.color = "red"
    }
    if (isChips === true) {
        document.getElementById("upgradeButtonSevenImg").src = "images/chips.png"
        document.getElementById("UpgradeButtonSevenName").innerHTML = "chips"
        
    }
    document.getElementById("upgradeButtonSevenPrice").innerHTML = upgradeSevenPrice
    // ---


}
function upgradeEightPriceCheck() {
    //upgrade 8
    if (crackers >= upgradeEightPrice) {
        document.getElementById("upgradeButtonPriceEight").style.color = "green"
        isKetchup = true
        
    }
    else {
        document.getElementById("upgradeButtonPriceEight").style.color = "red"
    }
    if (isKetchup === true) {
        document.getElementById("upgradeButtonEightImg").src = "images/ketchup.png"
        document.getElementById("UpgradeButtonEightName").innerHTML = "Ketchup"
        
    }
    document.getElementById("upgradeButtonEightPrice").innerHTML = upgradeEightPrice
    // ---


}
function upgradeNinePriceCheck() {
    //upgrade 9
    if (crackers >= upgradeNinePrice) {
        document.getElementById("upgradeButtonPriceNine").style.color = "green"
        isMustard = true
        
    }
    else {
        document.getElementById("upgradeButtonPriceNine").style.color = "red"
    }
    if (isMustard === true) {
        document.getElementById("upgradeButtonNineImg").src = "images/mustard.png"
        document.getElementById("UpgradeButtonNineName").innerHTML = "Mustard"
        
    }
    document.getElementById("upgradeButtonNinePrice").innerHTML = upgradeNinePrice
    // ---


}
function upgradeTenPriceCheck() {
    //upgrade 10
    if (crackers >= upgradeTenPrice) {
        document.getElementById("upgradeButtonPriceTen").style.color = "green"
        isMayo = true
        
    }
    else {
        document.getElementById("upgradeButtonPriceTen").style.color = "red"
    }
    if (isMayo === true) {
        document.getElementById("upgradeButtonTenImg").src = "images/mayo.png"
        document.getElementById("UpgradeButtonTenName").innerHTML = "Mayo"
        
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
        adamFly()
    }
    refresh()
}
function  upgradeButtonTwoOnclick() {
    if (crackers >= upgradeTwoPrice) {
        crackers -= upgradeTwoPrice
        crackersPerClick += upgradeTwoAdd
        upgradeTwoPrice += parseInt(upgradeTwoPrice * 0.2)
        ownedBuildings += 1
        adamFly()
    }
    refresh()
}
function  upgradeButtonThreeOnclick() {
    if (crackers >= upgradeThreePrice) {
        crackers -= upgradeThreePrice
        crackersPerClick += upgradeThreeAdd
        upgradeThreePrice += parseInt(upgradeThreePrice * 0.2)
        ownedBuildings += 1
        adamFly()
    }
    refresh()
}
function  upgradeButtonFourOnclick() {
    if (crackers >= upgradeFourPrice) {
        crackers -= upgradeFourPrice
        crackersPerClick += upgradeFourAdd
        upgradeFourPrice += parseInt(upgradeFourPrice * 0.3)
        ownedBuildings += 1
        adamFly()
    }
    refresh()
}
function  upgradeButtonFiveOnclick() {
    if (crackers >= upgradeFivePrice) {
        crackers -= upgradeFivePrice
        crackersPerClick += upgradeFiveAdd
        upgradeFivePrice += parseInt(upgradeFivePrice * 0.3)
        ownedBuildings += 1
        adamFly()
    }
    refresh()
}
function  upgradeButtonSixOnclick() {
    if (crackers >= upgradeSixPrice) {
        crackers -= upgradeSixPrice
        crackersPerClick += upgradeSixAdd
        upgradeSixPrice += parseInt(upgradeSixPrice * 0.3)
        ownedBuildings += 1
        adamFly()
    }
    refresh()
}
function  upgradeButtonSevenOnclick() {
    if (crackers >= upgradeSevenPrice) {
        crackers -= upgradeSevenPrice
        crackersPerClick += upgradeSevenAdd
        upgradeSevenPrice += parseInt(upgradeSevenPrice * 0.4)
        ownedBuildings += 1
        adamFly()
    }
    refresh()
}
function  upgradeButtonEightOnclick() {
    if (crackers >= upgradeEightPrice) {
        crackers -= upgradeEightPrice
        crackersPerClick += upgradeEightAdd
        upgradeEightPrice += parseInt(upgradeEightPrice * 0.4)
        ownedBuildings += 1
        adamFly()
    }
    refresh()
}
function  upgradeButtonNineOnclick() {
    if (crackers >= upgradeNinePrice) {
        crackers -= upgradeNinePrice
        crackersPerClick += upgradeNineAdd
        upgradeNinePrice += parseInt(upgradeNinePrice * 0.4)
        ownedBuildings += 1
        adamFly()
    }
    refresh()
}
function  upgradeButtonTenOnclick() {
    if (crackers >= upgradeTenPrice) {
        crackers -= upgradeTenPrice
        crackersPerClick += upgradeTenAdd
        upgradeTenPrice += parseInt(upgradeTenPrice * 0.5)
        ownedBuildings += 1
        adamFly()
    }
    refresh()
}

// skins buying

function skinsButtonFiveOnclick() {
       if (ADMIN === true) {
        document.getElementById("skinsFive").style.color = "green"
        document.getElementById("skinsButtonFivePrice").innerHTML = "✔️"

        document.getElementById("cracker").src = "images/Puuuur fect cracker.png"

        refresh()
        adamFly()
    }
    else {
        document.getElementById("skinsFive").style.color = "red"
        document.getElementById("skinsButtonFivePrice").innerHTML = "❌"
    }
}
function skinsButtonSixOnclick() {
    if (ADMIN === true) {
     document.getElementById("skinsSix").style.color = "green"
     document.getElementById("skinsButtonSixPrice").innerHTML = "✔️"

     document.getElementById("cracker").src = "images/demonCracker.png"

     refresh()
     adamFly()
 }
 else {
     document.getElementById("skinsFive").style.color = "red"
     document.getElementById("skinsButtonFivePrice").innerHTML = "❌"
 }
}

function skinsButtonSevenOnclick() {
    if (ADMIN === true) {
     document.getElementById("skinsSeven").style.color = "green"
     document.getElementById("skinsButtonSevenPrice").innerHTML = "✔️"

     document.getElementById("cracker").src = "images/menacingCracker.png"

     refresh()
     adamFly()
 }
 else {
     document.getElementById("skinsSeven").style.color = "red"
     document.getElementById("skinsButtonSevenPrice").innerHTML = "❌"
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