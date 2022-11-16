import styled from "@emotion/styled";

export const FlexMainBanner = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-top: 50px;
  gap: .25rem;
  justify-content: center;
  align-items: center;

  .banner {
    object-fit: cover;
  }

  .image-wrapper {
    width: 40rem;
    height: 17rem;
    margin-bottom: 2rem;
    overflow: hidden;

    @media (max-width: 600px){
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
