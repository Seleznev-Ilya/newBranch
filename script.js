// CHAN-3845
import { addOptionsToMain } from "./actions/addOptionToMainSelect.js";
import { focusInput } from "./actions/focusInput.js";
import { getHistoryBranch } from "./actions/getHistoryBranch.js";
import { copyText } from "./events/events.js";

document.addEventListener("DOMContentLoaded", addOptionsToMain);
document.addEventListener("DOMContentLoaded", focusInput);
mainInput.addEventListener("submit", copyText);
containerHistory.addEventListener('change', getHistoryBranch )
