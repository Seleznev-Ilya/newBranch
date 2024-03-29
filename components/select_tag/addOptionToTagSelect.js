import { apiTags } from "../../service/store.js";
import { createOptions } from "../utils/createOptions.js";
import { focusInput } from "../utils/focusInput.js";

export const addOptionToTagSelect = () => {
  const store = apiTags.getStore();
  selectBranch.innerHTML = createOptions(store);
  focusInput();
};
