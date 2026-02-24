// import dotenv from "dotenv/config";

// import connectDB from "./db/database.js";
// import { app } from "./app.js";

// dotenv.config({
//   path: "/.env",
// });

// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//       console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.log("MONGO db connection failed !!!! ", err);
//   });


import "dotenv/config";  // auto-loads .env from project root
import connectDB from "./db/database.js";
import { app } from "./app.js";

// No need to call dotenv.config() again
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!! ", err);
  });