export const mainPlaceholder = {
  setPlaceholder(value, type = false) {
    if (type) {
      mainInput[0].placeholder = value + " ⣿ saved ";
    } else {
      mainInput[0].placeholder = value + " ❐ copied ";
    }
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
