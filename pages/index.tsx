import { useQuery } from '@apollo/client';
import styles from '../styles/Home.module.scss';
import SingleProduct from '../components/SingleProduct/SingleProduct';
import Header from '../components/Header/Header';
import { useState } from 'react';
import { GET_PRODUCTS } from '../graphql/queries';

export default function Home() {
  const [selectedSkus, setSelectedSkus] = useState<string[]>([]);
  const [isloading, setIsLoading] = useState(false);
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  const products = data?.products;

  const handleSelect = (sku: string, checked: boolean) => {
    if (!checked) {
      setSelectedSkus((prev) => prev.filter((item) => item !== sku));
      return;
    }

    setSelectedSkus((prev) => [...prev, sku]);
  };

  return (
    <div className={styles.container}>
      <Header selectedSkus={selectedSkus} setIsLoading={setIsLoading} />
      <div className={styles.products}>
        {products?.map((product) => (
          <SingleProduct
            key={product.sku}
            product={product}
            handleSelect={handleSelect}
            isLoading={isloading}
          />
        ))}
      </div>
    </div>
  );
}
