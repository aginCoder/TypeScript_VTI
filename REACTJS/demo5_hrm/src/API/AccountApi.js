import { api } from "./api";

let getListAccountAPI = () => {
  return api("GET", "accounts/", null);
};

let addAccountNewAPI = (accountParam) => {
  return api("POST", "accounts/", accountParam);
};

export { getListAccountAPI, addAccountNewAPI };