"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const dynamoose = require('dynamoose');
/*route imports*/
const courseRoutes_1 = __importDefault(require("./routes/courseRoutes"));
dotenv.config();
const isProduction = process.env.NODE_ENV === 'production';
if (!isProduction) {
    console.log("Using AWS DynamoDB (cloud) in development");
    dynamoose.aws.ddb.local();
}
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('common'));
/* ROUTES */
app.get("/", (req, res) => {
    res.send("Server is running");
});
app.use("/courses", courseRoutes_1.default);
/*server*/
const PORT = process.env.PORT || 3000;
if (!isProduction) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
module.exports = app;
//# sourceMappingURL=index.js.map