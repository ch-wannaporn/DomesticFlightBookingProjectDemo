import { Schema, model, connect, Types } from "mongoose";
import { Collection } from "./index.model";
import Omise from "omise";

enum Status {
  WAITING_FOR_PAYMENT = "pending",
  PAYMENT_PAID = "paid",
  PAYMENT_FAILED = "failed",
}

export type IPassenger = {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  passportNo: string;
};

export type IBooking = {
  flightId: Types.ObjectId;
  passengers: IPassenger[];
  payment: Omise.Charges.ICharge;
  status: Status;
};

const bookingSchema = new Schema<IBooking>(
  {
    flightId: { type: Schema.Types.ObjectId, required: true },
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
    status: {
      type: String,
    },
  },
  { versionKey: false }
);

const Bookings = model<IBooking>(Collection.BOOKINGS, bookingSchema);

const createBooking = async (booking: IBooking): Promise<IBooking> => {
  try {
    await connect(process.env.MONGODB_URI);
    const newBooking = new Bookings(booking);
    await newBooking.validate();
    const savedBooking = await newBooking.save();
    // await Flights.updateOne(
    //   {
    //     _id: new Types.ObjectId(savedBooking.flightId),
    //   },
    //   {
    //     $inc: {
    //       tickets: -savedBooking.passengers.length,
    //     },
    //   }
    // );
    return savedBooking;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default {
  createBooking,
};
