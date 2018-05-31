'use strict';

import mongoose from 'mongoose';

const carsSchema = mongoose.Schema({
  make: { type:String, required:true },
  doors: { type:Number, required:true },
});

carsSchema.pre('save', function(next) {
  next();
});

export default mongoose.model('cars', carsSchema);