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
  ProductDetailPage,
  Search,
} from 'src/pages';
import { Footer, Navbar } from './components';
import { NotFound } from './NotFound';

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
      {ShowNavbarBoolean === 'wish' ? <Navbar /> : <></>}
      {ShowNavbarBoolean === 'cart' ? <Navbar /> : <></>}
      {ShowNavbarBoolean === 'detail' ? <Navbar /> : <></>}

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
        <Route path="search">
          <Route path="results/:id" element={<Search />} />
        </Route>
        <Route path="test" element={<TestPage />} />
        <Route path="detail/:id" element={<ProductDetailPage />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
      {ShowNavbarBoolean === '' ? <Footer /> : <></>}
      {ShowNavbarBoolean === 'food' ? <Footer /> : <></>}
      {ShowNavbarBoolean === 'clothes' ? <Footer /> : <></>}
      {ShowNavbarBoolean === 'profile' ? <Footer /> : <></>}
      {ShowNavbarBoolean === 'about' ? <Footer /> : <></>}
      {ShowNavbarBoolean === 'wish' ? <Footer /> : <></>}
      {ShowNavbarBoolean === 'cart' ? <Footer /> : <></>}
    </>
  );
};
