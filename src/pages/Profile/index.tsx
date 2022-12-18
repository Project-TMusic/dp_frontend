import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Navbar, Profile } from 'src/components';
import { globalPadding } from 'src/styles/globalPadding';
import axios from 'axios';
import { host } from 'src/host';
import { useCookies } from 'react-cookie';
import { Global } from '@emotion/react';

export const ProfilePage: React.FC = () => {
  const [user, setUser] = useState('');
  const [cookie, removeCookie] = useCookies('jwt' as any);
  useEffect(() => {
    axios
      .get(`http://${host}/auth/authenticate`, {
        headers: {
          Authorization: localStorage.getItem('Authorization') as any,
        },
      })
      .then((res) => {
        if (res.data.error) {
          console.log('Not found');
        } else {
          setUser(res.data.username);
        }
      });
  }, []);
  const Logout = () => {
    localStorage.removeItem('Authorization');
    removeCookie('jwt', '');
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('Authorization')) {
      navigate('/login');
    }
  });
  return (
    <>
      <Global styles={globalPadding} />
      <Profile logout={Logout} name={user} />
    </>
  );
};
