import { api } from "../../service/store.js";
import { focusInput } from "../../components/utils/focusInput.js";
import { addOptionsToMain } from "./addOptionToMainSelect.js";
import { actionBorder } from "../utils/actionBorder.js";
import { mainPlaceholder } from "../utils/main.js";

export const getHistoryBranch = () => {
  const isBranchName = branchName.checked;
  let lastBranch =
    containerHistory.options[containerHistory.selectedIndex].label;
  const toCopyBranchName = `git checkout -b feature/${lastBranch}`;

  navigator.clipboard.writeText(isBranchName ? toCopyBranchName : lastBranch);

  api.setItemToStart(lastBranch);
  addOptionsToMain();
  actionBorder("borderDone", true);
  mainPlaceholder.setPlaceholder(lastBranch, false);
  focusInput();
};
