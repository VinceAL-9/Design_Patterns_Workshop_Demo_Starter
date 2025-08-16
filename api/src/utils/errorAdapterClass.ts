// call classes
import { ErrorResponse } from './errorBuilderClass'
import { ErrorFactory } from './errorFactoryClass'

export class ExpressionAdapter {
  // transforsms keyword expressions to mathematical symbols using regex
  static transformKeywordExpression(query: string): string {
    // use tools like regex, string concantenations and stuff
    // to implement your transforming method here
  }

  // Evaluates a transformed expression string.
  // Returns a number if successful, or an error response otherwise.
  static evaluateFromQuery(query: string): number | ErrorResponse {
    try {
      const transformedQuery = this.transformKeywordExpression(query)

      const validExpressionPattern = /^[0-9+\-*/ ().]+$/
      const isValidExpression = validExpressionPattern.test(transformedQuery)

      if (!isValidExpression) {
        return ErrorFactory.createError('TYPE_MISMATCH').buildResponse()
      }

      // Using Function constructor with strict mode to safely evaluate
      const strictEvaluator = Function(
        '"use strict"; return (' + transformedQuery + ');'
      )
      const result = strictEvaluator()

      // return type mismatch nad zeo divison erros from the factory

      return result
    } catch (err) {
      // reurn general response from error factory
    }
  }
}
