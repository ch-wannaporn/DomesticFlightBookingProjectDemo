import { Commit } from "vuex";
import * as api from "../api";

export const getAllFlights = async ({ commit }: { commit: Commit }) => {
  try {
    commit("setLoadingStatus", true);
    const flights = await api.getAllFlights();
    commit("setAllFlights", flights);
    commit("setLoadingStatus", false);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getFlightById = async (
  { commit }: { commit: Commit },
  params: { flightId: string }
) => {
  try {
    commit("setLoadingStatus", true);
    const flight = await api.getFlightById(params.flightId);
    commit("setFlight", flight);
    commit("setLoadingStatus", false);
  } catch (e) {
    console.log(e);
    throw e;
  }
};
