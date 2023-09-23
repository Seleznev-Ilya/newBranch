export const getTagFromUrl = (urlString) => {
  const url = [...urlString];
  const dash = url.indexOf("-");
  const arrName = [];
  const number = [];

  for (let i = dash - 1; i > 0; i--) {
    const item = url[i];
    if (item !== item.toLowerCase()) {
      arrName.unshift(item);
      continue;
    }
    break;
  }

  for (let i = dash + 1; i < url.length; i++) {
    const item = url[i];
    if (item.match(/\d+/) ?? false) {
      number.push(item);
    }
    if (item.match(/\d+/) == null) {
      break;
    }
    continue;
  }

  return {
    gitString: [`${arrName.join("")}-${number.join("")}`],
    tag: arrName.join(""),
    number: number.join(""),
  };
};
