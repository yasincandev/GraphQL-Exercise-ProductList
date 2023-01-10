import { FC, useState } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';
import { ADD_PRODUCT } from '../../graphql/mutations';
import { GET_PRODUCTS, CHECK_SKU } from '../../graphql/queries';
import { useForm } from 'react-hook-form';
import { Product, ProductType } from '../../types';
import styles from './AddProduct.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { schema } from '../../utils/validation';

const AddProduct: FC = () => {
  const [skuError, setSkuError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Product>({
    resolver: yupResolver(schema),
    defaultValues: {
      sku: '',
      name: '',
      price: null,
      type: null,
      attributes: {
        weight: null,
        height: null,
        size: null,
        width: null,
        length: null,
      },
    },
  });

  const selectedType = watch('type');

  const [addProduct, { error }] = useMutation(ADD_PRODUCT, {
    onError: () => {
      setSkuError(
        error?.message ??
          error?.graphQLErrors[0].message ??
          'Something went wrong'
      );
    },
    onCompleted: () => {
      router.push('/');
    },
  });

  const [checkIfSkuExists] = useLazyQuery(CHECK_SKU);

  const onSubmit = async (data: Product) => {
    const { data: checkIfSkuExistsRes } = await checkIfSkuExists({
      variables: {
        sku: data.sku,
      },
    });
    if (checkIfSkuExistsRes?.products.length) {
      setSkuError('Sku already exists');
      return;
    }

    const product: Product = {
      sku: data.sku,
      name: data.name,
      price: data.price,
      type: data.type,
      attributes: data.attributes,
    };
    addProduct({
      variables: { object: product },
      refetchQueries: [{ query: GET_PRODUCTS }],
    });
  };

  const handleCancel = () => {
    router.push('/');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
      id="product_form"
    >
      <label htmlFor="sku" className={styles.label}>
        SKU
        <input
          type="text"
          id="sku"
          {...register('sku')}
          className={styles.input}
        />
      </label>

      {errors.sku && (
        <p className={styles.error}>
          Please, provide the data of indicated type
        </p>
      )}
      <label htmlFor="name" className={styles.label}>
        Name
        <input
          type="text"
          id="name"
          {...register('name')}
          className={styles.input}
        />
      </label>
      {errors.name && (
        <p className={styles.error}>
          Please, provide the data of indicated type
        </p>
      )}
      <label htmlFor="price" className={styles.label}>
        Price
        <input
          type="number"
          id="price"
          {...register('price')}
          className={styles.input}
        />
      </label>
      {errors.price && (
        <p className={styles.error}>
          Please, provide the data of indicated type
        </p>
      )}
      <label htmlFor="productType" className={styles.label}>
        Type
        <select id="productType" {...register('type')} className={styles.input}>
          <option value="">Type Switcher</option>
          <option value={ProductType.BOOK}>Book</option>
          <option value={ProductType.DVD}>DVD</option>
          <option value={ProductType.FURNITURE}>Furniture</option>
        </select>
      </label>
      {errors.type && (
        <p className={styles.error}>
          Please, provide the data of indicated type
        </p>
      )}
      {selectedType === ProductType.BOOK && (
        <>
          <label htmlFor="weight" className={styles.label}>
            Weight (KG)
            <input
              type="number"
              id="weight"
              {...register('attributes.weight')}
              className={styles.input}
            />
          </label>
          {errors.attributes?.weight && (
            <p className={styles.error}>
              Please, provide the data of indicated type
            </p>
          )}
        </>
      )}
      {selectedType === ProductType.DVD && (
        <>
          <label htmlFor="size" className={styles.label}>
            Size (MB)
            <input
              type="number"
              id="size"
              {...register('attributes.size')}
              className={styles.input}
            />
          </label>
          {errors.attributes?.size && (
            <p className={styles.error}>
              Please, provide the data of indicated type
            </p>
          )}
        </>
      )}
      {selectedType === ProductType.FURNITURE && (
        <>
          <label htmlFor="height" className={styles.label}>
            Height (CM)
            <input
              type="number"
              id="height"
              {...register('attributes.height')}
              className={styles.input}
            />
          </label>
          {errors.attributes?.height && (
            <p className={styles.error}>
              Please, provide the data of indicated type
            </p>
          )}
          <label htmlFor="width" className={styles.label}>
            Width (CM)
            <input
              type="number"
              id="width"
              {...register('attributes.width')}
              className={styles.input}
            />
          </label>
          {errors.attributes?.width && (
            <p className={styles.error}>
              Please, provide the data of indicated type
            </p>
          )}
          <label htmlFor="length" className={styles.label}>
            Length (CM)
            <input
              type="number"
              id="length"
              {...register('attributes.length')}
              className={styles.input}
            />
          </label>
          {errors.attributes?.length && (
            <p className={styles.error}>
              Please, provide the data of indicated type
            </p>
          )}
        </>
      )}
      <div className={styles.btnContainer}>
        <button type="submit" className={styles.btn}>
          Save
        </button>
        <button type="button" className={styles.btn} onClick={handleCancel}>
          Cancel
        </button>
      </div>
      {skuError && <p className={styles.error}>{skuError}</p>}
      {Object.keys(errors).length > 0 && (
        <p className={styles.error}>Please, submit data</p>
      )}
    </form>
  );
};

export default AddProduct;
