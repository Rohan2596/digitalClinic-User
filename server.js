const express=require('express')
const app=express();
const routes=require('./com.saptalabz.digitalClinic.userservice/routes/userservice.routes');
//routes
app.use('/digitalClinic/user',routes);


app.listen(3000,()=>{
    console.log('Server is listening to port:3000');
})