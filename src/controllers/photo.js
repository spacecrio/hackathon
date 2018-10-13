const uuidv4 = require('uuid/v4');

const photoModel = require("../models/photo");

const uploadFile = function(req, res, next) {
  console.log(req.files);

  const userName = req.user.username;
  const userId = req.user.id;

  const file = req.files[0];
  const fullUrl = file.location;

  const photo = savePhoto(userId, fullUrl);
  console.log(photo);

  const emptyPhoto = findReceiver();
  if(!!emptyPhoto){
    photo.receiver = emptyPhoto.sender;
    try{
      photo.save();
    }
    catch(ex){
      console.error(ex);
    }
  }

  console.log({
    emptyPhoto,
    photo
  });

  return res.status(200).json();
};

const savePhoto = async function(userId, photoUrl){

  const data = {
    url: photoUrl,
    sender: userId,
    location: {
      latitude: 140,
      longitude: 140
    },
    receiver: null
  };
  try{
    const photo = await new photoModel(data).save();
    return photo;
  }
  catch(ex){
    console.error(ex);
  };
};

const findReceiver = async function(){
  const photo = await photoModel.findOne({ receiver:null });

  return photo;
}



module.exports = { uploadFile };