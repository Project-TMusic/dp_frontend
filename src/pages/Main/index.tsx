import React from 'react';
import { Banner, Footer, Review } from 'src/components';
import { CategoryTemplate } from 'src/Template';
import { Global } from '@emotion/react';
import { globalPadding } from 'src/styles/globalPadding';
export const Main: React.FC = () => {
  return (
    <>
      <Global styles={globalPadding} />
      <Banner />
      <CategoryTemplate />
      <Review />
      <Footer />
    </>
  );
};
