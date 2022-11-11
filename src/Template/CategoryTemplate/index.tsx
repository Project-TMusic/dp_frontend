import React from 'react';
import { useLocation } from 'react-router-dom';
import { Food, Clothes } from 'src/components/common/Products/List';
import { Category } from 'src/components';

export const CategoryTemplate: React.FC = () => {
  const location = useLocation();
  const CategoryType = location.pathname.split('/')[1];
  return (
    <>
      <Category
        CategoryType={CategoryType as any}
        food={<Food />}
        clothes={<Clothes />}
        health={<></>}
        tool={<></>}
      />
    </>
  );
};
