import { api } from "../../service/store.js";
import { addOptionsToMain } from "./addOptionToMainSelect.js";
import { actionBorder } from "../utils/actionBorder.js";
import { mainPlaceholder } from "../utils/main.js";

export const getHistoryBranch = () => {
  let lastBranch =
    containerHistory.options[containerHistory.selectedIndex].label;
  mainInput.value = lastBranch;
  navigator.clipboard.writeText(lastBranch);
  actionBorder("borderDone", true);
  api.resetItemToStart(lastBranch);
  addOptionsToMain();
  mainPlaceholder.setPlaceholder(lastBranch, false);
};
