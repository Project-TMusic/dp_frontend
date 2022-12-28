import React from 'react';
import { Banner, Review } from 'src/components';
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
    </>
  );
};
