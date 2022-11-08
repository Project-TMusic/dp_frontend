import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Food, Clothes } from 'src/components/common/Products/List';
import { Category } from 'src/components';

export const CategoryTemplate: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <Category
        food={<Food />}
        clothes={<Clothes />}
        health={<></>}
        computer={<></>}
        tool={<></>}
      />
    </>
  );
};
