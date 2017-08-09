import mongoose from 'mongoose';

const { Schema } = mongoose;

const IndustrySchema = new Schema({
  industry_id: {
    type: String,
    required: true
  },
  industry_name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Industry', IndustrySchema);
