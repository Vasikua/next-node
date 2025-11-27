"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const dynamoose = require('dynamoose');
dotenv.config();
const isProduction = process.env.NODE_ENV === 'production';
if (isProduction) {
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
/*server*/
const PORT = process.env.PORT || 3000;
if (!isProduction) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
module.exports = app;
//# sourceMappingURL=index.js.map