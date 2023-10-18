import { IBooking, ICity, IFlight } from "@/types";
import { IState } from ".";
import { Passenger, Search } from "@/classes";

export const loadingStatus = (state: IState): boolean => {
  return state.loadingStatus;
};

export const searchValues = (state: IState): Search => {
  return state.searchValues;
};

export const cities = (state: IState): ICity[] => {
  return state.cities;
};

export const flights = (state: IState): IFlight[] => {
  return state.flights;
};

export const flight = (state: IState): IFlight => {
  if (!state.flight) {
    console.error("There is no flight selected.");
    throw new Error("There is no flight selected.");
  }
  return state.flight;
};

export const passengers = (state: IState): Passenger[] => {
  return state.passengers;
};

export const booking = (state: IState): IBooking => {
  if (!state.booking) {
    console.error("There is no booking saved.");
    throw new Error("There is no booking saved.");
  }
  return state.booking;
};
