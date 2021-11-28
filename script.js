// CHAN-3845
import { addOptionsToMain } from "./components/select_history/addOptionToMainSelect.js";
import { addOptionToTagSelect } from "./components/select_tag/addOptionToTagSelect.js";
import { focusInput } from "./components/utils/focusInput.js";
import { getHistoryBranch } from "./components/select_history/getHistoryBranch.js";
import { copyText } from "./components/input_main/copyText.js";
import { getSelectTag } from "./components/select_tag/getSelectTag.js";

document.addEventListener("DOMContentLoaded", addOptionsToMain);
document.addEventListener("DOMContentLoaded", addOptionToTagSelect);
document.addEventListener("DOMContentLoaded", focusInput);
mainInput.addEventListener("submit", copyText);
containerHistory.addEventListener('change', getHistoryBranch )
selectBranch.addEventListener("change", getSelectTag);
