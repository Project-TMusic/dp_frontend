import React from 'react';
import { Routes, Route } from 'react-router';
import { Main } from 'src/pages';
export const App: React.FC = () => (
  <Routes>
    <Route index element={<Main />}></Route>
  </Routes>
);
