import joi from 'joi'
import ProductType from '../../types/product.type'

export const inputProductValidation = (
  payload: ProductType
): joi.ValidationResult<ProductType> => {
  const schema = joi.object({
    id: joi.number().required().messages({
      'string.base': 'Product harus string',
      'string.empty': 'Product is empty',
      'any.required': "Product can't be empty"
    }),
    name: joi.string().trim().required().messages({
      'string.base': 'Product harus string',
      'string.empty': 'Product is empty',
      'any.required': "Product can't be empty"
    }),
    qty: joi.number().required().messages({
      'string.base': 'Product harus string',
      'string.empty': 'Product is empty',
      'any.required': "Product can't be empty"
    })
  })
  return schema.validate(payload)
}
