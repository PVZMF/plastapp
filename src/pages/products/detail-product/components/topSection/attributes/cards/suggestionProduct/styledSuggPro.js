import styled from "@emotion/styled";

export const FlexMainSuggPro = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem clamp(1rem, 3vw, 3rem);
  background: #fff;
  margin: 0 0 1rem 0;

  .header-sugg {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 1rem 0;
      margin: 0 0 1.5rem 0;

      h4 {
        color: #333;
        font-size: clamp(1rem, 1.5vw, 1.5rem);
      }
  }

  .btns {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 1.2rem .7rem;

    button {
      color: #555;
      font-size: clamp(1rem, 1.5vw, 1.5rem);
      border: 1px solid #555;
      border-radius: .5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: .5rem 2rem;
      transition: all .3s;
      &:hover {
        cursor: pointer;
      }
      
      svg {
        margin: 0 0 0 .5rem;
      }
    }

    .like {
      color: #fff;
      background: green;
      border: 1px solid green;
    }
    .dont-now {
      color: #fff;
      background: orange;
      border: 1px solid orange;
    }
    .dislike {
      color: #fff;
      background: rgb(186, 56, 0);
      border: 1px solid rgb(186, 56, 0);
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
