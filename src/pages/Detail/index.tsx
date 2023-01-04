import React, { useState } from 'react';
import * as S from './styled';
import { DetailBanner, DetailProduct } from 'src/components';
import { useDispatch } from 'react-redux';
import { addtocart, removefromcart } from 'src/action';
import { useSelector } from 'react-redux';
import { All_Product } from 'src/api';

export const ProductDetailPage: React.FC = () => {
  const [Data, setData] = useState('asd');
  const dispatch = useDispatch();
  const AddToCartOnClick = () => {
    dispatch(addtocart(Data));
  };
  const RemoveFromCartOnClick = (product: any) => {
    dispatch(removefromcart(product.id));
    console.log(product.id, 'hye');
  };
  const list = useSelector((state: any) => state.CartReducer);
  console.log(list.list);
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
              ImgSrc={
                'https://doewxs707ovkc.cloudfront.net/v3/prod/image/item/mainpage/907/ad4474bef39c4167b84477eaa7a5052f20210708171733.'
              }
              FoodName={'국물떡볶이'}
              FoodDescription={'매콤한 국물이 매력적입니다.'}
            />
          </S.DetailProductList>
        </S.DetailProductListSection>
        <S.DetailCartSection>
          <S.DetailCartDiv>
            {list.list.map((value: any, key: any) => {
              return (
                <div key={key}>
                  <div>{value.product}</div>
                </div>
              );
            })}
            <S.RemoveFromCartButton onClick={RemoveFromCartOnClick}>
              삭제
            </S.RemoveFromCartButton>
          </S.DetailCartDiv>
        </S.DetailCartSection>
      </S.TwoSection>
    </S.ProductDetailContainer>
  );
};
