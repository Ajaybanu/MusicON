const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/musicon", { useNewurlParser: true, useUnfiedTopology: true });
var db = mongoose.connect;
db.on("error", function (error) { console.log(error); });
db.once('open', () => { console.log("connected to database"); });
