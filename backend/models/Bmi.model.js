const mongoose = require("mongoose")


const bmiSchema = new mongoose.Schema({
    Height : {type : Number, required : true},
    Weight : {type : Number, required : true},
    Bmi: {type : Number, required : true}
})

const BmiModel = mongoose.model("bmi", bmiSchema)


module.exports = {
    BmiModel
}