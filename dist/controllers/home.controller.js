"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const home = (req, res) => {
    res.render("home");
};
router.get('/', home);
exports.default = router;
//# sourceMappingURL=home.controller.js.map