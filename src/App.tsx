import React from 'react';
import { Routes, Route, useLocation } from 'react-router';
import {
  About,
  LoginPage,
  Main,
  PaymentPage,
  ProfilePage,
  RegisterPage,
  Cart,
  WishPage,
  TestPage,
} from 'src/pages';
import { Navbar } from './components';
import { TestPage2 } from './pages/test2/index';

export const App: React.FC = () => {
  const location = useLocation();
  const ShowNavbarBoolean = location.pathname.split('/')[1];

  return (
    <>
      {ShowNavbarBoolean === '' ? <Navbar /> : <></>}
      {ShowNavbarBoolean === 'food' ? <Navbar /> : <></>}
      {ShowNavbarBoolean === 'clothes' ? <Navbar /> : <></>}
      {ShowNavbarBoolean === 'profile' ? <Navbar /> : <></>}
      {ShowNavbarBoolean === 'about' ? <Navbar /> : <></>}

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
        <Route path="wish" element={<WishPage />} />
        <Route path="test" element={<TestPage />} />
        <Route path="test2" element={<TestPage2 />} />
      </Routes>
    </>
  );
};
