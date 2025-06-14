"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./modules/routes");
const db_1 = __importDefault(require("./modules/db"));
const PORT = 3000;
const app = (0, express_1.default)();
process.on('SIGINT', () => db_1.default.close());
process.on('SIGTERM', () => db_1.default.close());
app.use('/api', routes_1.appRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
