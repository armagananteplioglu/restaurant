import './header.css';
export { headerBuilder }

const header = document.createElement("header")
const leftHeader = document.createElement("div")
const headerLogo = document.createElement("img")
const name = document.createElement("a")
const rightHeader = document.createElement("div")
const home = document.createElement("a")
const menu = document.createElement("a")
const contact = document.createElement("a")

leftHeader.setAttribute("id", "left")
rightHeader.setAttribute("id", "right")

headerLogo.setAttribute("id", "logo")
headerLogo.src = "/components/logo.jpg"

name.innerHTML = "Noob's " + '<br />' + "Wok"
name.href = "#"
name.setAttribute("id", "brandName")

home.href = "#"
home.textContent = "Home"
menu.href = "#"
menu.textContent = "Menu"
contact.href = "#"
contact.textContent = "Contact"

const headerBuilder = () => {
    content.appendChild(header)
    header.append(leftHeader, rightHeader)
    leftHeader.append(headerLogo, name)
    rightHeader.append(home, menu, contact)
}