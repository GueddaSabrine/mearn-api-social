const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0apiweb.fmisw.mongodb.net/mern_app_web_media",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    } 
  )
  .then(() => console.log("Connected to MongoDB!!!"))
  .catch((err) => console.log("!!!Failed to connect to MongoDB!!!", err));

//   mongoose.connect(
//     "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0apiweb.fmisw.mongodb.net/mern_app_web_media",
//     async(err)=>{
//         if(err) throw err;
//         console.log("conncted to db")
//     }
// )
  
