export const mainPlaceholder = {
  setPlaceholder(value) {
    mainInput[0].placeholder = value + " ░";
  },
  cleanPlaceholder() {
    mainInput[0].placeholder = "";
  },
};

export const main = {
  getInput() {
    return mainInput[0].value;
  },
  setInput(value) {
    mainInput[0].value = value;
  },
  cleanInput() {
    mainInput[0].value = "";
  },
};
