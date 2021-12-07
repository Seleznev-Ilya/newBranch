import { apiTags } from "../../service/store.js";

export const excludeSymbols = (str) => {
  const arrRegExp = [/"/, ...apiTags.getStore()];
  let newStr = str;
  arrRegExp.forEach((re) => {
    while (!!newStr.match(re)) {
      newStr = newStr.replace(re, "");
    }
  });
  return newStr.replace(/-/, "");
};
