import { getJewelry, setJewelry } from "./database.js"

const jewels = getJewelry ()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "jewel") {
//             window.alert(`User chose style ${event.target.value}`)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "jewel") {
            setJewelry(parseInt(event.target.value))
        }
    }
)

export const JewelryTypes = () => {
    let html = "<label class='jewels-inline'>"

    
    const listItems = jewels.map(jewel => {
        return `<li>
        <input type="radio" name="jewel" value="${jewel.id}" /> ${jewel.type}</li>`
    })


    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</label>"
    return html
}

