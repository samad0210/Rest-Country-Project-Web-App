var center = document.querySelector(".center")
var second = document.querySelector(".second")

function create(table, key, value) {
    var tr = document.createElement("tr")
    var th = document.createElement("th")
    var td = document.createElement("td")

    th.innerHTML = key
    if (key === "Flag") {
        let img = document.createElement("img")
        img.src = value
        td.appendChild(img)
    }
    else if (key === "Maps") {
        let a = document.createElement("a")
        a.href = value
        a.target = "_blank"
        a.innerHTML = "Click to Open Map"
        td.appendChild(a)
    }
    else
        td.innerHTML = value

    tr.appendChild(th)
    tr.appendChild(td)

    table.appendChild(tr)
}
async function getAPIData() {
    let name = "bharat"
    let search = document.getElementById("search")
    if (search.value !== "") {
        name = search.value
    }
    center.removeChild(second)
    second = document.createElement("div")
    second.classList.add("second")
    center.appendChild(second)

    try {

        let response = await fetch(`https:restcountries.com/v3.1/name/${name}`)
        let data = await response.json()


        for (let country of data) {
            var table = document.createElement("table")

            create(table, "Official Name", country.name.official)
            create(table, "Capital", country.capital)
            create(table, "Flag", country.flags.svg)
            create(table, "Population", country.population)
            create(table, "Area", country.area)
            create(table, "Region", country.region)
            create(table, "Sub-Region", country.subregion)
            create(table, "Continent", country.continents)
            create(table, "Independent", country.independent)
            create(table, "Un Member", country.unMember)
            create(table, "Landlocked", country.landlocked)
            create(table, "Borders", country.borders)
            create(table, "TimeZones", country.timezones)
            create(table, "Maps", country.maps.googleMaps)

            second.appendChild(table)
        }


    }
    catch (error) {
        alert("invalid country name")

    }



}

getAPIData()