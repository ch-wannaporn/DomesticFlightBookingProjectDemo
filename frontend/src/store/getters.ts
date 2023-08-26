import { IState } from ".";

export const loadingStatus = (state: IState) => {
  return state.loadingStatus;
};

export const flights = (state: IState) => {
  return state.flights;
};

export const flight = (state: IState) => {
  return state.flight;
};
