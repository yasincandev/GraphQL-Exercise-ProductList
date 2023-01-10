import * as Yup from 'yup';
import { ProductType } from '../types';

export const schema = Yup.object().shape({
  sku: Yup.string().required('Please, provide the data of indicated type'),
  name: Yup.string().required('Please, provide the data of indicated type'),
  price: Yup.number().required('Please, provide the data of indicated type'),
  type: Yup.string().required('Please, provide the data of indicated type'),
  attributes: Yup.object().shape({
    weight: Yup.number()
      .nullable()
      .when('type', {
        is: ProductType.BOOK,
        then: (schema) =>
          schema.required('Please, provide the data of indicated type'),
      }),
    size: Yup.number()
      .nullable()
      .when('type', {
        is: ProductType.DVD,
        then: (schema) =>
          schema.required('Please, provide the data of indicated type'),
      }),
    height: Yup.number()
      .nullable()
      .when('type', {
        is: ProductType.FURNITURE,
        then: (schema) =>
          schema.required('Please, provide the data of indicated type'),
      }),
    width: Yup.number()
      .nullable()
      .when('type', {
        is: ProductType.FURNITURE,
        then: (schema) =>
          schema.required('Please, provide the data of indicated type'),
      }),
    length: Yup.number()
      .nullable()
      .when('type', {
        is: ProductType.FURNITURE,
        then: (schema) =>
          schema.required('Please, provide the data of indicated type'),
      }),
  }),
});
