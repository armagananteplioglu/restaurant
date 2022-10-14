import { header, home, menu, contact, brandName } from "./header.js"
import { homePage } from "./home.js";
import { menuPage} from "./menu.js"


const content = document.querySelector("#content")
content.append(header, homePage)

brandName.addEventListener("click", homeBringer)
home.addEventListener("click", homeBringer)
menu.addEventListener("click", menuBringer)
contact.addEventListener("click", () => console.log("Clicked Contact"))

function contentClearer () {
    content.remove
    content.textContent = ""
}

function homeBringer () {
    contentClearer()
    content.append(header, homePage)
}

function menuBringer() {
    contentClearer()
    content.append(header, menuPage)
}