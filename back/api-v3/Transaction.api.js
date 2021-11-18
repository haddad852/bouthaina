
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


app.post('/transaction/ajout', async (req, res) => {
  console.log(req.body)

  try {
    app.db.transaction(async (trx) => {
      await trx
        .table("compte")
        .increment({'solde': -req.body.montant})
        .where("id", "=", req.body.from);
        await trx
        .table("compte")
        .increment({'solde': req.body.montant})
        .where("id", "=", req.body.to);
        await trx.table("transaction").insert({
            from: req.body.from,
            to: req.body.to,
            montant: req.body.montant,
            date: new Date()
    
          });


    });
    res.json({ code: "success" });

  } catch (error) {
    console.log(error);
  }


})



