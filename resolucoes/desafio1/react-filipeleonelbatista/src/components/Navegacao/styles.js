import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 6.2rem;
  padding: 2.4rem 4.8rem;
  justify-content: space-between;
  background-color: transparent;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const CTAButton = styled.button`
  cursor: pointer;
  width: fit-content;
  padding: 1.4rem 2.8rem;
  border-radius: 2.8rem;

  font-weight: bold;
  font-size: 1.4rem;
  color: #fff;

  border: none;
  background-color: #d71f24;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

export const MenuItem = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #000;
  font-size: 1.6rem;
  font-weight: normal;
  position: relative;
  transition: font-weight 0.2s;
  text-transform: uppercase;

  &:hover {
    font-weight: bold;
    &:before {
      content: "";
      position: absolute;
      bottom: -5px;
      width: 100%;

      height: 2px;
      background-color: #d71f24;
    }
  }
`;
