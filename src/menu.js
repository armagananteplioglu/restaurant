import './menu.css';
export { menuPage }

const menuPage = document.createElement("div")
const heroMenu = document.createElement("div")
heroMenu.setAttribute("id", "heroMenu")
const mainDishes = document.createElement("h2")
mainDishes.textContent = "Main Dishes"

const mains = document.createElement("div")
mains.setAttribute("id", "mainDishesContainer")

const item1Div = document.createElement("div")
item1Div.setAttribute("class", "itemContainer")
const item1Pic = document.createElement("img")
item1Pic.setAttribute("class", "itemPicture")
item1Pic.src = "/components/fried-rice.jpeg"
const item1Name = document.createElement("p")
item1Name.textContent = "Fried Rice"
item1Name.setAttribute("class", "itemName")
const item1Price = document.createElement("p")
item1Price.setAttribute("class", "itemPrice")
item1Price.textContent = "$ 3.99"
const item1InfoContainer = document.createElement("div")
item1InfoContainer.setAttribute("class", "infoContainer")
item1InfoContainer.append(item1Name, item1Price)
item1Div.append(item1Pic, item1InfoContainer)

const item2Div = document.createElement("div")
item2Div.setAttribute("class", "itemContainer")
const item2Pic = document.createElement("img")
item2Pic.setAttribute("class", "itemPicture")
item2Pic.src = "/components/lemon-chicken.jpeg"
const item2Name = document.createElement("p")
item2Name.textContent = "Lemon Chicken"
item2Name.setAttribute("class", "itemName")
const item2Price = document.createElement("p")
item2Price.setAttribute("class", "itemPrice")
item2Price.textContent = "$ 9.99"
const item2InfoContainer = document.createElement("div")
item2InfoContainer.setAttribute("class", "infoContainer")
item2InfoContainer.append(item2Name, item2Price)
item2Div.append(item2Pic, item2InfoContainer)

mains.append(item1Div, item2Div)
heroMenu.append(mainDishes, mains)
menuPage.append(heroMenu)