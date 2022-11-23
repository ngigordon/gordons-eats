import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductsContainer = styled.div`
  background: #7f669d;
  /* width: 100vw; */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #fff;
  /* padding: 5rem calc((100vw - 1300px) / 2); */
`;
export const BackToHome = styled(Link)`
  font-size: 1rem;
  color: red;
`;

export const ProductCard = styled.div`
  /* margin: 0 rem; */
  line-height: 2;
  width: 400px;
  @media screen and (max-width: 400px) {
    width: 200px;
  }
`;
export const ProductImg = styled.img`
  max-width: 100%;
  min-width: 400px;
  border-radius: 20px;
  box-shadow: 8px 8px #fdc500;
  height: 300px;
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;
export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;
export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const PriceAddCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  border-radius: 12px;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;
