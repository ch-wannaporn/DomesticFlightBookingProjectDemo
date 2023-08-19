export type Setting = {
  city: string;
  airport: string;
  date: Date;
};

export interface IFlight {
  _id: string;
  airline: string;
  from: Setting;
  to: Setting;
  price: number;
  tickets: number;
}
