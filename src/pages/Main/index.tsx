import React from 'react';
import { Banner, Footer, Navbar, Review } from 'src/components';
import { CategoryTemplate } from 'src/Template';
import { Global } from '@emotion/react';
import { globalPadding } from 'src/styles/globalPadding';
export const Main: React.FC = () => {
  return (
    <>
      <Global styles={globalPadding} />

      <Navbar />
      <Banner />
      <CategoryTemplate />
      <Review />
      <Footer />
    </>
  );
};
