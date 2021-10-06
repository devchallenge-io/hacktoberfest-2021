import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4.8rem;
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

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.4rem;
  flex-wrap: wrap;
`;

export const ListItem = styled.img`
  cursor: pointer;
  width: 17.6rem;
  height: 24.8rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0.8rem;
  box-shadow: 0px 4px 32px rgba(32, 32, 32, 0.14);
`;
