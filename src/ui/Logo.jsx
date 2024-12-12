import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import { Link } from "react-router-dom";

const StyledLogo = styled(Link)`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const {isDarkMode} = useDarkMode()
  const src = isDarkMode ? '/logo-dark.png' : '/logo-light.png'
  return (
    <StyledLogo to="/dashboard">
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
