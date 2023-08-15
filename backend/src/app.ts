import express from "express";

import flightRouter from "./routers/flight.router";

const app = express();
const port = 3000;

app.use("/flight", flightRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
