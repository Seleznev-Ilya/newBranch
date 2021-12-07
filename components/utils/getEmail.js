import { actionBorder } from "./actionBorder.js";
import { mainPlaceholder } from "./main.js";

export const getEmail = () => {
  const email = "illia.selieznov@wunderkind.co";
  navigator.clipboard.writeText(email);
  mainPlaceholder.setPlaceholder("Email");
  actionBorder("borderDone");
};
