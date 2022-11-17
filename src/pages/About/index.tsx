import React from 'react';
import { AboutUs, Navbar } from 'src/components';
import { Global } from '@emotion/react';
import { globalPadding } from 'src/styles/globalPadding';

export const About: React.FC = () => {
  return (
    <>
      <Global styles={globalPadding} />
      <Navbar />
      <AboutUs />
    </>
  );
};
