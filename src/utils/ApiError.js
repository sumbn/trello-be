
class ApiError extends Error {

  constructor(stt, mes) {
    super(mes)
    this.statusCode = stt
    this.name = 'ApiError'
    Error.captureStackTrace(this, this.constructor)
  }
}

export default ApiError