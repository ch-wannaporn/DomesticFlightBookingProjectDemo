import { Request, Response, Router } from "express";
import Omise from "omise";
import bookingModel, { IBooking } from "../models/booking.model";
import flightModel from "../models/flight.model";

const router = Router();

const omise = Omise({
  publicKey: "pkey_test_5wzfpzvmx7xltfm897c",
  secretKey: "skey_test_5wzen7p45by9gr78t1l",
});

const createToken = async (
  options: Omise.Tokens.IRequest
): Promise<Omise.Tokens.IToken> => {
  const token: Omise.Tokens.IToken = await omise.tokens.create(options);
  return token;
};

router.post("/pay", async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, card, month, year, code, bookingId } = req.body;

    const booking: IBooking = await bookingModel.getBookingById(bookingId);

    await flightModel.buyTickets(booking);

    const token: Omise.Tokens.IToken = await createToken({
      card: {
        name: name,
        city: process.env.OMISE_CITY,
        postal_code: process.env.OMISE_POSTAL_CODE,
        number: card,
        expiration_month: month,
        expiration_year: year,
        security_code: code,
      },
    });
    let charge: Omise.Charges.ICharge = await omise.charges.create({
      description: `Charge for booking ID: ${booking._id}`,
      amount: booking.price * 100,
      currency: "thb",
      capture: false,
      card: token.id,
    });
    charge = await omise.charges.capture(charge.id);

    const updatedbooking: IBooking =
      await bookingModel.updatePaymentIdToBooking({
        paymentId: charge.id,
        bookingId: booking._id,
        status: charge.paid,
      });

    res.send(updatedbooking);
  } catch (e) {
    console.error(e);
    throw e;
  }
});

export default router;
