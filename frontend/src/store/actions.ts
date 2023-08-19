import { Commit } from "vuex";
import * as api from "../api";

export const getAllFlights = async ({ commit }: { commit: Commit }) => {
  try {
    const flights = await api.getAllFlights();
    commit("setAllFlights", flights);
  } catch (e) {
    console.log(e);
    throw e;
  }
};
