import User from '../models/User'
import BaseRepository from './baseRepository'

class UserRepository extends BaseRepository {

  constructor() {
    super(User)
    this.model = User
  }

}

module.exports = UserRepository