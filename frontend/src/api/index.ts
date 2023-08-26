import { IFlight } from "../interfaces/index";
import axios from "axios";

export const getAllFlights = async (): Promise<IFlight[]> => {
  const response = await axios.get<IFlight[]>(
    `${process.env.VUE_APP_API_URL}/flight`
  );
  return response.data;
};

export const getFlightById = async (flightId: string): Promise<IFlight> => {
  const response = await axios.get<IFlight>(
    `${process.env.VUE_APP_API_URL}/flight/${flightId}`
  );
  return response.data;
};
