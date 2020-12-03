const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/elbolichedenico',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

console.log("mnmnmnmnmnmn Connected to MongoDB mnmnmnmnmnmn");

module.exports = mongoose