const axios = require("axios");

module.exports = {
    name: "s/:code",

    run: async (req, res) => {
      const array = (await axios.get("https://serversmp-api.herokuapp.com/api/shorten/list")).data.data;

      let result = array.filter(item => item.Code === req.params.code);

      if (result.length > 0) res.redirect(result[0].Url);
      else res.status(404).render("404.ejs");
    }
}