import { inputAction } from "../actions/input.action.js";

export function copyText(event) {
  event.preventDefault();
  inputAction();
}