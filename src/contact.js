import './contact.css';
export { contactPage }

const contactPage = document.createElement("div")
const heroContact = document.createElement("div")
heroContact.setAttribute("id", "heroContact")

const reservation = document.createElement("div")
reservation.setAttribute("class", "text")
reservation.textContent = "Reservation: 02 54 472 35 89"

const email = document.createElement("div")
email.setAttribute("class", "text")
email.textContent = "Email: noobswok@noobwebsites.com"

const formLabel = document.createElement("div")
formLabel.setAttribute("class", "text")
formLabel.textContent = "For your suggestions and comments:"

const form = document.createElement("form")
const textArea = document.createElement("textarea")
textArea.setAttribute("type", "text")
textArea.setAttribute("id", "textBox") 
form.appendChild(textArea)

heroContact.append(reservation, email, formLabel, form)
contactPage.append(heroContact)