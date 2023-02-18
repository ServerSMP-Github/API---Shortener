const shorten = require("../models/shorten");

module.exports = {
  name: "s/:id",

  run: async (req, res) => {
    const { id } = req.params;

    let getShorten;
    try {
        getShorten = await shorten.findById(id);
    } catch (e) {
        return res.render("404.ejs", { url: global.config.url.web });
    }

    getShorten.count++;
    await getShorten.save();

    const { redirect } = getShorten;

    res.redirect(redirect);
  }
}