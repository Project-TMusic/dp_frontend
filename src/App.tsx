import React from 'react';
import { Routes, Route } from 'react-router';
import { About, Main } from 'src/pages';
import { Navbar } from 'src/components';
export const App: React.FC = () => (
  <>
    <Navbar />
    <Routes>
      <Route index element={<Main />} />
      <Route path="about" element={<About />} />
    </Routes>
  </>
);
