const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const uuidv4 = require('uuid/v4');

// aws.config.update({
//   secretAccessKey: process.env.AWS_ACCESS_KEY_ID,
//   accessKeyId: process.env.AWS_SECRET_ACCESS_KEY,
//   region: 'us-east-1'
// });

const spacesEndpoint = new aws.Endpoint("ams3.digitaloceanspaces.com");

const s3 = new aws.S3({
  endpoint: spacesEndpoint
});

const upload = multer({
    storage: multerS3({
      s3: s3,
      acl: "public-read",
      bucket: "hackathon13",
      contentType: multerS3.AUTO_CONTENT_TYPE,
      key: function(req, file, cb) {
      	const originalName = uuidv4();
      	const fileExt = file.mimetype.split('/')[1];
        cb(null, `${originalName}.${fileExt}`);
      }
    })
  });

module.exports = upload;