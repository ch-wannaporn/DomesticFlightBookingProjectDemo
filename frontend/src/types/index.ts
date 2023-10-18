import { Passenger } from "@/classes";

export type ICity = {
  _id: string;
  name: string;
};

export type Setting = {
  city: string;
  airport: string;
  date: Date;
};

export type IFlight = {
  _id: string;
  airline: string;
  from: Setting;
  to: Setting;
  price: number;
  tickets: number;
};

export enum Status {
  WAITING_FOR_PAYMENT = "pending",
  PAYMENT_PAID = "paid",
  PAYMENT_FAILED = "failed",
}

export type IBooking = {
  _id?: string;
  flightId: string;
  price: number;
  passengers: Passenger[];
  status: Status;
};
