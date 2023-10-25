import axios from "axios";

const appAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
appAxios.interceptors.request.use((req) => {
  req.meta = req.meta || {};
  req.meta.requestStartedAt = new Date().getTime();
  return req;
});

appAxios.interceptors.response.use(
  (res) => {
    res.durationInMs = new Date().getTime() - res.config.meta.requestStartedAt;
    return res;
  },
  (res) => {
    res.durationInMs = new Date().getTime() - res.config.meta.requestStartedAt;
    throw res;
  }
);

export default appAxios;
