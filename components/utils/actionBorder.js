import { main } from "./main.js";

const container = document.querySelector(".container");
container.classList.remove("borderDone");
export const actionBorder = (selector, del = false) => {
  container.classList.add("borderDone");
  setTimeout(() => {
    if (del) {
      main.cleanInput();
    }
    container.classList.remove(selector);
  }, 300);
};
