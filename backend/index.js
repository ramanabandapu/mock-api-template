const express = require("express")
const {userController} = require("./routes/user.routes")
const {connection} = require("./config/db")
const {authentication} = require("./middlewares/authentication")
const {bmiController} = require("./routes/bmi.routes")
const cors = require("cors")

const app = express();
const PORT = 8080
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Home page")
})

app.use(cors())

app.use("/user", userController)


app.use(authentication) 
app.use("/bmi", bmiController)


app.listen(PORT,async () => {
    try{
        await connection;
        console.log("Connected to db")
    }
    catch(err){
        console.log("Error connnecting to DB")
        console.log(err)
    }
    console.log(`listening on PORT ${PORT}`)
})