import { api, apiTags } from "../../service/store.js";
import { addOptionToTagSelect } from "../select_tag/addOptionToTagSelect.js";
import { main } from "../utils/main.js";
import { getTagFromUrl } from "./getTagFromUrl.js";
import { excludeSymbols } from "../utils/excludeSymbols.js";

export const inputAction = () => {
  const str = main.getInput();
  if (~str.indexOf("https://")) {
    const urlData = getTagFromUrl(str);
    main.setInput(urlData.gitString[0]);
    apiTags.resetItemToStart(urlData.tag);

    addOptionToTagSelect();
  } else {
    const taskNumber = excludeSymbols(str);
    const tag = selectBranch.value;
    const result = `${tag}-${taskNumber}`;

    navigator.clipboard.writeText(result);
    api.setItemToStart(result);
    main.cleanInput();
  }
};
