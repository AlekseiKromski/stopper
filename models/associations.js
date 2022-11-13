const TimeModel = require("./TimeModel")
const TripModel = require("./TripModel")
const StopModel = require("./StopModel")

TripModel.hasMany(TimeModel, {
    foreignKey: "trip_id"
})
TimeModel.belongsTo(TripModel, {
    foreignKey: {
        name: 'id'
    },
})

TimeModel.belongsTo(StopModel, {
    foreignKey: {
        name: 'stop_id'
    },
})


