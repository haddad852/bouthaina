
const app = require("../index");
const authJwt = require("../Authentification/middleware/authJwt");
const uuid = require("uuid");
const fs = require("fs");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    file ? cb(null, "public/actuality/") : null
  },
  filename: (req, file, cb) => {
    file ? cb(null, file.originalname) : cb(null, "vide")
  },
})
const uploadStorage = multer({ storage: storage })

app.get("/compte/list", async (req, res) => {
  try {
    const compte = (await app.db.table("compte"))
    res.json({
      code: "success",
      content: compte,
    });
  } catch (error) {
    console.log(error);
  }
});


app.post('/compte/ajout', async (req, res) => {
  console.log(req.body)

  try {
    app.db.transaction(async (trx) => {
      const id = uuid.v1().toLocaleUpperCase();
      await trx.table("compte").insert({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        compte: req.body.compte,
        id_transaction: id,
        solde: req.body.solde,
        cin: req.body.cin,
        created_at: new Date()

      });
      res.json({
        code: "success",

      });


    });

  } catch (error) {

  }


})


app.put("/actualite/delete", async (req, res) => {

  try {
    app.db.transaction(async (trx) => {
      await trx
        .table("actualite")
        .delete()
        .where("id", "=", req.body.id)

      console.log("okkiii")


    });
    res.json({ code: "success" });

  } catch (error) {
    console.log(error);
  }

})

app.get("/actualite/:actualte", (req, res) => {
  var file = fs.createReadStream("./public/actuality/" + req.params.actualte);
  file.pipe(res);
});