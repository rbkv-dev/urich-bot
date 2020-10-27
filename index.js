const app = require("express")();
const packageInfo = require("./package.json");
const PORT = process.env.PORT || 8080;

app.get("/", function (req, res) {
  res.json({
    name: packageInfo.name,
    description: packageInfo.description,
    version: packageInfo.version,
    author: packageInfo.author,
    hello: "from heroku",
  });
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
