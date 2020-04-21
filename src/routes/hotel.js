let HotelModel = require('../models/hotel.model')
let express = require('express')
let router = express.Router()

//Create a new hotel
//Post localhost:3000/hotel
router.post('/hotel', (req, res)=>{
    //req.body
    if(!req.body) {
        return res.status(404).send('request body is missing')
    }


    let model = new HotelModel(req.body)
    model.save()
      .then(doc => {
          if(!doc || doc.length === 0){
              return res.status(500).send(doc)
          }

          res.status(201).send(doc)
      })
      .catch(err => {
          res.status(500).json(err)
      })

})


//GET
router.get('/hotel',(req,res)=>{
    if(!req.query.hotelID){
        return res.status(400).send('Missing URL parameter: hotelID')
        
    }


    HotelModel.findOne({
        hotelID:req.query.hotelID
    })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})



//update
router.put('/hotel',(req,res)=>{
    if(!req.query.hotelID){
        return res.status(400).send('Missing URL parameter: hotelID')
    }


    HotelModel.findOneAndUpdate({
        hotelID:req.query.hotelID
    }, req.body,{
        new:true
    })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//delete
router.delete('/hotel',(req,res)=>{
    if(!req.query.hotelID){
        return res.status(400).send('Missing URL parameter: hotelID')
    }


    HotelModel.findOneAndRemove({
        hotelID:req.query.hotelID
    })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


module.exports = router