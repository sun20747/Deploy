const express = require("express");
const multer = require("multer");
var cors = require("cors");

const app = express();

app.use(cors());
app.use(express.static("public"));

app.listen(8001, () => {
  console.log("service running at PORT: 8001");
});

const storage_post = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/post");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".png");
  },
});
const post = multer({ storage: storage_post });
app.post("/upload/post", post.single("file"), (req, res) => {
  res.send(req.file);
});

const storage_user_profile = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/user_profile");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".png");
  },
});
const user_profile = multer({ storage: storage_user_profile });
app.post("/upload/user_profile", user_profile.single("file"), (req, res) => {
  res.send(req.file);
});
