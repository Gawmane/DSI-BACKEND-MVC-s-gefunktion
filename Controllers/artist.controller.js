import ArtistModel from "../Models/artist.model.js";
const model = new ArtistModel();

class ArtistController {
    constructor() {
            console.log('class artist controller is loaded');
        }
        //Kalder model list
    list = async(req, res) => {
            const result = await model.list(req, res);
            res.json(result)

        }
        //Kalder model get
    get = async(req, res) => {
        const result = await model.get(req, res);
        res.json(result)

    }
    create = async(req, res) => {
        const result = await model.create(req, res);
        res.json(result)

    }
    update = async(req, res) => {
        const result = await model.update(req, res);
        res.json(result)

    }
    delete = async(req, res) => {
        const result = await model.delete(req, res);
        res.json(result)

    }
}

export default ArtistController;