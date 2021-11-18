
const app = require("../index");
const authJwt = require("../Authentification/middleware/authJwt");
const uuid = require("uuid");
const fs = require("fs");
const multer = require("multer");


app.get("/transaction/list", async (req, res) => {
    try {
        const transaction = (await app.db.table("transaction"))
        res.json({
            code: "success",
            content: transaction,
        });
    } catch (error) {
        console.log(error);
    }
});


app.post('/demandecheque/ajout', async (req, res) => {
    console.log(req.body)

    try {
        app.db.transaction(async (trx) => {

            await trx.table("chequier").insert({
                compte_cheque: req.body.compte_cheque,
                nb_cheque: req.body.nb_cheque,
                date: new Date(),
                traite:0

            });


        });
        res.json({ code: "success" });

    } catch (error) {
        console.log(error);
    }


})



