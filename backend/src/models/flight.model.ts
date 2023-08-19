import { Schema, model, connect } from "mongoose";
import * as dotenv from "dotenv";
import { Collection } from "./index.model";

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

const Flights = model<IFlight>(Collection.FLIGHTS, flightSchema);

const getAllFlights = async (): Promise<IFlight[]> => {
  try {
    await connect(process.env.DB_URI);
    const flights = await Flights.aggregate<IFlight>([
      {
        $lookup: {
          from: Collection.AIRPORTS,
          localField: "from.airportId",
          foreignField: "_id",
          as: "from.airport",
        },
      },
      {
        $lookup: {
          from: Collection.AIRPORTS,
          localField: "to.airportId",
          foreignField: "_id",
          as: "to.airport",
        },
      },
      {
        $lookup: {
          from: Collection.CITIES,
          localField: "from.cityId",
          foreignField: "_id",
          as: "from.city",
        },
      },
      {
        $lookup: {
          from: Collection.CITIES,
          localField: "to.cityId",
          foreignField: "_id",
          as: "to.city",
        },
      },
      {
        $set: {
          "from.airport": { $arrayElemAt: ["$from.airport.name", 0] },
          "to.airport": { $arrayElemAt: ["$to.airport.name", 0] },
          "from.city": { $arrayElemAt: ["$from.city.name", 0] },
          "to.city": { $arrayElemAt: ["$to.city.name", 0] },
        },
      },
    ]);

    return flights;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default {
  getAllFlights,
};
