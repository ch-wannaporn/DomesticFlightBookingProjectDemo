"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
const home_controller_1 = __importDefault(require("./controllers/home.controller"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static("public"));
app.set("view engine", "ejs");
app.use(express_ejs_layouts_1.default);
app.set("layout", "components/layout");
app.use("/", home_controller_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map