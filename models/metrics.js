import mongoose, {Schema} from 'mongoose'

const MetricSchema = new mongoose.Schema({
  metrics: {
    date: Date,
    metrics:[Schema.Types.Mixed]
  }
})

const Metrics = mongoose.model('Metrics', MetricSchema)

export default Metrics