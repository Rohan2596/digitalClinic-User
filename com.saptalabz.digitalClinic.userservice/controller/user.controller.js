class UserController {

    addUser = (req, res, next) => {
        try {
      
            res.send("User Added Successfully").status(200);

        } catch (err) {
            res.status(404).send("User Addition Failed.")
            console.log("Add User Controller:- ",err);

        }
    }
}
module.exports = new UserController()