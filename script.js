document.addEventListener('DOMContentLoaded', () => {
    const ovenTime = document.getElementById("ovenTime")
    const AFTime = document.getElementById("AFTime")

    const ovenTemp = document.getElementById("ovenTemp")
    const ovenFanTemp = document.getElementById("ovenFanTemp")
    const AFTemp = document.getElementById("AFTemp")

    document.querySelectorAll("input").forEach(i => { i.addEventListener("change", UpdateTemps) });
});


const UpdateTemps = (e) => {
    switch (e.target.id) {
        case "ovenTime": {
            console.log(`LOG`)
            AFTime.innerHTML = Math.trunc(e.target.value * 0.8)
            break;
        }
        case "ovenTemp": {
            ovenFanTemp.value = e.target.value - 20
            AFTemp.innerHTML = e.target.value - 40
            break;
        }
        case "ovenFanTemp": {
            ovenTemp.value = e.target.value + 20
            AFTemp.innerHTML = e.target.value - 20

        }
    }
}