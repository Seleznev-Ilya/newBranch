export const getHistoryBranch = () =>{
    let lastBranch = containerHistory.options[containerHistory.selectedIndex].value;
    navigator.clipboard.writeText(lastBranch);
}