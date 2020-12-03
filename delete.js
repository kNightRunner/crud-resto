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

//Para borrar con varios filtros en la query
//dish.delete({dish:"Asado con Provoleta", price: 700}) 
dish.deleteOne({dish:"Asado con Provoleta1"}).then(resp => {
    console.log(resp)
})
   .catch((error) => console.log("****Not Record Available to DELETE***"));
//Si el registro no lo encuentra, no lo considera un error



  console.log("mnmnmnmnmnmn DELETE mnmnmnmnmnmn");

