import styled from "@emotion/styled";

export const FlexDetailProduct = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  background: #f5f5f5;
  overflow: hidden;

  hr {
    margin: 3rem 0 1rem;
    width:90%;
    border-top: 1px solid #888;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
  @media (max-width: 1000px) {
    padding-bottom: 30vh;
  }
`;
