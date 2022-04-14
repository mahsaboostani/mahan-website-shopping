import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default {
  getEvents(category) {
    return apiClient.get(category);
  },
  getEvent(category, id) {
    return apiClient.get(category + "/" + id);
  },
};
