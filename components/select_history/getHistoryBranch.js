import { api } from "../../service/store.js";
import { addOptionsToMain } from "./addOptionToMainSelect.js";
import { actionBorder } from "../utils/actionBorder.js";
import { mainPlaceholder } from "../utils/main.js";
import { focusInput } from "../utils/focusInput.js";

export const getHistoryBranch = () => {
  let lastBranch =
    containerHistory.options[containerHistory.selectedIndex].value;
  mainInput.value = lastBranch;
  navigator.clipboard.writeText(lastBranch);
  actionBorder("borderDone", true);
  mainPlaceholder.setPlaceholder(lastBranch);
  api.resetItemToStart(lastBranch);
  addOptionsToMain();
};
