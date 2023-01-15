import React from 'react';
import * as S from './styled';
import { Card, Empty } from 'src/components';
import { DUMMY_ITEM_Clothes } from 'src/api';

export const Clothes: React.FC = () => {
  return (
    <S.Flex>
      <S.Container>
        {DUMMY_ITEM_Clothes.map((value: any, key: number) => {
          return value.orderCount > 10 ? (
            <>
              <div key={key}>
                <Card
                  idNumber={value.id}
                  toGoDetail={value.name}
                  cardtitleprops=""
                  priceprops={value.name}
                  imgprops={value.img}
                />
              </div>
              <Empty />
            </>
          ) : (
            <></>
          );
        })}
      </S.Container>
    </S.Flex>
  );
};
