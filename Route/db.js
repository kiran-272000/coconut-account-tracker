var mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://kiran:vvrY9xmXCscjT6y4@cluster0.k4kro.mongodb.net/coconut?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("db connected Sucessfully");
  });
