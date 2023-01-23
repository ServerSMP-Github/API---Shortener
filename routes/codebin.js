const axios = require('axios');

module.exports = {
  name: "c/:code",

  run: async (req, res) => {
    const array = (await axios.get(`${global.config.url}/api/codebin/list`)).data.data;

    let result = array.filter(item => item.Code === req.params.code);

    if (result.length > 0) {
      const data = result[0];

      if (req.query.raw) {
        res.header("Content-Type", "text/plain");
        return res.send(data.Text);
      }

      res.render("codebin.ejs", {
        text: data.Text,
        id: data.Code,
        url: global.config.url,
      });
    } else res.status(404).render("404.ejs");
  }
}