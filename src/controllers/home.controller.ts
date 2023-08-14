import { Request, Response, Router } from "express";
import { IFlight, getFlights } from "../models/flight.model";

const router = Router();

const home = async (req: Request, res: Response): Promise<void> => {
  const flights: IFlight[] = await getFlights();
  res.render("home", { flights });
};

router.get("/", home);

export default router;
