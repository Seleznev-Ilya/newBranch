import { focusInput } from "../utils/focusInput.js";
import { apiTags } from "../../service/store.js";
import { addOptionToTagSelect } from "./addOptionToTagSelect.js";
import { actionBorder } from "../utils/actionBorder.js";
export const getSelectTag = () => {
  apiTags.resetItemToStart(selectBranch.value);
  addOptionToTagSelect();
  actionBorder("borderDone");
  focusInput();
};
