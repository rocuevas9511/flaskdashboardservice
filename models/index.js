import mongoose from 'mongoose';

import Metrics from './metrics'

const connectDb = () => {
  const local = 'mongodb://rappiprueba:rappiprueba@ds161400.mlab.com:61400/rappi-back'
  return mongoose.connect(local);
};

const models = { Metrics };

export { connectDb };

export default models;