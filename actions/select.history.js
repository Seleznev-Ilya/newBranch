export const selectHistory = (data) => {
    return data.map((item, i) => {
        return `<option value="${item}">${item}</option>`
    })
}