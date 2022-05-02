import axios from "axios";

export const apiClient = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/mahsaboostani/mahan-website-shopping/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default {
  getEventAll() {
    return apiClient.get();
  },
  getEvents(category) {
    return apiClient.get(category);
  },
  getEvent(category, id) {
    return apiClient.get(category + "/" + id);
  },
};
