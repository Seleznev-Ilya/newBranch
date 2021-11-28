import { api, apiTags } from "../../service/store.js";
import { getSelectTag } from "../select_tag/getSelectTag.js";
import { addOptionToTagSelect } from "../select_tag/addOptionToTagSelect.js";
import { actionBorder } from "../utils/actionBorder.js";
import { main, mainPlaceholder } from "../utils/main.js";
import { getTagFromUrl } from "./getTagFromUrl.js";

export const inputAction = () => {
  if (~main.getInput().indexOf("https://")) {
    const urlData = getTagFromUrl(main.getInput());
    main.setInput(urlData.number + " ");
    apiTags.resetItemToStart(urlData.tag);
    addOptionToTagSelect();
  } else {
    const result =
      selectBranch.value +
      "-" +
      main.getInput().trim().split(" ").join("-").slice(0, 1).toUpperCase() +
      main.getInput().trim().split(" ").join("-").slice(1);
    navigator.clipboard.writeText(result);
    api.resetItemToStart(result);
    main.cleanInput();
    mainPlaceholder.setPlaceholder(result);
  }
  actionBorder("borderDone");
};
