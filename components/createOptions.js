export const createOptions = (data) => {
  return data.map((item, i) => {
    return `<option value="${item}">${item}</option>`;
  });
};
