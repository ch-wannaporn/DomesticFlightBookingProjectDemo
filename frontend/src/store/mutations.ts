import { ICity, IFlight } from "@/interfaces";
import { IState } from ".";
import { Search } from "@/classes";

export const setLoadingStatus = (state: IState, status: boolean) => {
  state.loadingStatus = status;
};

export const setAllCities = (state: IState, cities: ICity[]) => {
  state.cities = cities;
};

export const setAllFlights = (state: IState, flights: IFlight[]) => {
  state.flights = flights;
};

export const setFlight = (state: IState, flight: IFlight) => {
  state.flight = flight;
};
