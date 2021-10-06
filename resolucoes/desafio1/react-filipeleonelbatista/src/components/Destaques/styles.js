import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 2.4rem 4.8rem;
  gap: 0.4rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  height: 42rem;
  background-color: #fff;
  margin: 1.4rem;
  border-radius: 1.4rem;
  box-shadow: 0px 4px 22px rgba(32, 32, 32, 0.14);
  overflow: auto;
`;

export const Movie = styled.img`
  width: 80%;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const InformationContainer = styled.div`
  padding: 2.4rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  max-width: 28rem;
`;

export const Title = styled.h4`
  font-size: 1.6rem;
  font-weight: bold;
  color: #000;
`;

export const Description = styled.p`
  font-size: 1.4rem;
  font-weight: normal;
  color: #666;
`;

export const CTAButton = styled.button`
  cursor: pointer;
  width: fit-content;
  padding: 1.4rem 2.8rem;
  border-radius: 2.8rem;

  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.4rem;
  color: #fff;

  border: none;
  background-color: #d71f24;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.2);
  }
`;
