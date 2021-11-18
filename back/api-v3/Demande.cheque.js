
const app = require("../index");
const authJwt = require("../Authentification/middleware/authJwt");
const uuid = require("uuid");
const fs = require("fs");
const multer = require("multer");


app.get("/chequier/list", async (req, res) => {
    try {
        const chequier = (await app.db.table("chequier"))
        res.json({
            code: "success",
            content: chequier,
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
                traite: 0

            });


        });
        res.json({ code: "success" });

    } catch (error) {
        console.log(error);
    }


})

app.put('/chequier/put/:id', async (req, res) => {
    console.log(req.params.id)

    try {
        app.db.transaction(async (trx) => {

            await trx.table("chequier")
                .update({

                    cheque_for: new Date(),
                    traite: 1

                })
        .where("id", "=", req.params.id);



        });
        res.json({ code: "success" });

    } catch (error) {
        console.log(error);
    }


})



