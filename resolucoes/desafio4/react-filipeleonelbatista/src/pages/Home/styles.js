import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  padding: 2.4rem;

  .rs-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .rs-play {
      background-color: #d71f24 !important;
      width: fit-content;
      padding: 1.4rem 2.8rem;
      border-radius: 2.8rem;

      font-weight: bold;
      text-transform: uppercase;
      font-size: 1.4rem;
      color: #fff;

      border: none !important;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(1.2);
      }
      &:active {
        filter: brightness(0.8);
      }
    }
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  max-width: 58rem;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2.4rem;
  border-radius: 1.4rem;
`;

export const Quote = styled.h2`
  text-align: center;
  font-size: 4.8rem;
  color: #fff;
  font-weight: 600;
`;

export const Autor = styled.p`
  text-align: center;
  font-size: 2.4rem;
  color: #fff;
  font-weight: 400;
`;

export const Button = styled.button``;
