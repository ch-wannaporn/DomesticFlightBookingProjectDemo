import { IFlight } from "@/interfaces";
import { IState } from ".";

export const setLoadingStatus = (state: IState, status: boolean) => {
  state.loadingStatus = status;
};

export const setAllFlights = (state: IState, flights: IFlight[]) => {
  state.flights = flights;
};
