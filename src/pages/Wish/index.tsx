import React from 'react';
import { Navbar, Wish } from 'src/components';
import { Global } from '@emotion/react';
import { globalPadding } from 'src/styles/globalPadding';

export const WishPage: React.FC = () => {
  return (
    <>
      <Global styles={globalPadding} />
      <Wish />
    </>
  );
};
