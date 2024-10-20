const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    minlength: 5
  },
  answer: {
    type: String,
    required: true,
    minlength: 5
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Faq = mongoose.model('Faq', faqSchema);
module.exports = Faq;
