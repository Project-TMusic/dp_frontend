import React from 'react';
import { Routes, Route } from 'react-router';
import {
  About,
  LoginPage,
  Main,
  PaymentPage,
  ProfilePage,
  RegisterPage,
  Cart,
} from 'src/pages';

export const App: React.FC = () => (
  <>
    <Routes>
      <Route index element={<Main />} />
      <Route path="food" element={<Main />} />
      <Route path="clothes" element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="payment" element={<PaymentPage />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  </>
);
