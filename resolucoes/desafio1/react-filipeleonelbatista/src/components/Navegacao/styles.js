import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.2rem;
  padding: 2.4rem 4.8rem;
  background-color: transparent;
`;

export const Logo = styled.img`
  cursor: pointer;
  margin-right: auto;
`;

export const EmptyContainer = styled.div`
  margin-left: auto;
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
