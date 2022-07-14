// <=================> Packages <=================>

const express = require('express');
const app = express();

// <=================> Favicon <=================>

const favicon = require('serve-favicon');

app.use(favicon(`${__dirname}/icon.ico`));

// <=================> Compression <=================>

const compression = require('compression');

app.use(compression());

// <=================> Request Logging <=================>

const { reqLog } = require('@popovmp/req-log');

app.use(reqLog());

// <=================> Allow fetch <=================>

const cors = require('cors');

app.use(cors({
  origin: "*",
}));

// <=================> Make json look better <=================>

app.set("json spaces", 1);

// <=================> Parse x-www-form-urlencoded and json & xml <=================>

// <-----------> Parse application/json <----------->

app.use(express.json());

// <-----------> Parse application/x-www-form-urlencoded <----------->

app.use(express.urlencoded({ extended: false }));

// <=================> Mainpage <=================>

app.get('/', (req, res) => {
  res.status(200).render("index.ejs", {
    url: process.env.URL
  });
});

// <=================> Handeler <=================>

require("./routes")(app);

// <=================> Start <=================>

app.listen(3000, () => {
    console.log('server started');
});