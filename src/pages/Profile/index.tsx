import React from 'react';
import { Navbar, Profile } from 'src/components';
import { Global } from '@emotion/react';
import { globalPadding } from 'src/styles/globalPadding';

export const ProfilePage: React.FC = () => {
  return (
    <>
      <Global styles={globalPadding} />
      <Navbar />
      <Profile />;
    </>
  );
};
