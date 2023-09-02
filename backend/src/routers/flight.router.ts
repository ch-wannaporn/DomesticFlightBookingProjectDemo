import { Request, Response, Router } from "express";
import flightModel, { IFlight } from "../models/flight.model";

const router = Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  const flights: IFlight[] = await flightModel.getAllFlights(req.query);
  res.send(flights);
});

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  const flight: IFlight = await flightModel.getFlightById(req.params.id);
  res.send(flight);
});

export default router;
