import { addOptionsToMain } from "../select_history/addOptionToMainSelect.js";
import { actionBorder } from "../utils/actionBorder.js";
import { inputAction } from "./inputAction.js";

export function copyText(event) {
  event.preventDefault();
  inputAction();
  addOptionsToMain();
  actionBorder("borderDone");
}
