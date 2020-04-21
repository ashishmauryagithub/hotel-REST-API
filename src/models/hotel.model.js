let mongoose = require('mongoose')

const URI = "mongodb+srv://dbSam:dbSam%40123@restapi1-tmg3j.mongodb.net/test?retryWrites=true&w=majority"

// mongoose.connect('mongodb+srv://dbSam:dbSam%40123@restapi1-tmg3j.mongodb.net/test?retryWrites=true&w=majority')

// mongoose.connect(`${URI},${ useNewUrlParser = true }`)

mongoose.connect(URI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, autoIndex: false }, (err) => {
  if (err)
      console.error(err);
  else
      console.log("Connected to the mongodb"); 
});


let HotelSchema = new mongoose.Schema({
    hotelID:{
        type:Number,
        unique:true
        
    },
    hotelName: {
        type: String
    },
    hotelOwnerInfo: [
        {firstName:String,
        lastName:String,
        contact:String,
        email:{
            type:String,
            required:true,
            unique:true
        }}
    ],
    location: {
        type: String,
        required: true  
    },
    services:{
        type:String,
        required:true
    },
    capacity:{
        type:String

    },
    roomService:{
        type:String
    },
    hotelPhone:String,
    hotelEmail:{
        type:String,
        required:true
    },
    hotelWebsite:String,
    about:{
        type:String
    },


})

module.exports = mongoose.model('Hotel',HotelSchema)