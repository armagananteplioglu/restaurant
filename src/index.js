import { homePage } from "./home.js";
import { header } from "./header.js"

const content = document.querySelector("#content")
content.append(header)
content.append(homePage)