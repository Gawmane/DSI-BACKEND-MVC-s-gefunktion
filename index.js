import express from 'express';
import dotenv from 'dotenv';
import { router as SongRouter } from './Routes/song.router.js';
import { router as ArtistRouter } from './Routes/artist.router.js';
import { router as BrugerRouter } from './Routes/bruger.router.js';





//Kalder en environment vars
dotenv.config();

const port = process.env.PORT || 3030

const app = new express();
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())

app.use(SongRouter);
app.use(ArtistRouter);
app.use(BrugerRouter);




app.listen(port, () => {
    console.log(`Server køre på port http://localhost:${port}`);
})