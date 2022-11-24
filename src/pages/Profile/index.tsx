import React, { useState, useEffect } from 'react';
import { Navbar, Profile } from 'src/components';
import { Global } from '@emotion/react';
import { globalPadding } from 'src/styles/globalPadding';
import axios from 'axios';
import { host } from 'src/host';
import { useCookies } from 'react-cookie';

export const ProfilePage: React.FC = () => {
  const [user, setUser] = useState('');
  const [cookie, removeCookie] = useCookies('jwt' as any);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/auth/authenticate`, {
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
  return (
    <>
      <Global styles={globalPadding} />
      <Profile logout={Logout} name={user} />
    </>
  );
};
