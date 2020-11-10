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
    };
    getUserDetails=(req,res,next)=>{
        try {
      
            res.send("Get User Details Successfully").status(200);

        } catch (err) {
            res.status(404).send("User Details Failed.")
            console.log("User Controller:- ",err);

        }
    };
    forgotPassword=(req,res,next)=>{
        try {
      
            res.send("User Password Forgot Successfully").status(200);

        } catch (err) {
            res.status(404).send("User Password Forgot Failed.")
            console.log("User Controller:- ",err);

        }
    };
    resetPassword=(req,res,next)=>{
        try {
      
            res.send("User Reset Forgot Successfully").status(200);

        } catch (err) {
            res.status(404).send("User Reset Forgot Failed.")
            console.log("User Controller:- ",err);

        }
    };
    getAllUserDetails=(req,res,next)=>{
        try {
      
            res.send("Get All User Details Successfully").status(200);

        } catch (err) {
            res.status(404).send("Get All User Details Failed.")
            console.log("User Controller:- ",err);

        }
    }
    

}
module.exports = new UserController()