import mongoose from 'mongoose';

const { Schema } = mongoose;

const InitiativeSchema = new Schema({
    _id: {
      type: String,
      required: true
    },
    name: String,
    owner_id:{
     _id: {
       type: String,
       required: true
     },
     first_name: String,
     last_name: String
    },
   manager:{
     _id: {
       type: String,
       required: true
     },
     first_name: String,
     last_name: String
   },
   lead:[{
     _id: {
       type: String,
       required: true
     },
     first_name: String,
     last_name: String
   }],
   members:[{
     _id: {
       type: String,
       required: true
     },
     first_name: String,
     last_name: String,
     joining_date: Date,
     deactivatedDate: Date
   }],
   type:{
     _id: {
       type: String,
       required: true
     },
     name: String
   },
   brief: String,
   description: String,
   skills: [String],
   startDate: {
     type: Date,
     required: true,
     default: Date.now
   },
   creationDate: {
     type: Date,
     required: true,
     default: Date.now
   },
   deadlineDate: {
     type: Date,
     required: true,
     default: Date.now
   }
});

module.exports = mongoose.model('Initiative', InitiativeSchema);
