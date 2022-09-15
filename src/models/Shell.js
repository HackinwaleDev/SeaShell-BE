const mongoose = require('mongoose');
const { Schema } = mongoose;

const ShellSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Name cannot be empty.']
  },
  specie: {
    type: String,
    trim: true,    
  },
  description: {
    type: String,    
  }
},{
  timestamps: true
});

const shells = mongoose.model('shells', ShellSchema);

module.exports = shells;