import { ICity, IFlight } from "@/types";
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

export const flight = (state: IState): IFlight | undefined => {
  return state.flight;
};

export const passengers = (state: IState): Passenger[] => {
  return state.passengers;
};
