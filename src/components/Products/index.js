import React, { useState } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utilities/formatCurrency";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductElement";
const Product = ({ heading, data, handleClick }) => {
  const [cartInfo, setCartInfo] = useState({});
  const updateCard = (id, amount, name) => {
    const item = { id, amount, name };
    setCartInfo(item);
  };

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              to=
              {`/itemDetail/${product.productID}/${product.price}/${product.name}`}
              >
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{formatCurrency(product.price)}FCFA</ProductPrice>
                <ProductButton onClick={() => handleClick()}>
                  {product.button}
                </ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Product;
