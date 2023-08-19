import { IFlight } from "../interfaces/index";
import axios from "axios";

export const getAllFlights = async (): Promise<IFlight[]> => {
  const response = await axios.get<IFlight[]>("http://localhost:3000/flight");
  return response.data;
};
