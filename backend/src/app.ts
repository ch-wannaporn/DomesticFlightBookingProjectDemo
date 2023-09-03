import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import flightRouter from "./routers/flight.router";
import cityRouter from "./routers/city.router";
import paymentRouter from "./routers/payment.router";

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());

app.use("/flight", flightRouter);
app.use("/city", cityRouter);
app.use("/payment", paymentRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
