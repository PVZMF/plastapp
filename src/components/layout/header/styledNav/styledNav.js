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
`;

export const StyledNavLogo = styled.div`
  width: 170px;
  margin-left: auto;
`;

export const StyledNavLeftBar = styled.div`
  display: flex;
  gap: 2rem;
`;

export const GlobalContainer = styled.div`
width: 100% !important
`;
