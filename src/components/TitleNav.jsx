import React from "react";
import styled from "styled-components";

const TitleNav = () => {
  return (
    <>
      <StyledContainer>
        <h1>Data Drop</h1>
      </StyledContainer>
    </>
  );
};

export default TitleNav;

const StyledContainer = styled.section`
  /* background-color: red; */
  height: 20vh;
  width: 60%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
