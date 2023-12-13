import styled from "@emotion/styled";
import breakpoints from "../../utils/breakpoints";

export const StyledDisplayResult = styled.div`
  padding: 2rem;
  position: absolute;
  top: 6rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000328;
  z-index: 100;
  @media (max-width: ${breakpoints.sm}) {
    top: 5rem;
    padding: 1.5rem;
  }
  @media (max-width: ${breakpoints.xs}) {
    top: 4rem;
    padding: 1rem;
  }
  .noresults-text {
    text-align: center;
  }
`;
