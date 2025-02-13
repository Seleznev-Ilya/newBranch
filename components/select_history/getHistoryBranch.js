import { api } from "../../service/store.js";
import { focusInput } from "../../components/utils/focusInput.js";
import { addOptionsToMain } from "./addOptionToMainSelect.js";
import { actionBorder } from "../utils/actionBorder.js";
import { mainPlaceholder } from "../utils/main.js";

export const getHistoryBranch = () => {
  const isNewBranchName = branchName.checked;
  const isFixPrefix = fixPrefix.checked;
  let lastBranch =
    containerHistory.options[containerHistory.selectedIndex].label;
  const toCopyNewBranchName = `git checkout -b clean/${ isFixPrefix ? 'fix' : 'feature' }/${ lastBranch }`;
  const toCopyBranchName = `git checkout clean/${ isFixPrefix ? 'fix' : 'feature' }/${ lastBranch }`;

  navigator.clipboard.writeText(isNewBranchName ? toCopyNewBranchName : toCopyBranchName);

  api.setItemToStart(lastBranch);
  addOptionsToMain();
  actionBorder("borderDone", true);
  mainPlaceholder.setPlaceholder(lastBranch, false);
  focusInput();
};
