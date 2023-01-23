// <=================> Packages <=================>

const express = require('express');
const app = express();

global.config = require('./config.json');

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

// <=================> Mainpage <=================>

app.get('/', (req, res) => {
  res.render("index.ejs", {
    url: global.config.url
  });
});

// <=================> Handeler <=================>

require("./routes")(app);

// <=================> Start <=================>

app.listen(3000, () => {
  console.log('server started');
});