/* eslint-disable no-console */

import express from 'express'
import { CONNECT_DB, GET_DB, CLOSE_DB } from '~/config/mongodb'
import exitHook from 'async-exit-hook'
import { env } from '~/config/environment'


const START_SERVER = () => {
  const app = express()

  app.get('/', async (req, res) => {
    console.log(await GET_DB().listCollections().toArray())
    res.end('<h1>Hello </h1><hr>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {

    console.log(`Hello ${process.env.AUTHOR}, I am running at http://${env.APP_HOST }:${ env.APP_PORT }/`)
  })

  exitHook(() => {
    CLOSE_DB()
  })
}

(async () => {
  try {
    console.log('connect DB')
    await CONNECT_DB()
    console.log('connected DB')
    START_SERVER()
  } catch (e) {
    console.error(e)
    process.exit(0)
  }
})()

// CONNECT_DB()
//   .then(() => console.log('connected'))
//   .then(() => START_SERVER())
//   .catch(e => {
//     console.error(e)
//     process.exit(0)
//   })
