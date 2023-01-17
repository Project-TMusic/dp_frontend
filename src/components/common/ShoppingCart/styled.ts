import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CartContainer = styled.div`
  padding-left: 35rem;
`;

export const CartHeader = styled.div`
  display: flex;
  padding-top: 2rem;
  width: 70%;
`;

export const CartHeaderText = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-size: 40px;
  font-weight: 500;
`;

export const CartHeaderUnderline = styled.div`
  margin-top: 1.5rem;
  width: 75%;
  height: 0.3rem;
  background: rgba(0, 0, 0, 0.8);
`;

export const CartBody = styled.div`
  width: 75%;
`;

export const StoreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  height: 5rem;
  font-size: 18px;
  font-weight: bold;
  margin-top: 2.5rem;
  margin-right: 5rem;
  color: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
`;

export const Store = styled.div`
  font-size: 18px;
  margin-top: 2.5rem;
  margin-right: 8rem;
  color: rgba(0, 0, 0, 0.8);
`;

export const Product = styled.div`
  font-size: 18px;
  margin-top: 2.5rem;
  margin-right: 15rem;
  color: rgba(0, 0, 0, 0.8);
`;

export const Quantity = styled.div`
  font-size: 18px;
  margin-top: 2.5rem;
  color: rgba(0, 0, 0, 0.8);
`;

export const Price = styled.div`
  font-size: 18px;
  margin-top: 2.5rem;
  margin-right: 14rem;
  color: rgba(0, 0, 0, 0.8);
`;

export const CartContent = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 75%;
  height: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const StoreVertical = styled.div`
  display: flex;
  align-items: center;
`;

export const StoreProduct = styled.div`
  margin-bottom: 2rem;
`;

export const StoreWarp = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
`;

export const StoreGroup = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const StoreName = styled.div`
  font-size: 20px;
  margin-bottom: 1rem;
`;

export const StoreImg = styled.img`
  background: skyblue;
  width: 15rem;
  height: 12rem;
`;

export const ProductContent = styled.div`
  display: flex;
  margin-left: 2rem;
`;

export const ProductImg = styled.div`
  background: skyblue;
  width: 10rem;
  height: 8rem;
`;

export const ProductName = styled.div`
  margin-left: 3rem;
  margin-top: 3rem;
  font-size: 18px;
`;

export const QuantityContent = styled.div`
  display: flex;
  margin-top: 2.5rem;
  margin-left: 10.5rem;
`;

export const QuantityMinusButton = styled.button`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50% 0 0 50%;
  border: none;
  width: 3rem;
  height: 3rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    transition: 0.3s;
  }
`;

export const QuantityPlusButton = styled.button`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0 50% 50% 0;
  border: none;
  width: 3rem;
  height: 3rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    transition: 0.3s;
  }
`;

export const QuantityNumber = styled.div`
  font-size: 18px;
  width: 3rem;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  text-align: center;
  line-height: 3rem;
`;

export const PriceContent = styled.div`
  margin-left: 9rem;
  margin-right: 5rem;
`;

export const PriceText = styled.div`
  font-size: 18px;
  margin-top: 3rem;
`;

export const DeleteButton = styled.button`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border: none;
  width: 3rem;
  height: 3rem;
  margin-top: 2.5rem;
  margin-right: 2rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    transition: 0.3s;
  }
`;

export const PaymentContainer = styled.div`
  position: fixed;
  right: 21%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 25rem;
  height: 26rem;
`;

export const PaymentUpside = styled.div`
  width: 100%;
  height: 16rem;
  background-color: #e9e9e9;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const PaymentUpsideTitle = styled.div`
  font-size: 20px;
  padding-top: 2rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const PaymentTextGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PaymentText = styled.div`
  font-size: 18px;
  margin-top: 2rem;
  margin-left: 2rem;
`;

export const PaymentPrice = styled.div`
  font-size: 18px;
  margin-top: 2rem;
  margin-right: 2rem;
`;

export const PaymentMiddleSide = styled.div`
  width: 100%;
  height: 6rem;
  background-color: #e2e2e2;
`;

export const PaymentDownside = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
`;

export const PaymentButton = styled.a`
  border: none;
  background: #8aaae5;
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-align: center;
  line-height: 4rem;
  font-size: 18px;
  color: white;
  text-decoration: none;
`;
