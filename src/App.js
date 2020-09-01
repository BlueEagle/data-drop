import React from "react";
import styled from "styled-components";
import TitleNav from "./components/TitleNav";
import "./App.css";

function App() {
  return (
    <AppContainer className="app">
      <TitleNav></TitleNav>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
