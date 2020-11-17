const Posts = require('../models/postmodel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const APIFeatures = require('./../utils/apiFeatures');

exports.createOne = catchAsync(async (req, res, next) => {
  const post = await Posts.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      data: post,
    },
  });
});
 
exports.getOne = catchAsync(async (req, res, next) => {
  let query = Posts.findById(req.params.id);
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
  if (req.params.postId) filter = { post: req.params.postId };

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
