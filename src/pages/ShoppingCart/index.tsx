import React from 'react';
import { Navbar, ShoppingCart } from 'src/components';
import { Global } from '@emotion/react';
import { globalPadding } from 'src/styles/globalPadding';

export const Cart: React.FC = () => {
  return (
    <>
      <Global styles={globalPadding} />
      <Navbar />
      <ShoppingCart />
    </>
  );
};
