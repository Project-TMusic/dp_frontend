import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { DetailBanner, DetailProduct } from 'src/components';
import { useDispatch } from 'react-redux';
import { addtocart, removefromcart } from 'src/action';
import { useSelector } from 'react-redux';
import { All_Product } from 'src/api';

export const ProductDetailPage: React.FC = () => {
  const [local, setLocal] = useState();
  const dispatch = useDispatch();
  const list = useSelector((state: any) => state.CartReducer.list);
  const AddToCartOnClick = () => {
    dispatch(addtocart('asd'));
    localStorage.setItem('AddCart', JSON.stringify(list));
    console.log(list, 'list');
  };
  const RemoveFromCartOnClick = (product: any) => {
    dispatch(removefromcart(product.id));
    if (localStorage.getItem('AddCart')) {
      localStorage.removeItem('AddCart');
    }
  };
  useEffect(() => {
    setLocal(localStorage.getItem('AddCart') as any);
  }, [list]);
  return (
    <S.ProductDetailContainer>
      <S.BannerSection>
        <DetailBanner ImgSrc={All_Product[1].img} />
      </S.BannerSection>
      <S.TwoSection>
        <S.DetailProductListSection>
          <S.DetailProductList>
            <DetailProduct
              FoodOnClick={AddToCartOnClick}
              ImgSrc={All_Product[0].menuImg}
              FoodName={All_Product[0].menuName}
              FoodDescription={All_Product[0].menuDesc}
            />
          </S.DetailProductList>
        </S.DetailProductListSection>
        <S.DetailCartSection>
          <S.DetailCartDiv>
            {local}
            <S.RemoveFromCartButton onClick={RemoveFromCartOnClick}>
              삭제
            </S.RemoveFromCartButton>
          </S.DetailCartDiv>
        </S.DetailCartSection>
      </S.TwoSection>
    </S.ProductDetailContainer>
  );
};
