const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  budget: { type: Number, required: true },
  deadline: { type: Date, required: true },
  skillsRequired: [{ type: String }],
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { 
    type: String, 
    enum: ['open', 'in-progress', 'completed', 'cancelled'], 
    default: 'open' 
  },
  createdAt: { type: Date, default: Date.now },
  bids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bid' }],
  selectedBid: { type: mongoose.Schema.Types.ObjectId, ref: 'Bid' }
});

module.exports = mongoose.model('Project', projectSchema);