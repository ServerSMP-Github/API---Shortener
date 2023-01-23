const axios = require("axios");

module.exports = {
  name: "s/:code",

  run: async (req, res) => {
    const array = (await axios.get(`${global.config.url}/api/shorten/list`)).data;

    let result = array.v1.filter(item => item.Code === req.params.code);
    if (result.length === 0) result = array.v2.filter(item => item._id === req.params.code);

    if (result.length > 0) res.redirect(result[0].Url);
    else res.status(404).render("404.ejs");
  }
}