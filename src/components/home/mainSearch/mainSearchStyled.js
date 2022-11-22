import styled from "@emotion/styled";

export const MainSearchContainer = styled.div`
  widht: 100%;
  background: var(--primary-light);
  padding: 25px 0;
`;

export const FlexMainSearch = styled.div`
  display: flex;
  justify-content: space-around;

  .img_holder {
    flex-basis: 20%;
  }

  .search_box {
    --border-radius: 25px;
    flex-basis: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .search_box_holder {
      width: 100%;
      height: 45px;
      border-radius: var(--border-radius);
      overflow: hidden;
      display: flex;
    }

    .search_box--input {
      width: 80%;
      border: 1px solid transparent;
      border-radius: var(--border-radius) 0 0 var(--border-radius);
      font-size: clamp(0.5rem, 2vw, 1.5rem);
      &:focus {
        border-color: var(--primary-blue);
      };
    }

    .search_box--input::placeholder {
      font-size: clamp(0.5rem, 2vw, 1.5rem);
    } 
    .search_box--button {
      width: 20%;
      padding: 7px 20px;
      gap: 5px;
      border-radius: 0px;
    }

    .search_box--submit {
      background-color: var(--primary-blue);
      color: var(--primary-white);
      width: 20%;
      border-radius: var(--border-radius);
      margin-top: 30px;
      margin-left: 50px;
      align-self: flex-end;
    }
  }
`;
