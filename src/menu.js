import './menu.css';
import { header } from "./header.js"
export { menuPage }

const menuPage = document.createElement("div")
const mainDishes = document.createElement("h2")
mainDishes.textContent = "Main Dishes"

menuPage.append(header, mainDishes)