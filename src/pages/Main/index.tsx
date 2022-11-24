import React, { useState, useEffect } from 'react';
import { Banner, Footer, Navbar, Review } from 'src/components';
import { CategoryTemplate } from 'src/Template';
import { Global } from '@emotion/react';
import { globalPadding } from 'src/styles/globalPadding';

//Rquest
import axios from 'axios';
import { host } from 'src/host';

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
