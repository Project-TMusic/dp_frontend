import React from 'react';
import { Routes, Route } from 'react-router';
import { Main } from 'src/pages';
import { Navbar } from 'src/components';
export const App: React.FC = () => (
  <>
    <Navbar />
    <Routes>
      <Route index element={<Main />} />
    </Routes>
  </>
);
