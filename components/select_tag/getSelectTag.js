import { focusInput } from "../utils/focusInput.js";
import { apiTags } from "../../service/store.js";
import { addOptionToTagSelect } from "./addOptionToTagSelect.js";
import { actionBorder } from "../utils/actionBorder.js";
export const getSelectTag = () => {
  const str = selectBranch.value;
  apiTags.resetItemToStart(str);
  addOptionToTagSelect();
  actionBorder("borderDone");
  focusInput();
};
