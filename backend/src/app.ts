import express from "express";
import expressLayouts from "express-ejs-layouts";

import HomeController from "./controllers/home.controller";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "components/layout");

app.use("/", HomeController);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
