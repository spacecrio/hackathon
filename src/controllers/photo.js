const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

// https://hackathon13.ams3.digitaloceanspaces.com

const spacesEndpoint = new aws.Endpoint("ams3.digitaloceanspaces.com");

const s3 = new aws.S3({
  endpoint: spacesEndpoint
});

aws.config.update({
  secretAccessKey: process.env.AWS_ACCESS_KEY_ID,
  accessKeyId: process.env.AWS_SECRET_ACCESS_KEY
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    acl: "public-read",
    bucket: "hackathon13",
    key: function(req, file, cb) {
      console.log(file);
      cb(null, file.Date.now()); //use Date.now() for unique file keys
    }
  })
});

const uploadFile = function(request, res, next) {
  upload(request, res, function(error) {
    if (error) {
      console.log(error);
      return res.status(409).json({ error: "Failed file upload" });
    }
    console.log("File uploaded successfully.");
    return res.status(200);
  });
};

module.exports = { uploadFile };
