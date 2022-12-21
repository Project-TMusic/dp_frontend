import React, { useState, useEffect } from 'react';
import * as S from './styled';

export const TestPage: React.FC = () => {
  const [sticky, setSticky] = useState(0);
  const listenScrollEvent = () => {
    if (window.scrollY > 500) {
      setSticky(1);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.addEventListener('scroll', listenScrollEvent);
    };
  }, []);
  const [Address, setAddress] = useState('');
  const onChangeAddressInput = (e: any) => {
    setAddress(e.target.value);
    console.log(e.target.value);
    console.log(Address, 'gd');
  };
  const onSubmit = (e: any) => {
    try {
      localStorage.setItem('address', Address);
    } catch (e) {
      console.log(e, 'localstorage set error');
    }
  };
  return (
    <>
      <form>
        <input onChange={onChangeAddressInput} />
        <button onClick={onSubmit}>Submit</button>
      </form>
    </>
  );
};
