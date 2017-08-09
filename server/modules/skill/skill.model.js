import mongoose from 'mongoose';

const { Schema } = mongoose;

const SkillSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  email: String,
  first_name: String,
  last_name: String,
  lyncname: String,
  city: String,
  domain: String,
  title: String,
  role: [String],
  name: String,
  skills: [String]
});

module.exports = mongoose.model('Skill', SkillSchema);
