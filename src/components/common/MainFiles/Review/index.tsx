import React from 'react';
import * as S from './styled';
import { useScrollFadeIn } from 'src/hooks/useScrollFadeIn';

export const Review: React.FC = () => {
  const settings = {
    arrows: false,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    dots: true,
    speed: 2000,
  };
  /**
   * 유저 구매횟수는 결제버튼을 눌렀을 때 db에 count를 하나 늘리고
   * 제일 구매횟수가 많은 유저를 실시간으로 바꿔 불러오고
   * 리뷰본문은 마지막 리뷰를 불러옴 조건문 별점 4점이상
   */
  return (
    <S.ReviewContainer>
      <S.ReviewTitleContainer>
        <S.ReviewTitle>최근 이용자 리뷰</S.ReviewTitle>
      </S.ReviewTitleContainer>
      <S.CarouselStyled {...settings}>
        <S.ReviewCardContainer>
          <S.ProfileIntoBuyContainer>
            <S.ProfileInfoContainer>
              <S.InfoContainer>
                <S.Info>
                  박준희
                  <div style={{ fontSize: '14px', marginTop: '3px' }}>님</div>
                </S.Info>
              </S.InfoContainer>
              <S.BuyConutContainer>
                <S.BuyCount>5번 재구매</S.BuyCount>
              </S.BuyConutContainer>
              <S.StarContainer>
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
                <S.Star
                  style={{
                    width: '1.5rem',
                    height: '1.5rem',
                    marginTop: '0.4rem',
                    marginLeft: '1px',
                    opacity: '0.15',
                  }}
                  src="https://cdn4.iconfinder.com/data/icons/essentials-73/24/029_-_Star-512.png"
                />
              </S.StarContainer>
            </S.ProfileInfoContainer>
          </S.ProfileIntoBuyContainer>
          <S.ReviewTextContainer>
            <S.ReviewText>
              정말 제품들이 신선하기도 하고 배송도 드론으로 하니까 빠르고 좋네요
            </S.ReviewText>
          </S.ReviewTextContainer>
        </S.ReviewCardContainer>
        <S.ReviewCardContainer>
          <S.ProfileIntoBuyContainer>
            <S.ProfileInfoContainer>
              <S.InfoContainer>
                <S.Info>
                  뽀로로
                  <div style={{ fontSize: '14px', marginTop: '3px' }}>님</div>
                </S.Info>
              </S.InfoContainer>
              <S.BuyConutContainer>
                <S.BuyCount>20번 재구매</S.BuyCount>
              </S.BuyConutContainer>
              <S.StarContainer>
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
              </S.StarContainer>
            </S.ProfileInfoContainer>
          </S.ProfileIntoBuyContainer>
          <S.ReviewTextContainer>
            <S.ReviewText>
              물고기가 신선하네용 얼음포장 된 것도 드론으로 온다니 신기해요
            </S.ReviewText>
          </S.ReviewTextContainer>
        </S.ReviewCardContainer>
        <S.ReviewCardContainer>
          <S.ProfileIntoBuyContainer>
            <S.ProfileInfoContainer>
              <S.InfoContainer>
                <S.Info>
                  문재인
                  <div style={{ fontSize: '14px', marginTop: '3px' }}>님</div>
                </S.Info>
              </S.InfoContainer>
              <S.BuyConutContainer>
                <S.BuyCount>12번 재구매</S.BuyCount>
              </S.BuyConutContainer>
              <S.StarContainer>
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
                <S.Star
                  style={{
                    width: '1.5rem',
                    height: '1.5rem',
                    marginTop: '0.4rem',
                    marginLeft: '1px',
                    opacity: '0.15',
                  }}
                  src="https://cdn4.iconfinder.com/data/icons/essentials-73/24/029_-_Star-512.png"
                />
              </S.StarContainer>
            </S.ProfileInfoContainer>
          </S.ProfileIntoBuyContainer>
          <S.ReviewTextContainer>
            <S.ReviewText>
              훠훠훠 훠거에 넣어먹을 채소를 구매했는데 정말 신선합니다 훠훠
              불어먹어 훠거
            </S.ReviewText>
          </S.ReviewTextContainer>
        </S.ReviewCardContainer>
        <S.ReviewCardContainer>
          <S.ProfileIntoBuyContainer>
            <S.ProfileInfoContainer>
              <S.InfoContainer>
                <S.Info>
                  문재인
                  <div style={{ fontSize: '14px', marginTop: '3px' }}>님</div>
                </S.Info>
              </S.InfoContainer>
              <S.BuyConutContainer>
                <S.BuyCount>12번 재구매</S.BuyCount>
              </S.BuyConutContainer>
              <S.StarContainer>
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
              </S.StarContainer>
            </S.ProfileInfoContainer>
          </S.ProfileIntoBuyContainer>
          <S.ReviewTextContainer>
            <S.ReviewText>
              훠훠훠 훠거에 넣어먹을 채소를 구매했는데 정말 신선합니다 훠훠
              불어먹어 훠거
            </S.ReviewText>
          </S.ReviewTextContainer>
        </S.ReviewCardContainer>
        <S.ReviewCardContainer>
          <S.ProfileIntoBuyContainer>
            <S.ProfileInfoContainer>
              <S.InfoContainer>
                <S.Info>
                  문재인
                  <div style={{ fontSize: '14px', marginTop: '3px' }}>님</div>
                </S.Info>
              </S.InfoContainer>
              <S.BuyConutContainer>
                <S.BuyCount>12번 재구매</S.BuyCount>
              </S.BuyConutContainer>
              <S.StarContainer>
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
                <S.Star src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-512.png" />
              </S.StarContainer>
            </S.ProfileInfoContainer>
          </S.ProfileIntoBuyContainer>
          <S.ReviewTextContainer>
            <S.ReviewText>
              훠훠훠 훠거에 넣어먹을 채소를 구매했는데 정말 신선합니다 훠훠
              불어먹어 훠거
            </S.ReviewText>
          </S.ReviewTextContainer>
        </S.ReviewCardContainer>
      </S.CarouselStyled>
    </S.ReviewContainer>
  );
};
