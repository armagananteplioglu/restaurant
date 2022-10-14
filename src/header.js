import './header.css';


const header = document.createElement("header")
const leftHeader = document.createElement("div")
const headerLogo = document.createElement("img")
const brandName = document.createElement("a")
const rightHeader = document.createElement("div")
const home = document.createElement("a")
const menu = document.createElement("a")
const contact = document.createElement("a")

leftHeader.setAttribute("id", "left")
rightHeader.setAttribute("id", "right")

headerLogo.setAttribute("id", "logo")
headerLogo.src = "/components/logo.jpg"

brandName.innerHTML = "Noob's " + '<br />' + "Wok"
brandName.href = "#"
brandName.setAttribute("id", "brandName")

home.href = "#"
home.textContent = "Home"
menu.href = "#"
menu.textContent = "Menu"
contact.href = "#"
contact.textContent = "Contact"

leftHeader.append(headerLogo, brandName)
rightHeader.append(home, menu, contact)
header.append(leftHeader, rightHeader)

export { header, brandName,home, menu, contact }