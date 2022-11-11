import React from 'react';
import { Routes, Route } from 'react-router';
import { About, Main, ProfilePage } from 'src/pages';
import { Navbar } from 'src/components';
import { Global } from '@emotion/react';
import { globalPadding } from './styles/globalPadding';

export const App: React.FC = () => (
  <>
    <Global styles={globalPadding} />
    <Navbar />
    <Routes>
      <Route index element={<Main />} />
      <Route path="food" element={<Main />} />
      <Route path="clothes" element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="profile" element={<ProfilePage />} />
    </Routes>
  </>
);
