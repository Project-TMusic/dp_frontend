import React from 'react';
import { Banner, Navbar, Recommend } from 'src/components';
import { CategoryTemplate } from 'src/Template';
export const Main: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <CategoryTemplate />
      <Recommend />
    </>
  );
};
