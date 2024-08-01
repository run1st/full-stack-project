import express from "express";
import mongoose from "mongoose";
//api entry point

const app = express;
const port = 3000;
const uri =
  "mongodb+srv://ablante:<19A28b37c@46d>@musiclibrarycluster.mpwjfw1.mongodb.net/?retryWrites=true&w=majority&appName=MusicLibraryCluster";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));
app.use(express.json());

//use routes

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
