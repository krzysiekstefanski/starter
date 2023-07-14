import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

const ProductsList = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding: 10px;
  border: 1px solid #eee;

  &:hover {
    border-color: #ddd;
  }
`

const ImageWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin: 0;
  }
`

const Price = styled.span`
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 600;
  color: #030;
  margin-top: auto;
  align-self: flex-end;
`;

const UsingSSR = ({ serverData }) => {
  console.log(serverData);

  return (
    <Layout>
      <h1>
        Produkty
      </h1>
      <ProductsList>
        {serverData.map(product => (
          <Wrapper>
            <ImageWrapper>
              <img src={product.image} loading="lazy" />
            </ImageWrapper>
            <span>{product.title}</span>
            <Price>${product.price}</Price>
          </Wrapper>
        ))}
      </ProductsList>
    </Layout>
  )
}

export const Head = () => <Seo title="Using SSR" />

export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
