const Tour = require('../models/tour.model');
const CatchAsync = require('../middlewares/CatchAsync')

const getAll = CatchAsync(async () => {
    const tour = await Tour.find();
    res.send(tour);
});

const getTourById = CatchAsync(async () => {
    const tour = await Tour.findById(req.params.id)
    res.send(tour);
});

const createTour = CatchAsync(async () => {
    const tour = await Tour.create(req.body)
    res.send(tour);

})

const updateTour = CatchAsync(async () => {
    const tour = await Tour.findOneAndUpdate(req.params.id);
    res.send(tour)
})

const deleteTour = CatchAsync(async () => {
    const tour = await Tour.findOneAndUpdate(req.params.id);
    res.send(tour)
})

module.exports = {
    getAll,
    getTourById,
    createTour,
    updateTour,
    deleteTour
}