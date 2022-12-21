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
import { TestPage2 } from './pages/test2';
import { Navbar } from './components';

export const App: React.FC = () => {
  const location = useLocation();
  const ShowNavbarBoolean = location.pathname.split('/')[0];

  return (
    <>
      {ShowNavbarBoolean === 'profile' ? <></> : <Navbar username="asd" />}
      {ShowNavbarBoolean === 'about' ? <></> : <Navbar username="asd" />}

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
