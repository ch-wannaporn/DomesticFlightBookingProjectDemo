import { Request, Response, Router } from "express";
import flightModel, { IFlight } from "../models/flight.model";

const router = Router();

router.get("/", async (_: Request, res: Response): Promise<void> => {
  const flights: IFlight[] = await flightModel.getAllFlights();
  res.send(flights);
});

export default router;
