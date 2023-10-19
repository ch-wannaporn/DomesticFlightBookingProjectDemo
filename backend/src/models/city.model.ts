import { Schema, model, connect } from "mongoose";
import { Collection } from "./index.model";

export type ICity = {
  name: string;
};

const citySchema = new Schema<ICity>(
  {
    name: { type: String, required: true },
  },
  { versionKey: false }
);

const Cities = model<ICity>(Collection.CITIES, citySchema);

const getAllCities = async (): Promise<ICity[]> => {
  try {
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
