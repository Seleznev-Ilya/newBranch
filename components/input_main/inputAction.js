import { api, apiTags } from "../../service/store.js";
import { addOptionToTagSelect } from "../select_tag/addOptionToTagSelect.js";
import { main } from "../utils/main.js";
import { getTagFromUrl } from "./getTagFromUrl.js";
import { excludeSymbols } from "../utils/excludeSymbols.js";

export const inputAction = () => {
  const str = main.getInput();
  if (~str.indexOf("https://")) {
    const urlData = getTagFromUrl(str);
    main.setInput(urlData.number + " ");
    apiTags.resetItemToStart(urlData.tag);
    addOptionToTagSelect();
  } else {
    const cleanStr = excludeSymbols(str);
    const result =
      selectBranch.value +
      "-" +
      cleanStr.trim().split(" ").join("-").slice(0, 1).toUpperCase() +
      cleanStr.trim().split(" ").join("-").slice(1);
    navigator.clipboard.writeText(result);
    api.resetItemToStart(result);
    main.cleanInput();
  }
};
