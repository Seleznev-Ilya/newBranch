import { actionBorder } from "./utils/actionBorder.js";
import { mainPlaceholder } from "./utils/main.js";

export const getEmail = () => {
  const email = "illia.selieznov@wunderkind.co";
  navigator.clipboard.writeText(email);
  mainPlaceholder.setPlaceholder("Email");
  actionBorder("borderDone");
};
