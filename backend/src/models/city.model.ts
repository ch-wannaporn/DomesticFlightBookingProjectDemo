import { Schema, model, connect, Types } from "mongoose";
import * as dotenv from "dotenv";
import { Collection } from "./index.model";

dotenv.config();

export interface ICity {
  name: string;
}

const citySchema = new Schema<ICity>({
  name: { type: String, required: true },
});

const Cities = model<ICity>(Collection.CITIES, citySchema);

const getAllCities = async (): Promise<ICity[]> => {
  try {
    await connect(process.env.DB_URI);
    const cities = Cities.find<ICity>({});

    return cities;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default {
  getAllCities,
};
