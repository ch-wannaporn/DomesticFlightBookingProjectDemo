import { Schema, model, connect } from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

type Setting = {
  city: string;
  airport: string;
  date: Date;
};

interface IFlight {
  from: Setting;
  to: Setting;
  price: number;
  tickets: number;
}

const flightSchema = new Schema<IFlight>({
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

export async function get() {
  try {
    await connect(process.env.DB_URI);
    const flights = await Flight.find({});
    console.log(flights);
  } catch (e) {
    console.error(e);
    throw e;
  }
}
