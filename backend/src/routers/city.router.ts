import { Request, Response, Router } from "express";
import cityModel, { ICity } from "../models/city.model";

const router = Router();

router.get("/", async (_: Request, res: Response): Promise<void> => {
  const cities: ICity[] = await cityModel.getAllCities();
  res.send(cities);
});

export default router;
