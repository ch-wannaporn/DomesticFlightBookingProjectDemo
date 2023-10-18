import { Search } from "@/classes";
import { IBooking, ICity, IFlight } from "../types/index";
import axios from "axios";

const apiUrl = process.env.VUE_APP_API_URL;

export const getAllCities = async (): Promise<ICity[]> => {
  const response = await axios.get<ICity[]>(`${apiUrl}/city`);
  return response.data;
};

export const getAllFlights = async (params?: Search): Promise<IFlight[]> => {
  const response = await axios.get<IFlight[]>(`${apiUrl}/flight`, { params });
  return response.data;
};

export const getFlightById = async (flightId: string): Promise<IFlight> => {
  const response = await axios.get<IFlight>(`${apiUrl}/flight/${flightId}`);
  return response.data;
};

export const createBooking = async (booking: IBooking): Promise<IBooking> => {
  const response = await axios.post<IBooking>(
    `${apiUrl}/booking/create`,
    booking,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
