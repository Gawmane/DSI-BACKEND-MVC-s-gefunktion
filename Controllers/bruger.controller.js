import BrugerModel from "../Models/bruger.model.js";
const model = new BrugerModel();

class BrugerController {
    constructor() {
            console.log('class bruger controller is loaded');
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
        //Kalder med create (post)
    create = async(req, res) => {
            const result = await model.create(req, res);
            res.json(result)

        }
        //Kalder med update (put)
    update = async(req, res) => {
            const result = await model.update(req, res);
            res.json(result)

        }
        //Kalder delete 
    delete = async(req, res) => {
            const result = await model.delete(req, res);
            res.json(result)

        }
        //Kalder search som er en get
    search = async(req, res) => {
        const result = await model.seacrh(req, res)
        res.json(result)
    }
}

export default BrugerController;