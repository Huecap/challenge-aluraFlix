import React from "react";
import styled from "styled-components";

const H1Estilizado = styled.h1`
  width: 100%;
  margin-top: 10rem;
  color: white;
  text-align: center;
  
`

const NotFound = () => {
  return (
    <div>
      <H1Estilizado>404 - Página No Encontrada</H1Estilizado>
    </div>
  );
};

export default NotFound;
