import axios from "axios";

const httpGet = "https://i-cut.cc/axios.json";

export const getRouter = ({ commit }) =>
  axios.get(httpGet).then((res) => {
    commit("ROUTER_LIST", res.data);
  });

export const getText = ({ commit }) =>
  axios.get(httpGet).then((res) => {
    commit("TEXT_LIST", res.data);
  });

export const loadings = ({ commit }) =>
  axios.get(httpGet).then((res) => {
    commit("COUNT_LIST", res.data);
  });

export const increment = ({ commit }) => commit("increment");
export const decrement = ({ commit }) => commit("decrement");
