import appAxios from "./axios-base-util";

export const CardDetail = (headers, count) =>
  appAxios.get("/photos", {
    params: {
      _limit: count,
    },
    headers,
  });
