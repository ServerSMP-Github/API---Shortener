// <=================> Packages <=================>

const app = require('express')();

global.config = require('./settings.json');

// <=================> MongoDB <=================>

const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

mongoose.connect(global.config.database.mongodb);

// <=================> Favicon <=================>

app.use(require('serve-favicon')(`${__dirname}/icon.ico`));

// <=================> Compression <=================>

app.use(require('compression')());

// <=================> Request Logging <=================>

app.use(require('@popovmp/req-log').reqLog());

// <=================> Allow fetch <=================>

app.use(require('cors')({ origin: "*" }));

// <=================> Make json look better <=================>

app.set("json spaces", 1);

// <=================> Mainpage <=================>

app.get('/', (req, res) => {
  res.render("index.ejs", {
    url: global.config.url.web,
    codebin: global.config.default.codebin,
    shorten: global.config.default.shorten
  });
});

// <=================> Handeler <=================>

require("./routes")(app);

// <=================> Start <=================>

app.listen(3000, () => console.log('server started'));