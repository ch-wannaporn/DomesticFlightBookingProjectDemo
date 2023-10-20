import qrcode from "qrcode";
import { IBooking } from "../models/booking.model";
import { IFlight } from "../models/flight.model";

export const generateQr = async (
  booking: IBooking,
  flight: IFlight
): Promise<string> => {
  var str = `Flight ID: ${flight._id}
  from: ${flight.from.airport}, ${flight.from.city}
  to: ${flight.to.airport}, ${flight.to.city}
  datetime: ${new Date(flight.from.date).toLocaleString()} - ${new Date(
    flight.to.date
  ).toLocaleString()}\n
  Passengers Information\n`;
  booking.passengers.forEach((passenger, index) => {
    str = str.concat(`${index + 1}. ${passenger.firstName} ${passenger.lastName}
    Date of Birth: ${new Date(passenger.dateOfBirth).toDateString()}
    Passport No.: ${passenger.passportNo}
    `);
  });
  const qrCodeDataUrl = await qrcode.toDataURL(str);
  return qrCodeDataUrl;
};
