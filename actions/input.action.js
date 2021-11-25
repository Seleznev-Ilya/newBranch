import { api } from "../events/store/store.js";
import { addOptionsToMain } from "./addOptionToMainSelect.js";

const container = document.querySelector(".container");
container.classList.remove("borderDone");
export const inputAction = () => {
  const result =
    selectBranch.value +
    "-" +
    mainInput[0].value.trim().split(" ").join("-").slice(0, 1).toUpperCase() +
    mainInput[0].value.trim().split(" ").join("-").slice(1);
  navigator.clipboard.writeText(result);
  container.classList.add("borderDone");
  api.setStore([result, ...api.getStore()]);
  addOptionsToMain();
  setTimeout(() => {
    container.classList.remove("borderDone"), (mainInput[0].value = "");
  }, 150);
};
