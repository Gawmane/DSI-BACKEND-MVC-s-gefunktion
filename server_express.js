import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

//Sender dig til forsiden
app.get('/', (req, res) => {
        res.send('Velkommen til forsiden');
    })
    //Sender til about side
app.get('/about', (req, res) => {
        res.send('Om os');
    })
    //Sender til kontakt side
app.get('/kontakt', (req, res) => {
    res.send('Kontakt os her');
})
app.use((req, res, next) => {
    res.status(404).send(
        "<h1> Page not found on the server </h1>"
    )
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})