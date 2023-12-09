import axios from "axios";

const productionUrl = "https://0001.uz/";

export const customFetch = axios.create({
  baseURL: productionUrl,
});
