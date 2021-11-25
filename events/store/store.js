const service = [];
const serviceKey = "service";

export const api = {
  getStore() {
    const serviceStore = localStorage.getItem(serviceKey);
    if (serviceStore !== null) {
      return JSON.parse(serviceStore);
    }
    this.setStore();
    return service;
  },
  setStore(data = []) {
    localStorage.setItem(serviceKey, JSON.stringify(this.trimStore(data)));
  },
  trimStore(data) {
    return data.length >= 10 ? data.slice(0,15) : data;
  },
};
