const document = require("../models/codebin");

module.exports = {
  name: "c/:id",

  run: async (req, res) => {
    const { id } = req.params;

    let getBin;
    try {
        getBin = await document.findById(id);
    } catch (e) {
        return res.render("404.ejs", { url: global.config.url.web });
    }

    getBin.count++;
    await getBin.save();

    const { content, safeContent, type, count } = getBin;

    if (type === "md_render") return res.render("codebin/render.ejs", {
      url: global.config.url.api,
      id,
      content,
      safeContent,
      type,
      count
    });

    res.render("codebin/view.ejs", {
      url: global.config.url.api,
      id,
      content,
      safeContent,
      type,
      count
    });
  }
}