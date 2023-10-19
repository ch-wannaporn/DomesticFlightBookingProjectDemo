import { Schema, model, Types, ObjectId } from "mongoose";
import { Collection } from "./index.model";

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
  _id?: ObjectId;
  email: string;
  flightId: ObjectId;
  paymentId: string;
  price: number;
  passengers: IPassenger[];
  status: Status;
};

const bookingSchema = new Schema<IBooking>(
  {
    email: { type: String, required: true },
    flightId: { type: Schema.Types.ObjectId, required: true },
    paymentId: { type: String },
    price: { type: Number, required: true },
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
    status: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Bookings = model<IBooking>(Collection.BOOKINGS, bookingSchema);

const getBookingById = async (bookingId: string) => {
  try {
    const booking = await Bookings.findById<IBooking>(bookingId);
    return booking;
  } catch (e) {}
};

const createBooking = async (booking: IBooking): Promise<IBooking> => {
  try {
    const newBooking = new Bookings(booking);
    await newBooking.validate();
    const savedBooking = await newBooking.save();
    return savedBooking;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const updatePaymentIdToBooking = async (params: {
  paymentId: string;
  bookingId: ObjectId;
  status: boolean;
}): Promise<IBooking> => {
  try {
    await Bookings.updateOne<IBooking>(
      { _id: params.bookingId },
      {
        paymentId: params.paymentId,
        status: params.status ? Status.PAYMENT_PAID : Status.PAYMENT_FAILED,
      }
    );
    const booking = await getBookingById(String(params.bookingId));
    return booking;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default {
  getBookingById,
  createBooking,
  updatePaymentIdToBooking,
};
