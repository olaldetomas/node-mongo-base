import express from 'express'
import Routes from './routes'
import path from 'path'
import '../config/mongoose'

class Server {

  constructor() {
    this.express = express()
  }

  async start() {
    this.express.use(express.urlencoded({ extended: true }))
    const routes = new Routes(this.express)
    await routes.createRoutes()

    if (process.env.NODE_ENV === 'production') {
      this.express.use(express.static(path.resolve(__dirname, '../public/')))
      this.express.get(/.*/, (req, res) => res.sendFile(path.resolve(__dirname, '../public/index.html')))
    }

    this.express.listen(process.env.PORT, () => {
      console.log(`\x1b[35mServer on port: ${process.env.PORT}\x1b[0m`)
    })
  }

}

module.exports = Server