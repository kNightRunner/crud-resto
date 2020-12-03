const dbConnect = require("./connection.js");
const express = require("express");
const app = express();


app.use(express.json());

app.listen(3000, function () {
  console.log("listening on 3000 port");
});

const dish = dbConnect.model("dishes", {
  dish: String,
  type: String,
  price: Number,
});

app.post("/elbolichedenico", async (request, response) => {
  try {
      var newDish = new dish(request.body);
      var result = await newDish.save();
      //response.send(result);
        response.status(201).json({status: "ok", mensaje:"Menu Agregado"})
    } catch (error) {
      response.status(500).send(error);
  }
});



// app.post("/elbolichedenico", (req, res) => {
//   req.body.id = dish.length + 1;
//   dish.push(req.body);
//   res.status(201).json({ status: "ok", mensaje: "Menu Agregado" });
// });




// // let newDish = {
// //     dish: "Asado con Provoleta",
// //     type: "Para compartir (comen 2, pican 3)",
// //     price: 1050,
// // }

// const insertDish = new dish (newDish)

// insertDish.save()
// .then(res => console.log ("Sucessful Save: " + res))
// .catch(err => console.log( "Insert fail: " + err))


// dish.find().then(function (result) {
//   console.log(result);
//   console.log("mnmnmnmnmnmn INSERT mnmnmnmnmnmn");
// });