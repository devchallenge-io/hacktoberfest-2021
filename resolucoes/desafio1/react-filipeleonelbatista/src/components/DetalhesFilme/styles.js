import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem 4.8rem 0;
  gap: 1.6rem;
`;

export const SectionTitle = styled.h4`
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: bold;
  color: #000;
  width: fit-content;

  &:hover {
    &:before {
      content: "";
      position: absolute;
      bottom: -10px;
      width: 7.8rem;

      height: 2px;
      background-color: #d71f24;
    }
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  background-color: #fff;
  margin: 1.4rem 0;
  overflow: auto;
`;

export const Movie = styled.img`
  width: 100%;
  min-width: 38rem;
  height: 24rem;
  border-radius: 0.8rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 1.4rem;
`;

export const InformationContainer = styled.div`
  padding: 2.4rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  overflow: auto;
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
