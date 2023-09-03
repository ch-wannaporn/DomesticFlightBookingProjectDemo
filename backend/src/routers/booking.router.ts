import { Request, Response, Router } from "express";
import bookingModel, { IBooking } from "../models/booking.model";

const router = Router();

router.post("/create", async (req: Request, res: Response): Promise<void> => {
  const booking: IBooking = await bookingModel.createBooking(req.body);
  res.send(booking);
});

export default router;
