import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Category } from 'src/components';

export const CategoryTemplate: React.FC = () => {
  const location = useLocation();
  const categoryType = location.pathname.split('/')[5];
  return (
    <>
      <Category
        CategoryTemplateType={categoryType as any}
        food={<></>}
        clothes={<></>}
        health={<></>}
        computer={<></>}
        tool={<></>}
      />
    </>
  );
};
