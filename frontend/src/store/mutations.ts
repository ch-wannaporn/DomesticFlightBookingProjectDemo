import { IBooking, ICity, IFlight } from "@/types";
import { IState } from ".";

export const setLoadingStatus = (state: IState, status: boolean): void => {
  state.loadingStatus = status;
};

export const setAllCities = (state: IState, cities: ICity[]): void => {
  state.cities = cities;
};

export const setAllFlights = (state: IState, flights: IFlight[]): void => {
  state.flights = flights;
};

export const setFlight = (state: IState, flight: IFlight): void => {
  state.flight = flight;
};

export const setBooking = (state: IState, booking: IBooking): void => {
  state.booking = booking;
};
