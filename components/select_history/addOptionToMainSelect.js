import { api } from "../../service/store.js";
import { mainPlaceholder } from "../utils/main.js";
import { createOptions } from "../createOptions.js";
import { focusInput } from "../utils/focusInput.js";
export const addOptionsToMain = () => {
  const store = api.getStore();
  containerHistory.innerHTML = createOptions(store);
  store.length
    ? mainPlaceholder.setPlaceholder(store[0])
    : mainPlaceholder.setPlaceholder(
        "Paste Jira task as: https://project/task ..."
      );
  focusInput();
};
