const Router = require("express").Router()
const TimeModel = require("../../models/TimeModel")
const TripModel = require("../../models/TripModel")
const StopModel = require("../../models/StopModel")
const RegionModel = require("../../models/RegionModel")
const { Op } = require("sequelize")

Router.get('/region/:region', async (req,res) => {
    try{
        let region = getFromRequest(req.params.region)
        return res.status(200).json(
            await RegionModel.findAll({
                where:{
                    name: {
                        [Op.like]: `%${region}%`
                    }
                },
            })
        )
    }catch (e){
        console.error(e)
        return generateError(res, e, 500)
    }
})

Router.get('/trip/:tripId', async (req,res) => {
    try{
        let tripId = getFromRequest(req.params.tripId)
        return res.status(200).json(
            await TripModel.findAll({
                where:{
                    id: tripId,
                },
                include: {
                    model: TimeModel,
                    include: StopModel
                },
                order:[
                    [TimeModel, "arrival_time", "ASC"]
                ],
            })
        )
    }catch (e){
        console.error(e)
        return generateError(res, e, 500)
    }
})

Router.post('/stops/:stopName?', async (req,res) => {
    try{
        let regionId = getFromRequest(req.body.region)
        let stopName = req.params.stopName
        if(stopName === undefined) stopName = ""

        return res.status(200).json(
            await StopModel.findAll({
                where:{
                    stop_name: {
                        [Op.like]: `%${stopName}%`
                    },
                    stop_area: regionId
                }
            })
        )

    }catch (e){
        console.error(e)
        return generateError(res, e, 500)
    }
})

Router.post('/trips/', async (req,res) => {
    try{
        let stopId = getFromRequest(req.body.stop)

        return res.status(200).json(
            await TimeModel.findAll({
                where:{
                    stop_id: stopId,
                },
                include: TripModel
            })
        )

    }catch (e){
        console.error(e)
        return generateError(res, e, 500)
    }
})

module.exports = Router

function generateError(res, e, statusCode){
    let payload = {msg: "Internal server error"}
    if (process.env.DEBUG === "1"){
        payload.error = e.toString()
        payload.stack = e.stack.toString()
    }
    return res.status(statusCode).json(payload)
}

function getFromRequest(variable){
    if(variable == null && variable == undefined) throw new Error("All field is required")
    return variable
}
