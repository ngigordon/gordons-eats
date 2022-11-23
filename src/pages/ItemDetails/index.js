import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { productData, productDataTwo } from "../../components/Products/data";
import {
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
  ProductsContainer,
  PriceAddCon,
  BackToHome,
} from "./IndexDetailElements";
import { GlobalStyle } from "../../globalStyle";

function ItemDetails() {
  const { id, price } = useParams();
  const info = () => {
    return productData.find((filter) => filter.productID === Number(id));
  };

  const filtered = info();

  return (
    <>
      {console.log(filtered)}
      <GlobalStyle />
      <ProductsContainer>
        <BackToHome to={"/"}>Go to Home</BackToHome>
        <ProductCard>
          <ProductImg src={filtered.img} alt={filtered.alt} />
          <ProductInfo>
            <ProductTitle>{filtered.name}</ProductTitle>
            <ProductDesc>{filtered.desc}</ProductDesc>
            <PriceAddCon>
              <ProductPrice>{filtered.price}</ProductPrice>
              <ProductButton>{filtered.button}</ProductButton>
            </PriceAddCon>
          </ProductInfo>
        </ProductCard>
      </ProductsContainer>
    </>
  );
}

export default ItemDetails;
