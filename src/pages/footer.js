import styled from "styled-components";
import React from "react";

const Display = styled.div`
    height: 30px;
    width: 100vw;
    background-color: #171b1f;
    position: absolute;
    bottom: 0;
    text-align: center;
    @media (max-width: 476px) {
    width: 100%;
  }
`

const Footer = () =>{
    return(
        <Display>
            Florian Bertchi ©  ( v 0.2 )
        </Display>
    )
}

export default Footer