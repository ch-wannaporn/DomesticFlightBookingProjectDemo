import { ICity, IFlight } from "../interfaces/index";
import axios from "axios";

export const getAllCities = async (): Promise<ICity[]> => {
  const response = await axios.get<ICity[]>(
    `${process.env.VUE_APP_API_URL}/city`
  );
  return response.data;
};

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
