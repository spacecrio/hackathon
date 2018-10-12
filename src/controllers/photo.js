const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const uuidv4 = require('uuid/v4');

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
      const originalName = uuidv4();
      cb(null, originalName);
    }
  })
}).array('upload', 1);

const uploadFile = function(request, res, next) {

  upload(request, res, function(error) {
    if (error) {
      console.error(error);
      return res.status(409).json({ error: "Failed to upload file" });
    }
    console.log("File uploaded successfully.");

    console.log(res);

    const imgName = res.originalname;
    console.log({ imgName });

    return res.status(200);
  });
};

module.exports = { uploadFile };
