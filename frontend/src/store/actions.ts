import { Commit } from "vuex";
import * as api from "../api";
import { Payment, Search } from "@/classes";
import { IBooking, ICity, IFlight } from "@/types";

export const getAllCities = async ({
  commit,
}: {
  commit: Commit;
}): Promise<void> => {
  try {
    commit("setLoadingStatus", true);
    const cities: ICity[] = await api.getAllCities();
    commit("setAllCities", cities);
    commit("setLoadingStatus", false);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getAllFlights = async (
  { commit }: { commit: Commit },
  params?: Search
): Promise<void> => {
  try {
    commit("setLoadingStatus", true);
    const flights: IFlight[] = await api.getAllFlights(params);
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
): Promise<void> => {
  try {
    commit("setLoadingStatus", true);
    const flight: IFlight = await api.getFlightById(params.flightId);
    commit("setFlight", flight);
    commit("setLoadingStatus", false);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const createBooking = async (
  { commit }: { commit: Commit },
  params: IBooking
): Promise<IBooking> => {
  try {
    commit("setLoadingStatus", true);
    const booking: IBooking = await api.createBooking(params);
    commit("setBooking", booking);
    commit("setLoadingStatus", false);
    return booking;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const createPayment = async (
  { commit }: { commit: Commit },
  params: Payment
) => {
  try {
    commit("setLoadingStatus", true);
    await api.createPayment(params);
    commit("setLoadingStatus", false);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
