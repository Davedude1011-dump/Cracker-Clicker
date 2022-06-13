var crackers = 0
var crackersPerClick = 1

// Refresh Screen Variables

function refresh() {
    document.getElementById("crackerCounter").innerHTML = crackers
}

// cracker click 

function crackerClick() {
    crackers += crackersPerClick
    refresh()
}