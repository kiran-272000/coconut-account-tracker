const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./Route/app");
const port = process.env.PORT;

app.listen(port, function () {
  //   console.log("Server Listening to the Port " + port);
  console.log(`Server Listening to the Port ${port}`);
});
