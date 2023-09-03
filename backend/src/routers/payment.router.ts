import { Response, Router } from "express";
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

router.post("/create", async (_, res: Response): Promise<void> => {
  try {
    const token: Omise.Tokens.IToken = await createToken({
      card: {
        name: "JOHN DOE",
        city: "Bangkok",
        postal_code: 10320,
        number: "4242424242424242",
        expiration_month: 2,
        expiration_year: 2027,
        security_code: "123",
      },
    });
    const charge: Omise.Charges.ICharge = await omise.charges.create({
      description: "Charge for order ID: 888",
      amount: 330000,
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
