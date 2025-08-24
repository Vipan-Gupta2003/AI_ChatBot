import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

// app.get("/hello",(req,res,next)=>{
//   console.log(req.body.name);
//   return res.send("Hello");
// });
const PORT = process.env.PORT || 5000;
connectToDatabase().then(()=>{
  app.listen(PORT,()=>console.log("Server Open & Connected to Database"));
})
.catch((err)=>console.log(err));


