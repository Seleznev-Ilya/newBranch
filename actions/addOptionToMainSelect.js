import { api } from "../events/store/store.js";
import { selectHistory } from "./select.history.js";
export const addOptionsToMain = () => {
    containerHistory.innerHTML = selectHistory(api.getStore())
    
};
