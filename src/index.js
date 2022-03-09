const express = require("express");
const cors = require("cors");
const videos = require("./routes/videos");

const app = express();
const port = process.env.PORT || 3030;
app.use(cors());
app.use(express.json());
app.use("/videos", videos);

app.listen(port, () => {
  console.log(`server running o port ${port}...`);
});
