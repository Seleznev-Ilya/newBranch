const service = [];
const tags = ["DEV"];
const serviceKey = "service";
const serviceTagKey = "serviceTags";

export const api = {
  getStore() {
    const serviceStore = localStorage.getItem(serviceKey);
    if (serviceStore !== null) {
      return JSON.parse(serviceStore);
    }
    this.setStore();
    return service;
  },
  setStore(data = service) {
    localStorage.setItem(serviceKey, JSON.stringify(this.trimStore(data)));
  },
  trimStore(data) {
    return data.length >= 15 ? data.slice(0, 15) : data;
  },
  deleteStoreItem(string) {
    this.setStore(this.getStore().filter((item) => string !== item));
  },
  resetItemToStart(item) {
    this.deleteStoreItem(item);
    this.setStore([item, ...this.getStore()]);
  },
};

export const apiTags = {
  getStore() {
    const serviceStore = localStorage.getItem(serviceTagKey);
    if (serviceStore !== null) {
      return JSON.parse(serviceStore);
    }
    this.setStore();
    return tags;
  },
  setStore(data = tags) {
    localStorage.setItem(serviceTagKey, JSON.stringify(this.trimStore(data)));
  },
  trimStore(data) {
    return data.length >= 5 ? data.slice(0, 5) : data;
  },
  deleteStoreItem(string) {
    this.setStore(this.getStore().filter((item) => string !== item));
  },
  resetItemToStart(item) {
    this.deleteStoreItem(item);
    this.setStore([item, ...this.getStore()]);
  },
};
