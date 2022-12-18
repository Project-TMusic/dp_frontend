import React from 'react';
import * as S from './styled';
import { Card, Empty } from 'src/components';
import { DUMMY_ITEM } from 'src/api';

export const Food: React.FC = () => {
  console.log(DUMMY_ITEM);
  return (
    <S.Flex>
      <S.Container>
        {DUMMY_ITEM.map((value: any, key: any) => {
          console.log(value.id);
          return (
            <>
              <div key={key}>
                <Card
                  cardtitleprops="aasd"
                  priceprops={value.name}
                  imgprops="asd"
                />
              </div>
              <Empty />
            </>
          );
        })}
      </S.Container>
    </S.Flex>
  );
};
