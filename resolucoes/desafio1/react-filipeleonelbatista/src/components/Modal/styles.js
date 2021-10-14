import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

export const Container = styled.div`
  display: flex;
  width: 80vw;
  height: 80vh;
  background-color: #fff;
  box-shadow: 0px 4px 22px rgba(32, 32, 32, 0.14);
  border-radius: 1.4rem;
  overflow: hidden;
`;

export const Movie = styled.img`
  width: 50%;
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
  overflow-y: auto;
  flex: 1;
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
