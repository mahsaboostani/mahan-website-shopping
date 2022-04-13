const express = require("express");
const multipart = require("connect-multiparty");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary");
const cors = require("cors");
const Datastore = require("nedb");
const Pusher = require("pusher");

// Create an express app
const app = express();
// Create a database
const db = new Datastore();

// Configure middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup multiparty
const multipartMiddleware = multipart();

// Pusher configuration
const pusher = new Pusher({
  appId: process.env.PUSHER_APPID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  encrypted: true,
  cluster: process.env.PUSHER_CLUSTER,
});

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CL_CLOUD_NAME,
  api_key: process.env.CL_KEY,
  api_secret: process.env.CL_SECRET,
});

app.get("/", (req, res) => {
  db.find({}, function (err, docs) {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(docs);
  });
});

app.post("/upload", multipartMiddleware, function (req, res) {
  // Upload image
  cloudinary.v2.uploader.upload(
    req.files.image.path,
    {
      /* Transformation if needed */
    },
    function (error, result) {
      if (error) {
        return res.status(500).send(error);
      }
      // Save record
      db.insert(Object.assign({}, result, req.body), (err, newDoc) => {
        if (err) {
          return res.status(500).send(err);
        }
        // Emit realtime event
        pusher.trigger("gallery", "upload", newDoc);
        res.status(200).json(newDoc);
      });
    }
  );
});

app.listen(process.env.PORT || 5000, () => console.log("Running..."));
