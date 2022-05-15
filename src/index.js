const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Mohdjafar:Acu5dzePFe31VRQE@cluster0.lim8w.mongodb.net/opentToInternProject")
    .then(() => console.log('mongodb is connected'))
    .catch(err => console.log(err))

app.use('/functionup', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});


