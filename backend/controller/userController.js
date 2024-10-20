const User = require('../model/User');
const Joi = require('joi');

const userValidationSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
  email: Joi.string().email().required(),
  country: Joi.string().required(),
  state: Joi.string().required(),
  city: Joi.string().required(),
  pincode: Joi.string().length(6).pattern(/^[0-9]+$/).required(),
  address: Joi.string().min(5).required()
});

exports.createUser = async (req, res) => {
  const { error } = userValidationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: 'Validation error', details: error.details[0].message });
  }

  const { name, mobile, email, country, state, city, pincode, address } = req.body;

  try {
    const newUser = new User({
      name,
      mobile,
      email,
      country,
      state,
      city,
      pincode,
      address
    });

    const savedUser = await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: savedUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};
