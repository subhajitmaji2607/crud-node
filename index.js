const express = require('express')

const app = express()

require('dotenv').config()
const port = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/api',require('./routes/user'))    //create user
/*app.use('/api',require('./routes/user'))    //show all user
app.use('/api',require('./routes/user'))    //slelect single user
app.use('/api',require('./routes/user'))    //update user
app.use('/api',require('./routes/user')) */   //delete user

/*app.get('/',(req,res)=>{
    res.send('Hello World')
})*/

app.listen(port,()=> console.log('app running'));