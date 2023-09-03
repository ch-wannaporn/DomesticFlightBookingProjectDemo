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
