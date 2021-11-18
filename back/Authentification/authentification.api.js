const app = require("../index");
const config = require("./config");
const jwt = require("jsonwebtoken");
const { use } = require("../index");
app.post("/signin", async (req, res) => {
  console.log(req.body)
  const [user] = await app.db
    .from("user")
    .select("*")
    .where("user.numerocode", req.body.email)
    .orWhere("user.email", req.body.email)

  console.log(user)

  try {
    const { email, password } = req.body;

    const [user] = await app.db
      .from("user")
      .select("*")
      .where("etat","=","ACTIVE")
      .where("user.numerocode", email)
      .orWhere("user.email", email);

    if (!user) {
      res.status(404).send({ notice: "User Not Found" });
    } else {
      //const passwordIsValid= await verify(user.password, password);
      const passwordIsValid = user.password == password;

      if (!passwordIsValid) {
        res.status(401).send({
          accessToken: null,
          notice: "Invalid Password!",
        });
      } else {



        const token = jwt.sign(
          {
            id: user.id, roles: user.roles, email: user.email, firstname: user.firstname,
            lastname: user.lastname,
          },
          config.secret
        );
        res.status(200).send({
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          roles: user.roles,
          accessToken: token, 
          typeroles:user.typeroles
        });

      }
    }
  } catch (err) {

    res.status(500).send({ message: err.message });
  }
});
