const dbConnect = require("./connection.js");
const express = require("express");
const app = express();

app.use(express.json());


app.listen(3000, function () {
  console.log("listening on 3000 port");
});
//Las tablas en MONGO en plural
const dish = dbConnect.model("dishes", {
  dish: String,
  type: String,
  price: Number,
});


app.get("/elbolichedenico", function (req, res) {
  dish.find().then(function (result) {
    console.log(result);
    res.send(result)
    console.log("mnmnmnmnmnmn READ mnmnmnmnmnmn");
  });
  
});


// dish.find().then(function (result) {
//   console.log(result);

//   console.log("mnmnmnmnmnmn READ mnmnmnmnmnmn");
// });
