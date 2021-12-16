import db from '../Config/db.config.js';

class BrugerModel {
    constructor() {
            console.log('class bruger model is loaded');
        }
        //Returner new promise 
    list = (req, res) => {
            return new Promise((resolve, reject) => {
                //Kommer der noget fra API
                const orderBy = req.query.orderBy || 'id';
                const limit = req.query.limit ? ` LIMIT ${req.query.limit}` : '';

                //Hent alt fra bruger order by vores const
                let sql = `SELECT *
            FROM bruger
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
        //Henter detaljer for enkelt bruger
    get = (req, res) => {
            return new Promise((resolve, reject) => {
                const sql = `SELECT *
                            FROM bruger
                            WHERE id = ?
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
        //Opret bruger
    create = (req, res) => {
        return new Promise((resolve, reject) => {
            const arrFormValues = Object.values(req.body)
            const sql = `INSERT INTO bruger(name, lastname, username, password, email, day_of_birth, gender) 
        VALUES(?,?,?,?,?,?,?)`
            db.query(sql, arrFormValues, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve({ status: true, id: result.insertId });
                }
            })
        })
    }
    update = (req, res) => {
            return new Promise((resolve, reject) => {
                const arrFormValues = (Object.values(req.body));

                const sql = `UPDATE bruger
            SET name = ?, lastname = ?, username = ?, password = ?, email = ?, day_of_birth = ?, gender = ?
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
        //Slet bruger
    delete = (req, res) => {
        return new Promise((resolve, reject) => {
            const arrFormValues = (Object.values(req.body));

            //Desc for at tage fra det sidste tal - altså nyeste tilføjelse
            //Limit 1 for kun at slette en og ikke alle på en gang
            const sql = `DELETE FROM bruger 
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


export default BrugerModel;