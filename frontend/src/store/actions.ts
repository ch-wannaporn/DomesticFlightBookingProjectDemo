import { Commit } from "vuex";
import * as api from "../api";

export const getAllCities = async ({ commit }: { commit: Commit }) => {
  try {
    commit("setLoadingStatus", true);
    const cities = await api.getAllCities();
    commit("setAllCities", cities);
    commit("setLoadingStatus", false);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getAllFlights = async (
  { commit }: { commit: Commit },
  params?: {
    from?: string;
    to?: string;
    date?: Date;
    passengers?: number;
    minPrice?: number;
    maxPrice?: number;
  }
) => {
  try {
    commit("setLoadingStatus", true);
    const flights = await api.getAllFlights();
    commit("setAllFlights", flights);
    commit("setLoadingStatus", false);
  } catch (e) {
    console.error(e);
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
    console.error(e);
    throw e;
  }
};
