import mongoose from 'mongoose';

const { Schema } = mongoose;

const CapabilitySchema = new Schema({
  capability_id: {
    type: String,
    required: true
  },
  capability_name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Capability', CapabilitySchema);
