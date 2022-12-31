import { Global } from '@emotion/react';
import React from 'react';
import { Navbar, SearchResult } from 'src/components';
import { globalPadding } from 'src/styles/globalPadding';

export const Search: React.FC = () => {
  return (
    <>
      <Navbar />
      <Global styles={globalPadding} />
      <SearchResult />
    </>
  );
};
