const Router = require("express").Router()
const TimeModel = require("../../models/TimeModel")
const TripModel = require("../../models/TripModel")
const StopModel = require("../../models/StopModel")

Router.post('/search', (req,res) => {
    //TODO: search engine
})

module.exports = Router