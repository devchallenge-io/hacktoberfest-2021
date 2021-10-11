import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem 4.8rem;
  gap: 0.4rem;

  & p {
    font-size: 1.4rem;
    font-weight: normal;
    color: #666;
  }
  & a {
    cursor: pointer;
    color: #d71f24;
  }
`;
