import { Request, Response, Router } from "express";
import Omise from "omise";

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
  console.log(req.body);
  try {
    const token: Omise.Tokens.IToken = await createToken({
      card: {
        name: req.body.name,
        city: "Bangkok",
        postal_code: 10260,
        number: req.body.card,
        expiration_month: req.body.month,
        expiration_year: req.body.year,
        security_code: req.body.code,
      },
    });
    const charge: Omise.Charges.ICharge = await omise.charges.create({
      description: "Charge for order ID: 888",
      amount: req.body.price * 100,
      currency: "thb",
      capture: false,
      card: token.id,
    });
    res.send(charge);
  } catch (e) {
    console.error(e);
    throw e;
  }
});

export default router;
