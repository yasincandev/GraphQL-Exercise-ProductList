import { FC, useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { DELETE_PRODUCTS } from '../../graphql/mutations/deleteProducts.mutation';
import { useMutation } from '@apollo/client';
import { GET_PRODUCTS } from '../../graphql/queries/getProducts.query';

type HeaderProps = {
  selectedSkus: string[];
  setIsLoading: (value: boolean) => void;
};

const Header: FC<HeaderProps> = ({ selectedSkus, setIsLoading }) => {
  const [deleteProduct] = useMutation(DELETE_PRODUCTS);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    deleteProduct({
      variables: {
        skus: selectedSkus,
      },
      refetchQueries: [{ query: GET_PRODUCTS }],
    });
  };

  return (
    <header className={styles.header}>
      <h3 className={styles.logo}>Market</h3>
      <nav>
        <ul>
          <li>
            <Link href="/addProduct">
              <p>ADD</p>
            </Link>
          </li>
          <li>
            <button className={styles.button} onClick={handleDelete}>
              MASS DELETE
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
