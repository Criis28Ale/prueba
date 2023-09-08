const app = require("./config/server");
require("./app/routes/login")(app);

app.listen(app.get("port"),
() => console.log(`Escuchando en servidor puerto : ${app.get("port")}`));

