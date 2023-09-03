import { Schema, model, connect, Types } from "mongoose";
import { Collection } from "./index.model";
import { IFlight, flightSchema } from "./flight.model";
import Omise from "omise";

export type IPassenger = {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  passportNo: string;
};

export type IBooking = {
  flight: IFlight;
  passengers: IPassenger[];
  payment: Omise.Charges.ICharge;
};

const bookingSchema = new Schema<IBooking>({
  flight: { type: flightSchema, required: true },
  passengers: {
    type: [
      {
        firstName: String,
        lastName: String,
        dateOfBirth: Date,
        passportNo: String,
      },
    ],
    required: true,
  },
  payment: {
    type: Schema.Types.Mixed,
  },
});

const Bookings = model<IBooking>(Collection.CITIES, bookingSchema);

export default {};
