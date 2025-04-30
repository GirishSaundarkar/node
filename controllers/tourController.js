const Tour = require('../models/tour.model');
const CatchAsync = require('../middlewares/CatchAsync');
const AppError = require('../utils/appError');

const getAll = CatchAsync(async () => {
    const tour = await Tour.find()
        .filter()
        .sort()
        .limitFields()
        .paginate();
    res.send(tour);
});

const getTourById = CatchAsync(async (req, res, next) => {
    const tour = await Tour.findById(req.params.id)
    if (!tour) {
        return next(new AppError('NO tour found with that ID', 404));
    }
    res.send(tour);
});

const createTour = CatchAsync(async (req, res) => {
    const tour = await Tour.create(req.body)
    res.send(tour);

})

const updateTour = CatchAsync(async (req, res) => {
    const tour = await Tour.findOneAndUpdate(req.params.id);
    if (!tour) {
        return next(new AppError('NO tour found with that ID', 404));
    }
    res.send(tour)
})

const deleteTour = CatchAsync(async (req, res) => {
    const tour = await Tour.findOneAndUpdate(req.params.id);
    if (!tour) {
        return next(new AppError('NO tour found with that ID', 404));
    }
    res.send(tour)
})

module.exports = {
    getAll,
    getTourById,
    createTour,
    updateTour,
    deleteTour
}