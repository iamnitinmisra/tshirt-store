const bcrypt = require("bcrypt");

module.exports = {
  login: async (req, res) => {
    const db = req.app.get("db");
    const { password, username } = req.body;

    const user = await db.get_user(username);

    if(!user.length) {
        res.status(401).send({message: "That username doesnt exist"})
    } else {
        const authenticated = await bcrypt.compareSync(password, user[0].password)
        if(authenticated) {
            req.session.user = {
                userId: user[0].id,
                firstName: user[0].firstName,
                lastName: user[0].lastName,
            }
            console.log(req.session.user)
            res.status(200).send(req.session.user)
        }
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.status(200).send({message: "Logout Successful"});
  },
};
