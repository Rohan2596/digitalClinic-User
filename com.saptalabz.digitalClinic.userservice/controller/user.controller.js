class UserController {

    addUser = (req, res, next) => {
        try {
      
            res.send("User Added Successfully").status(200);

        } catch (err) {
            res.status(404).send("User Addition Failed.")
            console.log("User Controller:- ",err);

        }
    };
    authenticateUser=(req,res,next)=>{
        try {
      
            res.send("User Authenicate Successfully").status(200);

        } catch (err) {
            res.status(404).send("User Authenication Failed.")
            console.log("User Controller:- ",err);

        }
    }
}
module.exports = new UserController()