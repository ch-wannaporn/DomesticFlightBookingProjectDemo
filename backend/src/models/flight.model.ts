import { Schema, model, connect } from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

export type Setting = {
  city: string;
  airport: string;
  date: Date;
};

export interface IFlight {
  airline: string;
  from: Setting;
  to: Setting;
  price: number;
  tickets: number;
}

const flightSchema = new Schema<IFlight>({
  airline: { type: String, required: true },
  from: {
    type: {
      city: String,
      airport: String,
      date: Date,
    },
    required: true,
  },
  to: {
    type: {
      city: String,
      airport: String,
      date: Date,
    },
    required: true,
  },
  price: { type: Number, required: true },
  tickets: { type: Number, required: true },
});

const Flight = model<IFlight>("flight", flightSchema);

const find = async (): Promise<IFlight[]> => {
  try {
    await connect(process.env.DB_URI);
    const flights = await Flight.find<IFlight>({});
    return flights;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default {
  find,
};
