var money = 0
var moneyPerClick = 1

var clickBuffCounter = 0
var buffClicks = 0
var buffClicksMax = 15
var buffClicksMultiplyer = 5
var isBuffOn = false

var topIcons = true
var forceTopIcons = false

var upgrade1Amount = 0
var upgrade2Amount = 0
var upgrade3Amount = 0
var upgrade4Amount = 0
var upgrade5Amount = 0
var upgrade6Amount = 0
var upgrade7Amount = 0

var upgrade1Cost = 30
var upgrade2Cost = 200
var upgrade3Cost = 5000
var upgrade4Cost = 20000
var upgrade5Cost = 50000
var upgrade6Cost = 100000
var upgrade7Cost = 10000000

function moneyClick() {
    money += moneyPerClick
    document.getElementById("numberCounter").innerHTML = money
    checkUpgradeCosts()
    updateMoneyCounter()
    clickBuffCounter += 1


    
    topBarFillUp()
    

    if (money === 777) {
        document.getElementById("tribute").innerHTML = "@Desiignerr = HACKER!"
    }
    else if (money === 690) {
        document.getElementById("tribute").innerHTML = "Henry likes Crackers"
    }
    else if (money === 169) {
        document.getElementById("tribute").innerHTML = "Sam do you like galleta"
    }
    else {
        document.getElementById("tribute").innerHTML = "BETA 3.8"
    }

    if (isBuffOn === true) {
        if (buffClicks <= buffClicksMax) {
           money += (moneyPerClick*buffClicksMultiplyer)-moneyPerClick
           document.getElementById("tribute").innerHTML = "BONUS: " + (buffClicksMax - buffClicks)
        }
        else {
            isBuffOn = false
            clickBuffCounter = 0
            buffClicks = 0
        }
        buffClicks += 1
    }
}

function updateMoneyCounter() {
    document.getElementById("numberCounter").innerHTML = money
    document.getElementById("MPCCounter").innerHTML = moneyPerClick
}

function phoneCheck() {
    if (document.getElementById("isPhone").style.color === "green") {
        document.getElementById("upgradeCrackerPanel").onclick = "upgradeCrackerClickPhone()"
    }
}


function upgradeCrackerClick() {
    if (document.getElementById("isUpgradeCrackerOutYet").innerHTML === "no") {
        document.getElementById("upgradeCracker").style.animationName = "upgradeCrackerOpen"
        document.getElementById("upgradeCrackerPanel").style.animationName = "upgradeCrackerOpenPanel"
        document.getElementById("upgradeCrackerPanel").style.visibility = "visible"
        document.getElementById("isUpgradeCrackerOutYet").innerHTML = "yes"
    }
    else {
        document.getElementById("upgradeCracker").style.animationName = "upgradeCrackerClose"
        document.getElementById("upgradeCrackerPanel").style.animationName = "upgradeCrackerClosePanel"
        document.getElementById("isUpgradeCrackerOutYet").innerHTML = "no"
    }
}

function upgradeCrackerClickPhone() {
    if (document.getElementById("isUpgradeCrackerOutYet").innerHTML === "no") {
        document.getElementById("upgradeCrackerPanel").style.display = "none"
        document.getElementById("upgradeCrackerPanel").style.visibility = "visible"
        document.getElementById("upgradeCracker").style.animationName = "upgradeCrackerOpen"
        setTimeout(() => {  document.getElementById("upgradeCrackerPanel").style.display = "block"; }, 5000);
        document.getElementById("isUpgradeCrackerOutYet").innerHTML = "yes"
    }
    else {
        document.getElementById("upgradeCracker").style.animationName = "upgradeCrackerClose"
        document.getElementById("upgradeCrackerPanel").style.animationName = "upgradeCrackerClosePanel"
        document.getElementById("upgradeCrackerPanel").style.display = "none"
        document.getElementById("isUpgradeCrackerOutYet").innerHTML = "no"
    }
}

function upgradeCheeseBuy() {
    if (money >= upgrade1Cost) {
        money -= upgrade1Cost
        moneyPerClick += 1
        upgrade1Amount += 1
        document.getElementById("upgradeTableText1Amount").innerHTML = upgrade1Amount
        upgrade1Cost += (moneyPerClick*5)
        document.getElementById("upgrade1price").innerHTML = upgrade1Cost
        updateMoneyCounter()
    }
    checkUpgradeCosts()
}

function upgradeHamBuy() {
    if (money >= upgrade2Cost) {
        money -= upgrade2Cost
        moneyPerClick += 10
        upgrade2Amount += 1
        document.getElementById("upgradeTableText2Amount").innerHTML = upgrade2Amount
        upgrade2Cost += (moneyPerClick*5)
        document.getElementById("upgrade2price").innerHTML = upgrade2Cost
        updateMoneyCounter()
    }
    checkUpgradeCosts()
}

function upgradePepperoniBuy() {
    if (money >= upgrade3Cost) {
        money -= upgrade3Cost
        moneyPerClick += 50
        upgrade3Amount += 1
        document.getElementById("upgradeTableText3Amount").innerHTML = upgrade3Amount
        upgrade3Cost += (moneyPerClick*5)
        document.getElementById("upgrade3price").innerHTML = upgrade3Cost
        updateMoneyCounter()
    }
    checkUpgradeCosts()
}

function upgradeRadiationBuy() {
    if (money >= upgrade4Cost) {
        money -= upgrade4Cost
        moneyPerClick += 200
        upgrade4Amount += 1
        document.getElementById("upgradeTableText4Amount").innerHTML = upgrade4Amount
        upgrade4Cost += (moneyPerClick*5)
        document.getElementById("upgrade4price").innerHTML = upgrade4Cost
        updateMoneyCounter()
    }
    checkUpgradeCosts()
}

function upgradeStarBuy() {
    if (money >= upgrade5Cost) {
        money -= upgrade5Cost
        moneyPerClick += 1000
        upgrade5Amount += 1
        document.getElementById("upgradeTableText5Amount").innerHTML = upgrade5Amount
        upgrade5Cost += (moneyPerClick*5)
        document.getElementById("upgrade5price").innerHTML = upgrade5Cost
        updateMoneyCounter()
    }
    checkUpgradeCosts()
}

function upgradeBlackholeBuy() {
    if (money >= upgrade6Cost) {
        money -= upgrade6Cost
        moneyPerClick += 10000
        upgrade6Amount += 1
        document.getElementById("upgradeTableText6Amount").innerHTML = upgrade6Amount
        upgrade6Cost += (moneyPerClick*20)
        document.getElementById("upgrade6price").innerHTML = upgrade6Cost
        updateMoneyCounter()
    }
    checkUpgradeCosts()
}

function upgradeGOLDBuy() {
    if (money >= upgrade7Cost) {
        money -= upgrade7Cost
        moneyPerClick += 1000000
        upgrade7Amount += 1
        document.getElementById("upgradeTableText7Amount").innerHTML = upgrade7Amount
        upgrade7Cost += (moneyPerClick*30)
        document.getElementById("upgrade7price").innerHTML = upgrade7Cost
        updateMoneyCounter()
    }
    checkUpgradeCosts()
}

function checkUpgradeCosts() {
   if (money >= upgrade1Cost) {
    document.getElementById("upgradeTableText1").className = "upgradeTable"
    }
    else {
        document.getElementById("upgradeTableText1").className = "upgradeTable blur"
    }

    if (money >= upgrade2Cost) {
    document.getElementById("upgradeTableText2").className = "upgradeTable"
    }
    else {
        document.getElementById("upgradeTableText2").className = "upgradeTable blur"
    }

    if (money >= upgrade3Cost) {
    document.getElementById("upgradeTableText3").className = "upgradeTable"
    }
    else {
        document.getElementById("upgradeTableText3").className = "upgradeTable blur"
    }

    if (money >= upgrade4Cost) {
    document.getElementById("upgradeTableText4").className = "upgradeTable"
    }
    else {
        document.getElementById("upgradeTableText4").className = "upgradeTable blur"
    }

    if (money >= upgrade5Cost) {
    document.getElementById("upgradeTableText5").className = "upgradeTable"
    }
    else {
        document.getElementById("upgradeTableText5").className = "upgradeTable blur"
    }

    if (money >= upgrade6Cost) {
    document.getElementById("upgradeTableText6").className = "upgradeTable"
    }
    else {
        document.getElementById("upgradeTableText6").className = "upgradeTable blur"
    }

    if (money >= upgrade7Cost) {
    document.getElementById("upgradeTableText7").className = "upgradeTable"
    }
    else {
        document.getElementById("upgradeTableText7").className = "upgradeTable blur"
    }
}

function topBarFillUp() {
    
    if (isBuffOn === false) {
        if (clickBuffCounter >= 100) {
            document.getElementById("moneyAndMPCBackground").style.backgroundImage = "none"
            document.getElementById("moneyAndMPCBackground").style.backgroundColor = "rgba(255, 217, 0)"
            document.getElementById("moneyAndMPCBackground").style.opacity = 1
            isBuffOn = true
        }
        else {
            if (clickBuffCounter > 95) {
                document.getElementById("moneyAndMPCBackground").style.backgroundImage = "linear-gradient(90deg, rgba(255, 255, 255, 0.785) 0% 95%,rgba(0, 0, 0, 0.47) 95% 100%)"
            }
            else {
                if (clickBuffCounter > 90) {
                    document.getElementById("moneyAndMPCBackground").style.backgroundImage = "linear-gradient(90deg, rgba(255, 255, 255, 0.785) 0% 90%,rgba(0, 0, 0, 0.47) 90% 100%)"
                }
                else {
                    if (clickBuffCounter > 85) {
                        document.getElementById("moneyAndMPCBackground").style.backgroundImage = "linear-gradient(90deg, rgba(255, 255, 255, 0.785) 0% 85%,rgba(0, 0, 0, 0.47) 85% 100%)"
                    }
                    else {
                        if (clickBuffCounter > 80) {
                            document.getElementById("moneyAndMPCBackground").style.backgroundImage = "linear-gradient(90deg, rgba(255, 255, 255, 0.785) 0% 80%,rgba(0, 0, 0, 0.47) 80% 100%)"
                        }
                        else {
                            if (clickBuffCounter > 75) {
                                document.getElementById("moneyAndMPCBackground").style.backgroundImage = "linear-gradient(90deg, rgba(255, 255, 255, 0.785) 0% 75%,rgba(0, 0, 0, 0.47) 75% 100%)"
                            }
                            else {
                                if (clickBuffCounter > 70) {
                                    document.getElementById("moneyAndMPCBackground").style.backgroundImage = "linear-gradient(90deg, rgba(255, 255, 255, 0.785) 0% 70%,rgba(0, 0, 0, 0.47) 70% 100%)"
                                }
                                else {
                                    if (clickBuffCounter > 65) {
                                        document.getElementById("moneyAndMPCBackground").style.backgroundImage = "linear-gradient(90deg, rgba(255, 255, 255, 0.785) 0% 65%,rgba(0, 0, 0, 0.47) 65% 100%)"
                                    }
                                    else {
                                        if (clickBuffCounter > 60) {
                                            document.getElementById("moneyAndMPCBackground").style.backgroundImage = "linear-gradient(90deg, rgba(255, 255, 255, 0.785) 0% 60%,rgba(0, 0, 0, 0.47) 60% 100%)"
                                        }
                                        else {
                                            if (clickBuffCounter > 55) {
                                                document.getElementById("moneyAndMPCBackground").style.backgroundImage = "linear-gradient(90deg, rgba(255, 255, 255, 0.785) 0% 55%,rgba(0, 0, 0, 0.47) 55% 100%)"
                                            }
                                            else {
                                                if (clickBuffCounter > 50) {
                                                    document.getElementById("moneyAndMPCBackground").style.backgroundImage = "linear-gradient(90deg, rgba(255, 255, 255, 0.785) 0% 50%,rgba(0, 0, 0, 0.47) 50% 100%)"
                                                }
                                                else {
                                                    if (clickBuffCounter > 45) {
                                                        document.getElementById("moneyAndMPCBackground").style.backgroundImage = "linear-gradient(90deg, rgba(255, 255, 255, 0.785) 0% 45%,rgba(0, 0, 0, 0.47) 45% 100%)"
                                                    }
                                                    else {
                                                        if (clickBuffCounter > 40) {
                                                            document.getElementById("moneyAndMPCBackground").style.backgroundImage = "linear-gradient(90deg, rgba(255, 255, 255, 0.785) 0% 40%,rgba(0, 0, 0, 0.47) 40% 100%)"
                                                        }
                                                        else {
                                                            if (clickBuffCounter > 35) {
                                                                document.getElementById("moneyAndMPCBackground").style.backgroundImage = "linear-gradient(90deg, rgba(255, 255, 255, 0.785) 0% 35%,rgba(0, 0, 0, 0.47) 35% 100%)"
                                                            }
                                                            else {
                                                                if (clickBuffCounter > 30) {
                                                                    document.getElementById("moneyAndMPCBackground").style.backgroundImage = "linear-gradient(90deg, rgba(255, 255, 255, 0.785) 0% 30%,rgba(0, 0, 0, 0.47) 30% 100%)"
                                                                }
                                                                else {
                                                                    if (clickBuffCounter > 25) {
                                                                        document.getElementById("moneyAndMPCBackground").style.backgroundImage = "linear-gradient(90deg, rgba(255, 255, 255, 0.785) 0% 25%,rgba(0, 0, 0, 0.47) 25% 100%)"
                                                                    }
                                                                    else {
                                                                        if (clickBuffCounter > 20) {
                                                                            document.getElementById("moneyAndMPCBackground").style.backgroundImage = "linear-gradient(90deg, rgba(255, 255, 255, 0.785) 0% 20%,rgba(0, 0, 0, 0.47) 20% 100%)"
                                                                        }
                                                                        else {
                                                                            if (clickBuffCounter > 15) {
                                                                                document.getElementById("moneyAndMPCBackground").style.backgroundImage = "linear-gradient(90deg, rgba(255, 255, 255, 0.785) 0% 15%,rgba(0, 0, 0, 0.47) 5% 100%)"
                                                                            }
                                                                            else {
                                                                                if (clickBuffCounter > 10) {
                                                                                    document.getElementById("moneyAndMPCBackground").style.backgroundImage = "linear-gradient(90deg, rgba(255, 255, 255, 0.785) 0% 10%,rgba(0, 0, 0, 0.47) 10% 100%)"
                                                                                }
                                                                                else {
                                                                                    if (clickBuffCounter > 5) {
                                                                                        document.getElementById("moneyAndMPCBackground").style.backgroundImage = "linear-gradient(90deg, rgba(255, 255, 255, 0.785) 0% 5%,rgba(0, 0, 0, 0.47) 5% 100%)"
                                                                                    }
                                                                                    else {
                                                                                        if (clickBuffCounter > 0) {
                                                                                            document.getElementById("moneyAndMPCBackground").style.backgroundColor = "transparent"
                                                                                            document.getElementById("moneyAndMPCBackground").style.opacity = 0.785
                                                                                            document.getElementById("moneyAndMPCBackground").style.backgroundImage = "linear-gradient(90deg, rgba(255, 255, 255, 0.785) 0% 0%,rgba(0, 0, 0, 0.47) 0% 100%)"
                                                                                        }
                                                                                    }             
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function toggleTopIcons() {
    if (topIcons === false) {
        document.getElementById("cheese").style.visibility = "hidden"
        document.getElementById("ham").style.visibility = "hidden"
        document.getElementById("pepperoni").style.visibility = "hidden"
        document.getElementById("radiation").style.visibility = "hidden"
        document.getElementById("sun").style.visibility = "hidden"
        document.getElementById("blackHole").style.visibility = "hidden"
        document.getElementById("gold").style.visibility = "hidden"
        topIcons = true
    }
    else {
        if (upgrade1Amount > 0) {
            document.getElementById("cheese").style.visibility = "visible"
        }
        if (upgrade2Amount > 0) {
            document.getElementById("ham").style.visibility = "visible"
        }
        if (upgrade3Amount > 0) {
            document.getElementById("pepperoni").style.visibility = "visible"
        }
        if (upgrade4Amount > 0) {
            document.getElementById("radiation").style.visibility = "visible"
        }
        if (upgrade5Amount > 0) {
            document.getElementById("sun").style.visibility = "visible"
        }
        if (upgrade6Amount > 0) {
            document.getElementById("blackHole").style.visibility = "visible"
        }
        if (upgrade7Amount > 0) {
            document.getElementById("gold").style.visibility = "visible"
        }
        topIcons = false
    }
}