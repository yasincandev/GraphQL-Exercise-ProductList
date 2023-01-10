import { FC } from 'react';
import { ProductType } from '../../types';
import styles from './SingleProduct.module.scss';
import { Products } from '../../graphql/__generated__/graphql';
import { useRef } from 'react';

type SingleProductProps = {
  product: Products;
  handleSelect: (sku: string, checked: boolean) => void;
  isLoading: boolean;
};

const SingleProduct: FC<SingleProductProps> = ({
  product,
  handleSelect,
  isLoading,
}) => {
  const { height, width, length, weight, size } = product.attributes;

  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleSelectProduct = (checked: boolean) => {
    if (checkboxRef.current) {
      if (checkboxRef.current.checked) {
        checkboxRef.current.checked = false;
      } else {
        checkboxRef.current.checked = true;
      }
    }
    handleSelect(product.sku, checked);
  };

  return (
    <div className={styles.product} onClick={() => handleSelectProduct(true)}>
      {isLoading && (
        <div className={styles.loader}>
          <p className={styles.loader__text}>Loading...</p>
        </div>
      )}
      <div className={styles.selector}>
        <input
          type="checkbox"
          id="select"
          name="select"
          value="select"
          ref={checkboxRef}
          className="delete-checkbox"
          onChange={(e) => handleSelectProduct(e.target.checked)}
        />
      </div>

      <h2 className={styles.product__title}>{product.name}</h2>
      <p className={styles.product__sku}>SKU: {product.sku}</p>
      <p className={styles.product__price}>Price: {product.price}</p>
      <p>Product Type: {product.type}</p>
      <p>Attributes:</p>
      {(product.type === ProductType.DVD && (
        <p>Size: {size}MB</p> // DVD
      )) ||
        (product.type === ProductType.BOOK && (
          <p>Weight: {weight}</p> // BOOK
        )) ||
        (product.type === ProductType.FURNITURE && (
          <p>Dimensions: {`${height}x${width}x${length}`}</p> // FURNITURE
        ))}
    </div>
  );
};

export default SingleProduct;
