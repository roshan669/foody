const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');

router.post('/orderData', async (req, res) => {
  try {
    const data = req.body.order_data;
    data.unshift({ Order_date: req.body.order_date }); // Add Order_date property

    let existingOrder = await Order.findOne({ email: req.body.email });

    if (!existingOrder) {
      // Create a new order
      await Order.create({
        email: req.body.email,
        order_data: [data],
      });
      res.json({ success: true });
    } else {
      // Update existing order
      await Order.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } }
      );
      res.json({ success: true });
    }
  } catch (error) {
    console.error('Error processing order data:', error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
