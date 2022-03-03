import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ArrowContainer = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: rgba(113, 113, 113, 0.48);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    border: 0.5px solid ${theme.primary};
  };
  &:hover{
    background-color:transparent;
    };
`

const ArrowIcon = styled.div`
  margin-top: 3px;
  color: #fff;
  font-size: 23x;
`;

export function DownArrow() {
  return (
    <ArrowContainer>
      <ArrowIcon>
        <FontAwesomeIcon icon={faAngleDown} />
      </ArrowIcon>
    </ArrowContainer>
  );
}