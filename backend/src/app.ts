import express from "express";
import cors from "cors";

import flightRouter from "./routers/flight.router";

const app = express();
const port = 3000;

app.use(cors());

app.use("/flight", flightRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
