import styled from "@emotion/styled";

export const FlexMainCardComments = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem clamp(1rem, 3vw, 3rem);
  background: #fff;
  margin: 0 0 1rem 0;

  .card-comment {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;

      .header-commnet {
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin: 0 0 3rem 0;

          .profile-comment {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            img {
                width: 6rem;
                height: 6rem;
                border-radius: .5rem;
                margin: 0 0 0 1rem;
            }

            .name-user {
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                flex-direction: column;

                h5 {
                    color: #333;
                    font-size: clamp(1rem, 1.4vw, 1.4rem);
                }

                .stars-user {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;

                    svg {
                        color: #69a9ff;
                        margin: 1.5rem 0 0 .5rem;
                        font-size: clamp(1rem, 1.4vw, 1.4rem);
                    }
                }
            }
          }
      }

      p {
          color: #555;
          font-size: clamp(1rem, 1.3vw, 1.3rem);
          margin: 0 0 2rem 0;
      }

      .btns-comment {
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;

          button {
              color: #444;
              border: 1px solid #444;
              border-radius: .6rem;
              padding: .5rem 2rem;
              margin: 0 0 0 1rem;
              font-size: clamp(1rem, 1.3vw, 1.3rem);

              &:hover {
                  cursor: pointer;
              }
          }
      }
  }


  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
