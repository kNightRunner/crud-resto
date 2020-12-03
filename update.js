const dbConnect = require("./connection.js");
const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("listening on 3000 port");
});
//Las tablas en MONGO en plural
const dish = dbConnect.model("dishes", {
  dish: String,
  type: String,
  price: Number,
});

// app.put("/escritores/:id",updateValidator, (req, res,next) => {
//   autor[req.index].apellido = req.body.apellido
//   autor[req.index].nombre = req.body.nombre
//   autor[req.index].fechaDeNacimiento = req.body.fechaDeNacimiento
//   res.status(200).json({ status: "ok", mensaje: "Autor Modificado" });  
//   });


app.put("/elbolichedenico/:id", async (request, response) => {
  try {
      var newDish = await dish.findById(request.body._id).exec();
      newDish.set(request.body);
      var result = await newDish.save();
      response.send(result);
  } catch (error) {
      response.status(500).send(error);
  }
});

// app.post("/elbolichedenico", async (request, response) => {
//   try {
//       var newDish = new dish(request.body);
//       var result = await newDish.save();
//       //response.send(result);
//         response.status(201).json({status: "ok", mensaje:"Menu Agregado"})
//     } catch (error) {
//       response.status(500).send(error);
//   }
// });

// //Primero busco el registro, luego updateo los campos
// dish
//   .findOne({ dish: "Asado con Provoleta" })
//   .then(function (result) {
//     result.dish = "Tira de Asado con empanada criolla";
//     result.type = "Para compartir";
//     result.price = 800;
//     result.save().then((res) => console.log(res));
//   })
//   .catch((error) => console.log("****Not Record Available to UPDATE***"));

//   console.log("mnmnmnmnmnmn UPDATE mnmnmnmnmnmn");

