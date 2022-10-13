import { header } from "./header.js"
import './home.css';
export { homePage }


const hero = document.createElement("div")
hero.setAttribute("id", "hero")
const chefPic = document.createElement("img")
chefPic.src = "/components/chef(cropped)"
const string = document.createElement("p")
string.textContent = "Best Asian Wok in Town"
const homePage = document.createElement("div")

hero.append(chefPic, string)
homePage.append(header, hero)