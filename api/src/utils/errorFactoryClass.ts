import { ErrorResponse, ErrorResponseBuilder } from './errorBuilderClass'
// this is your factory class that uses th builder method

// create your interface
// make sure to include a method that deals with the builder
interface CustomError {
  message: string
  code: string
  buildResponse(): ErrorResponse
}

// create a tupe class the extends that interface
// use the builder method inside to build you messages
class GeneralError implements CustomError {
  message = 'An unknown error occurred.'
  code = 'GENERAL_ERROR'

  buildResponse(): ErrorResponse {
    return new ErrorResponseBuilder()
      .setMessage(this.message)
      .setCode(this.code)
      .build()
  }
}

// make the concrete factory- this will handle all the types
// tmake this method static

export class ErrorFactory {
  static createError(condition: string): CustomError {
    // use an if else or a switch case to handle making types
  }
}
