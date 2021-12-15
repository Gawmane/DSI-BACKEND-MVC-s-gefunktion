import db from '../Config/db.config.js';

class ArtistModel {
    constructor() {
            console.log('class artistmodel is loaded');
        }
        //Returner new promise 
    list = (req, res) => {
        return new Promise((resolve, reject) => {
            //Kommer der noget fra API
            const orderBy = req.query.orderBy || 'id';
            const limit = req.query.limit ? ` LIMIT ${req.query.limit}` : '';

            //Liste over artister
            let sql = `SELECT *
             FROM artist
              ORDER BY ${orderBy} ${limit} `;
            db.query(sql, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }

    get = (req, res) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT artist.name, song.title
            FROM artist 
            JOIN song
            ON song.artist_id = artist.id 
            
                 `;
            db.query(sql, [req.params.id], (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(...result)
                }
            })
        })
    }

    //Opret artist
    create = (req, res) => {
            return new Promise((resolve, reject) => {
                const arrFormValues = (Object.values(req.body));
                const sql = `INSERT INTO artist(name) 
        VALUES(?)`;
                db.query(sql, arrFormValues, (err, result) => {
                    if (err) {
                        return err
                    } else {
                        resolve({ status: "OK", id: result.insertId });
                    }
                })
            })
        }
        //opdater artister
    update = (req, res) => {
            return new Promise((resolve, reject) => {
                const arrFormValues = (Object.values(req.body));

                const sql = `UPDATE artist
            SET name = ?
            WHERE id = ?`;
                db.query(sql, arrFormValues, (err, result) => {
                    if (err) {
                        return err
                    } else {
                        resolve({ status: "OK", id: req.body.id });
                    }
                })
            })
        }
        //Slet artist
    delete = (req, res) => {
        return new Promise((resolve, reject) => {
            const arrFormValues = (Object.values(req.body));

            //Desc for at tage fra det sidste tal - altså nyeste tilføjelse
            //Limit 1 for kun at slette en og ikke alle på en gang
            const sql = `DELETE FROM artist 
            order by id desc 
             limit 1`;
            db.query(sql, arrFormValues, (err, result) => {
                if (err) {
                    return err
                } else {
                    resolve({ status: "OK" });
                }
            })
        })
    }
}


export default ArtistModel;