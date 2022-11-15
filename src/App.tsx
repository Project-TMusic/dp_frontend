import React from 'react';
import { Routes, Route } from 'react-router';
import { About, Login, Main, ProfilePage, Register } from 'src/pages';
import { Navbar } from 'src/components';
import { Global } from '@emotion/react';
import { globalPadding } from './styles/globalPadding';

export const App: React.FC = () => (
  <>
    <Global styles={globalPadding} />
    <Routes>
      <Route index element={<Main />} />
      <Route path="food" element={<Main />} />
      <Route path="clothes" element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </>
);
