const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const APIFeatures = require('./../utils/apiFeatures');

const Posts = require('../models/postmodel');

exports.deleteOne = catchAsync(async (req, res, next) => {
  const doc = await Posts.findByIdAndDelete(req.params.id);

  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.updateOne = catchAsync(async (req, res, next) => {
  const doc = await Posts.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});

exports.createOne = catchAsync(async (req, res, next) => {
  const doc = await Posts.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});

exports.getOne = catchAsync(async (req, res, next) => {
  let query = Posts.findById(req.params.id);
  if (popOptions) query = query.populate(popOptions);
  const doc = await query;

  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});

exports.getAll = catchAsync(async (req, res, next) => {
  // To allow for nested GET reviews on tour (hack)
  let filter = {};
  if (req.params.tourId) filter = { tour: req.params.tourId };

  const features = new APIFeatures(Posts.find(filter), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  // const doc = await features.query.explain();
  const doc = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: doc.length,
    data: {
      data: doc,
    },
  });
});
