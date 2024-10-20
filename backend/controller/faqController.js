const Faq = require('../model/Faq');

// Create a new FAQ
exports.createFaq = async (req, res) => {
  const { question, answer } = req.body;

  try {
    const newFaq = new Faq({
      question,
      answer
    });

    const savedFaq = await newFaq.save();
    res.status(201).json({ message: 'FAQ created successfully', faq: savedFaq });
  } catch (error) {
    console.error('Error creating FAQ:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get all FAQs
exports.getFaqs = async (req, res) => {
  try {
    const faqs = await Faq.find();
    res.status(200).json(faqs);
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get a single FAQ by ID
exports.getFaqById = async (req, res) => {
  try {
    const faq = await Faq.findById(req.params.id);
    if (!faq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }
    res.status(200).json(faq);
  } catch (error) {
    console.error('Error fetching FAQ:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update an FAQ by ID
exports.updateFaq = async (req, res) => {
  const { question, answer } = req.body;

  try {
    const updatedFaq = await Faq.findByIdAndUpdate(
      req.params.id,
      { question, answer },
      { new: true }
    );

    if (!updatedFaq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }

    res.status(200).json({ message: 'FAQ updated successfully', faq: updatedFaq });
  } catch (error) {
    console.error('Error updating FAQ:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete an FAQ by ID
exports.deleteFaq = async (req, res) => {
  try {
    const deletedFaq = await Faq.findByIdAndDelete(req.params.id);

    if (!deletedFaq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }

    res.status(200).json({ message: 'FAQ deleted successfully' });
  } catch (error) {
    console.error('Error deleting FAQ:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};
