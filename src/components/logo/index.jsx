import React from "react";
import styled, { css } from "styled-components";

import cvlogo from "../../images/logo1.png";
import { theme } from "../../theme";

 const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
   align-items: left;
 `;

 const LogoImg = styled.img`
  width: 8em;
  height: 8em;
   `


const LogoText = styled.div`
font-size: 40px;
color:${theme};
font-weight: 900;
`;

export function Logo(props) {
  

  return (
    <LogoContainer >
      <LogoImg src={cvlogo}  />
      <LogoText >
        CvRoll
      </LogoText>
    </LogoContainer>
  );
}