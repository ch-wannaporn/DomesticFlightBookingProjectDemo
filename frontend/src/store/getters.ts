import { IState } from ".";

export const loadingStatus = (state: IState) => {
  return state.loadingStatus;
};

export const cities = (state: IState) => {
  return state.cities;
};

export const flights = (state: IState) => {
  return state.flights;
};

export const flight = (state: IState) => {
  return state.flight;
};

export const searchValues = (state: IState) => {
  return state.searchValues;
};
