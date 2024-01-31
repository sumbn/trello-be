//atgroupdn
//hx2AIxiKdrL2B9Ht

import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from '~/config/environment'

let trelloDbInstance = null

const mongoClientInstance = new MongoClient( env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect()

  trelloDbInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

export const GET_DB = () => {
  if (!trelloDbInstance) throw new Error('Must connect to DB first')
  return trelloDbInstance
}

export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}