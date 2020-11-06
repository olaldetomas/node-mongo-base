import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
}, { timestamps: true })

module.exports = mongoose.model('User', UserSchema)