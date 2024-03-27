// const express= require ("express");
// const server = express();
const PORT = process.env.PORT || 3001;
const {server}= require("./app");
const {conn} = require ('./DB_connection');
 
conn.sync({force:true})
.then(()=>{
  server.listen(PORT,()=>{
        console.log('Server raised in port: ' + PORT)
      })

})