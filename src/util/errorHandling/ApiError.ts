class ApiError extends Error {
  statusCode: number
  constructor(message: string, statusCode: number) {
    super(message)

    this.message = message
    this.statusCode = statusCode

    Error.captureStackTrace(this, this.constructor)
  }
}
