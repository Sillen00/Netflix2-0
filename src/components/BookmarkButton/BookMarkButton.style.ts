import styled from "@emotion/styled";
import breakpoints from "../../utils/breakpoints";

export const StyledBookmarkButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  z-index: 100;
  color: white;
  cursor: pointer;
  color: #a26a10;
  right: 4px;
  bottom: 8px;
  height: 30px;

  .bookmark-icon {
    width: auto;
    height: 30px;
    @media (max-width: ${breakpoints.xs}) {
      height: 25px;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;
