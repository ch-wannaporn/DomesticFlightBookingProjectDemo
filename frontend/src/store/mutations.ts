import { IFlight } from "@/interfaces";
import { IState } from ".";

export const setAllFlights = (state: IState, flights: IFlight[]) => {
  state.flights = flights;
};
