import styled from "@emotion/styled";

export const StyledNav = styled.nav`
  position: sticky;
  width: 100%;
  padding: 15px 0;
  z-Index:10 !important;
`;

export const FlexNavContainer = styled.div`
  display: flex;
  justifyContent: space_between;
  align-items: center;
  gap: 1em;
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
  gap: 2rem;
  
  .badge span {
    font-size: 1.3rem;
  }
`;

export const GlobalContainer = styled.div`
width: 100% !important
`;
