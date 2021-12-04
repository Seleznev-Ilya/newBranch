import { api, apiTags } from "../../service/store.js";
import { addOptionToTagSelect } from "../select_tag/addOptionToTagSelect.js";
import { main, mainPlaceholder } from "../utils/main.js";
import { getTagFromUrl } from "./getTagFromUrl.js";
import { excludeSymbols } from "../utils/excludeSymbols.js";

export const inputAction = () => {
  const str = excludeSymbols(main.getInput());
  if (~str.indexOf("https://")) {
    const urlData = getTagFromUrl(str);
    main.setInput(urlData.number + " ");
    apiTags.resetItemToStart(urlData.tag);
    addOptionToTagSelect();
  } else {
    const result =
      selectBranch.value +
      "-" +
      str.trim().split(" ").join("-").slice(0, 1).toUpperCase() +
      str.trim().split(" ").join("-").slice(1);
    navigator.clipboard.writeText(result);
    api.resetItemToStart(result);
    main.cleanInput();
    // mainPlaceholder.setPlaceholder(result);
  }
};
