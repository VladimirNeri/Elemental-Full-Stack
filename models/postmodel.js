const mongoose = require('mongoose');
const slugify = require('slugify');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      trim: true, 
      required: [true, 'a post must have a description']
    },
    author: String,
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A post must have a description'],
    },
    imageCover: {
      type: String,
      required: [true, 'a post must have an image cover']
    },
    images: [String],
    video: [String],
  },
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
