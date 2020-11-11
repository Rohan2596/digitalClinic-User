class UserService{

    addUserService=(req,next)=>{
        try {
            console.log("Add User Servicce:- ",req);
        } catch (error) {
            console.log("User Service Error :- ",error);
        }

    };
}
module.exports = new UserService();