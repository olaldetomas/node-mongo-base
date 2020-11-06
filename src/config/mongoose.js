import mongoose from 'mongoose'
import config from './config'

const url = ''
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}

mongoose.set('useFindAndModify', false)
mongoose.connect(url, options)

mongoose.connection.on('connected', () => {
  console.log('Database \x1b[34mconnected\x1b[0m')
})

mongoose.connection.on('error', function (err) {
  console.log('Database \x1b[31merror\x1b[0m', err)
})

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log(
      'Mongoose default connection disconnected through app termination',
    )
    process.exit(0)
  })
})
