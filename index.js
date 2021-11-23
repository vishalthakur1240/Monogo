const express = require('express');

const connectDB = require('./conn');
const peopleModel = require('./schema');

const app = express();
const port = 3000;

app.use(express.json()); // use to understand JSON

app.get('/', (req, res) => {
    res.send('hello');
})

    // METH-1
// app.post('/people', (req, res) => {
//     console.log(req.body);
//     const user =  new peopleModel(req.body);
//     user.save().then(() => {
//         res.send(user);
//     }).catch((e) => {
//         res.send(e);
//     })
// })

    // METH-2
app.post("/people", async (req, res) => {
    try {
        await peopleModel.create(req.body);
        return res.status(201).json({ message: "user Created" });
    } catch (error) {
        console.log("Error => ", error);
        return res.status(400).json({ message: "user Not Created" });
    }    
})

app.listen(port, () =>
    connectDB()
        .then((data) => console.log(`Listeningggggggggggggg to the port no: ${port} and Database connected.`))
        .catch((error) => console.log(error))
);