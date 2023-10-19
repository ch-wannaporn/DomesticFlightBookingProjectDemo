import { Schema, model, Types } from "mongoose";
import { Collection } from "./index.model";
import { getEndOfDay, getStartOfDay } from "../helpers/date";
import { getPriceQuery } from "../helpers/price";
import { IBooking } from "./booking.model";

export type Setting = {
  city: string;
  airport: string;
  date: Date;
};

export type IFlight = {
  airline: string;
  from: Setting;
  to: Setting;
  price: number;
  tickets: number;
};

const flightSchema = new Schema<IFlight>(
  {
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
  },
  { versionKey: false }
);

export const Flights = model<IFlight>(Collection.FLIGHTS, flightSchema);

const getAllFlights = async (params?: {
  from?: string;
  to?: string;
  date?: Date;
  passengers?: number;
  price?: string;
}): Promise<IFlight[]> => {
  try {
    const flights = await Flights.aggregate<IFlight>([
      {
        $match: {
          ...(params.from && {
            "from.cityId": new Types.ObjectId(params.from),
          }),
          ...(params.to && {
            "to.cityId": new Types.ObjectId(params.to),
          }),
          ...(params.date && {
            $or: [
              {
                "from.date": {
                  $gte: getStartOfDay(params.date),
                  $lte: getEndOfDay(params.date),
                },
              },
              {
                "to.date": {
                  $gte: getStartOfDay(params.date),
                  $lte: getEndOfDay(params.date),
                },
              },
            ],
          }),
          ...(params.price && getPriceQuery(params.price)),
          ...(params.passengers && { ticket: { $gte: params.passengers } }),
          tickets: { $ne: 0 },
        },
      },
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

const getFlightById = async (flightId: string): Promise<IFlight> => {
  try {
    const flight = await Flights.aggregate<IFlight>([
      {
        $match: {
          _id: new Types.ObjectId(flightId),
          tickets: { $ne: 0 },
        },
      },
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

    return flight[0];
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const buyTickets = async (booking: IBooking): Promise<void> => {
  try {
    const updatedFlight = await Flights.updateOne<IFlight>(
      {
        _id: booking.flightId,
        tickets: { $gte: 100000000 },
      },
      {
        $inc: { tickets: -booking.passengers.length },
      }
    );
    if (updatedFlight.modifiedCount <= 0) {
      throw new Error("There is no available seat.");
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default {
  getAllFlights,
  getFlightById,
  buyTickets,
};
