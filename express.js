const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./router');
const sequelize = require('sequelize');
const config = require('./config');

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

const db = new sequelize('cs-dashboard', 'codesmith', 'ilovetesting', {
  host: config.AWS_RDS,
  dialect: 'postgres'
});

app.listen(PORT, () => {
  console.log('Listening at PORT: ', PORT);
});