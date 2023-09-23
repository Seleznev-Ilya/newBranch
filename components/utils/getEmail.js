import { actionBorder } from "./actionBorder.js";
import { mainPlaceholder } from "./main.js";

export const getEmail = () => {
  const email = "some email";
  navigator.clipboard.writeText(email);
  mainPlaceholder.setPlaceholder("Email");
  actionBorder("borderDone");
};
