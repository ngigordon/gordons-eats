import styled from "styled-components";
import ImgBg from "../../images/pizza-3.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  border: 5px solid darkblue;
  overflow: hidden;
  width: 95vw;
  padding: 0rem calc((100vw - 1300px) / 2);
  /* margin-top:1rem; */
  @media screen and (max-width: 600) {
    position: absolute;
    top: 80px;
  }
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vw;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(1rem, 10vw, 3rem);
  margin: 1rem 0;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  margin: 2rem 0;
  color: #ffe9b1;
  text-transform: lowercase;
  font-family: italic;
  font-weight: 800;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const HeroBTN = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
