const {Router} = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const {BmiModel} = require("../models/Bmi.model")

const bmiController = Router();


bmiController.get("/getProfile", async (req, res) => {
    const {tag} = req.query
    const bmi = await BmiModel.find({userId : req.body.userId, tag})
    res.send(bmi)
})


bmiController.post("/calculateBMI", async (req, res) => {
    const { Bmi} = req.body;
    const bmi = new BmiModel({
        Bmi
    })
    try{
        await bmi.save()
        res.send("bmi saved")
    }
    catch(err){
        console.log(err)
        res.send("something went wrong")
    }
})


module.exports = {
    bmiController
}