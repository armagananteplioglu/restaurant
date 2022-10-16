import './menu.css';
export { menuPage }

const menuPage = document.createElement("div")
const heroMenu = document.createElement("div")
heroMenu.setAttribute("id", "heroMenu")

const mainsTitle = document.createElement("h2")
mainsTitle.textContent = "Main Dishes"
const mains = document.createElement("div")
mains.setAttribute("class", "dishContainers")

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

const item3Div = document.createElement("div")
item3Div.setAttribute("class", "itemContainer")
const item3Pic = document.createElement("img")
item3Pic.setAttribute("class", "itemPicture")
item3Pic.src = "/components/vegetable-stir-fry.jpeg"
const item3Name = document.createElement("p")
item3Name.textContent = "Vegetable Stir Fry"
item3Name.setAttribute("class", "itemName")
const item3Price = document.createElement("p")
item3Price.setAttribute("class", "itemPrice")
item3Price.textContent = "$ 9.99"
const item3InfoContainer = document.createElement("div")
item3InfoContainer.setAttribute("class", "infoContainer")
item3InfoContainer.append(item3Name, item3Price)
item3Div.append(item3Pic, item3InfoContainer)

const item4Div = document.createElement("div")
item4Div.setAttribute("class", "itemContainer")
const item4Pic = document.createElement("img")
item4Pic.setAttribute("class", "itemPicture")
item4Pic.src = "/components/vegetable-stir-fry.jpeg"
const item4Name = document.createElement("p")
item4Name.textContent = "Baked Salmon"
item4Name.setAttribute("class", "itemName")
const item4Price = document.createElement("p")
item4Price.setAttribute("class", "itemPrice")
item4Price.textContent = "$ 12.99"
const item4InfoContainer = document.createElement("div")
item4InfoContainer.setAttribute("class", "infoContainer")
item4InfoContainer.append(item4Name, item4Price)
item4Div.append(item4Pic, item4InfoContainer)

const dessertsTitle = document.createElement("h2")
dessertsTitle.textContent = "Desserts"
const desserts = document.createElement("div")
desserts.setAttribute("class", "dishContainers")

const item5Div = document.createElement("div")
item5Div.setAttribute("class", "itemContainer")
const item5Pic = document.createElement("img")
item5Pic.setAttribute("class", "itemPicture")
item5Pic.src = "/components/biscuit.jpg"
const item5Name = document.createElement("p")
item5Name.textContent = "Biscuits"
item5Name.setAttribute("class", "itemName")
const item5Price = document.createElement("p")
item5Price.setAttribute("class", "itemPrice")
item5Price.textContent = "$ 6.99"
const item5InfoContainer = document.createElement("div")
item5InfoContainer.setAttribute("class", "infoContainer")
item5InfoContainer.append(item5Name, item5Price)
item5Div.append(item5Pic, item5InfoContainer)

const item6Div = document.createElement("div")
item6Div.setAttribute("class", "itemContainer")
const item6Pic = document.createElement("img")
item6Pic.setAttribute("class", "itemPicture")
item6Pic.src = "/components/ice-cream.jpeg"
const item6Name = document.createElement("p")
item6Name.textContent = "Ice Cream"
item6Name.setAttribute("class", "itemName")
const item6Price = document.createElement("p")
item6Price.setAttribute("class", "itemPrice")
item6Price.textContent = "$ 3.99"
const item6InfoContainer = document.createElement("div")
item6InfoContainer.setAttribute("class", "infoContainer")
item6InfoContainer.append(item6Name, item6Price)
item6Div.append(item6Pic, item6InfoContainer)

const item7Div = document.createElement("div")
item7Div.setAttribute("class", "itemContainer")
const item7Pic = document.createElement("img")
item7Pic.setAttribute("class", "itemPicture")
item7Pic.src = "/components/dough-balls.jpg"
const item7Name = document.createElement("p")
item7Name.textContent = "Chinese Chocolate Doughballs"
item7Name.setAttribute("class", "itemName")
const item7Price = document.createElement("p")
item7Price.setAttribute("class", "itemPrice")
item7Price.textContent = "$ 7.99"
const item7InfoContainer = document.createElement("div")
item7InfoContainer.setAttribute("class", "infoContainer")
item7InfoContainer.append(item7Name, item7Price)
item7Div.append(item7Pic, item7InfoContainer)

const item8Div = document.createElement("div")
item8Div.setAttribute("class", "itemContainer")
const item8Pic = document.createElement("img")
item8Pic.setAttribute("class", "itemPicture")
item8Pic.src = "/components/japanese-dyum-dai.jpeg"
const item8Name = document.createElement("p")
item8Name.textContent = "Japanese Dyum-Dai"
item8Name.setAttribute("class", "itemName")
const item8Price = document.createElement("p")
item8Price.setAttribute("class", "itemPrice")
item8Price.textContent = "$ 6.99"
const item8InfoContainer = document.createElement("div")
item8InfoContainer.setAttribute("class", "infoContainer")
item8InfoContainer.append(item8Name, item8Price)
item8Div.append(item8Pic, item8InfoContainer)

const drinksTitle = document.createElement("h2")
drinksTitle.textContent = "Drinks"
const drinks = document.createElement("div")
drinks.setAttribute("class", "dishContainers")

const item9Div = document.createElement("div")
item9Div.setAttribute("class", "itemContainer")
const item9Pic = document.createElement("img")
item9Pic.setAttribute("class", "itemPicture")
item9Pic.src = "/components/water.jpg"
const item9Name = document.createElement("p")
item9Name.textContent = "Water"
item9Name.setAttribute("class", "itemName")
const item9Price = document.createElement("p")
item9Price.setAttribute("class", "itemPrice")
item9Price.textContent = "$ 0.99"
const item9InfoContainer = document.createElement("div")
item9InfoContainer.setAttribute("class", "infoContainer")
item9InfoContainer.append(item9Name, item9Price)
item9Div.append(item9Pic, item9InfoContainer)

const item10Div = document.createElement("div")
item10Div.setAttribute("class", "itemContainer")
const item10Pic = document.createElement("img")
item10Pic.setAttribute("class", "itemPicture")
item10Pic.src = "/components/coca-cola.jpeg"
const item10Name = document.createElement("p")
item10Name.textContent = "Coca Cola"
item10Name.setAttribute("class", "itemName")
const item10Price = document.createElement("p")
item10Price.setAttribute("class", "itemPrice")
item10Price.textContent = "$ 1.99"
const item10InfoContainer = document.createElement("div")
item10InfoContainer.setAttribute("class", "infoContainer")
item10InfoContainer.append(item10Name, item10Price)
item10Div.append(item10Pic, item10InfoContainer)

const item11Div = document.createElement("div")
item11Div.setAttribute("class", "itemContainer")
const item11Pic = document.createElement("img")
item11Pic.setAttribute("class", "itemPicture")
item11Pic.src = "/components/matcha-latte.jpg"
const item11Name = document.createElement("p")
item11Name.textContent = "Matcha Latte"
item11Name.setAttribute("class", "itemName")
const item11Price = document.createElement("p")
item11Price.setAttribute("class", "itemPrice")
item11Price.textContent = "$ 3.99"
const item11InfoContainer = document.createElement("div")
item11InfoContainer.setAttribute("class", "infoContainer")
item11InfoContainer.append(item11Name, item11Price)
item11Div.append(item11Pic, item11InfoContainer)

const item12Div = document.createElement("div")
item12Div.setAttribute("class", "itemContainer")
const item12Pic = document.createElement("img")
item12Pic.setAttribute("class", "itemPicture")
item12Pic.src = "/components/chinese-tea.jpeg"
const item12Name = document.createElement("p")
item12Name.textContent = "Chinese Tea"
item12Name.setAttribute("class", "itemName")
const item12Price = document.createElement("p")
item12Price.setAttribute("class", "itemPrice")
item12Price.textContent = "$ 1.99"
const item12InfoContainer = document.createElement("div")
item12InfoContainer.setAttribute("class", "infoContainer")
item12InfoContainer.append(item12Name, item12Price)
item12Div.append(item12Pic, item12InfoContainer)

mains.append(item1Div, item2Div, item3Div, item4Div)
desserts.append(item5Div, item6Div, item7Div, item8Div)
drinks.append(item9Div,item10Div, item11Div, item12Div)
heroMenu.append(mainsTitle, mains, dessertsTitle, desserts, drinksTitle, drinks)
menuPage.append(heroMenu)