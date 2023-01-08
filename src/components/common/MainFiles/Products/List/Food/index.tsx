import React from 'react';
import * as S from './styled';
import { Card, Empty } from 'src/components';
import { DUMMY_ITEM_Food } from 'src/api';

export const Food: React.FC = () => {
  console.log(DUMMY_ITEM_Food);
  return (
    <S.Flex>
      <S.Container>
        {DUMMY_ITEM_Food.map((value: any, key: any) => {
          return value.orderCount > 20 ? (
            <>
              <div key={key}>
                <Card
                  idNumber={value.id - 1}
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
