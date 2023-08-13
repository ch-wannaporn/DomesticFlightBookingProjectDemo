import { Request, Response, Router } from "express";
import { get } from "../models/flight.model";

const router = Router();

const home = (req: Request, res: Response) => {
  console.log("hi");
  get();
  res.render("home");
};

router.get("/", home);

export default router;
