import qrcode from "qrcode";
import { IBooking } from "../models/booking.model";
import { IFlight } from "../models/flight.model";

export const generateQr = async (
  booking: IBooking,
  flight: IFlight
): Promise<string> => {
  var str = `Flight ID: ${flight._id}\n
  from: ${flight.from.airport}, ${flight.from.city}\n
  to: ${flight.to.airport}, ${flight.to.city}\n
  datetime: ${new Date(flight.from.date).toLocaleString()} - ${new Date(
    flight.to.date
  ).toLocaleString()}
  Passengers Information\n`;
  booking.passengers.forEach((passenger, index) => {
    str.concat(`${index + 1}. ${passenger.firstName} ${passenger.lastName}\n
    Date of Birth: ${new Date(passenger.dateOfBirth).toDateString()}\n
    Passport No.: ${passenger.passportNo}\n
    `);
  });
  const qrCodeDataUrl = await qrcode.toDataURL(str);
  return qrCodeDataUrl;
};
