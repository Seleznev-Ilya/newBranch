// CHAN-3845
import { addOptionsToMain } from "./components/select_history/addOptionToMainSelect.js";
import { addOptionToTagSelect } from "./components/select_tag/addOptionToTagSelect.js";
import { focusInput } from "./components/utils/focusInput.js";
import { getHistoryBranch } from "./components/select_history/getHistoryBranch.js";
import { copyText } from "./components/input_main/copyText.js";
import { getSelectTag } from "./components/select_tag/getSelectTag.js";
// import { getEmail } from "./components/utils/getEmail.js"; //TODO: get email action
document.addEventListener(
  "DOMContentLoaded",
  () => addOptionsToMain(),
  addOptionToTagSelect(),
  focusInput()
);
mainInput.addEventListener("submit", copyText);
// email.addEventListener("click", getEmail); //TODO: get email action
containerHistory.addEventListener("change", getHistoryBranch);
selectBranch.addEventListener("change", getSelectTag);
