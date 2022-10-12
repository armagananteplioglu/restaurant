import { headerBuilder } from "./header.js"
import './home.css';
export { homeBuilder }


const hero = document.createElement("div")
hero.setAttribute("id", "hero")

content.append(headerBuilder())

const homeBuilder = () => {
    content.append(hero)
}