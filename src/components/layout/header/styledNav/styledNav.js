import styled from "@emotion/styled";

export const StyledNav = styled.nav(
  {
  position: "sticky",
  display: "block",
  backgroundColor: "white",
  zIndex:"100 !important",
  }
);

export const FlexNavContainer = styled.div`
  display: flex;
  justifyContent: space_between;
  align-items: center;
  gap: 1em;
  padding: 0 12px;
`;

export const StyledNavLogo = styled.div`
  width: 170px;
  margin-left: auto;
  @media (max-width: 700px) {
    width: 120px;
  }
`;

export const StyledNavLeftBar = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  li {
    padding: 0 5px;
    display: flex;
    align-items: center;
    font-size: 1rem;

    svg {
      color: #2c86ff;
      font-size: 1.5rem;
      margin: 0 0 0 .4rem;
    }
  }
  
  .badge span svg {
    font-size: 2.5rem !important;
  }
`;

export const GlobalContainer = styled.div`
width: 100% !important
`;
