const express = require('express');
const {createFaq,getFaqs,getFaqById,updateFaq,deleteFaq} = require('../controller/faqController');
const router = express.Router();

router.post('/', createFaq);// Create a new FAQ
router.get('/', getFaqs);// Get all FAQs
router.get('/:id', getFaqById);// Get a single FAQ by ID
router.put('/:id', updateFaq);// Update an FAQ by ID
router.delete('/:id', deleteFaq);// Delete an FAQ by ID

module.exports = router;
