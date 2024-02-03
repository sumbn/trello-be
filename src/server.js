/* eslint-disable no-console */

import express from 'express'
import { CONNECT_DB, GET_DB, CLOSE_DB } from '~/config/mongodb'
import exitHook from 'async-exit-hook'
import { env } from '~/config/environment'
import { boardIndex } from '~/routes/v1'


const START_SERVER = () => {
  const app = express()

  app.use(express.json())

  app.use('/v1', boardIndex)

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
