import { Response, Router } from "express";
import Omise from "omise";

const router = Router();

const omise = Omise({
  secretKey: "skey_test_5wzen7p45by9gr78t1l",
});

router.post("/create", async (_, res: Response) => {
  try {
    const charge = await omise.charges.create({
      description: "Charge for order ID: 888",
      amount: 123400,
      currency: "thb",
      capture: false,
      card: process.env.OMISE_TOKEN_ID,
    });
    res.send(charge);
  } catch (e) {
    console.error(e);
    throw e;
  }
});

export default router;
