import Banner from "./Banner/index.jsx";
import FolksList from "./FolksList/index.jsx";
import Footer from "./Footer/index.jsx";
import Header from "./Header/index.jsx";
import React from "react";
import bg from "../assets/pattern.svg"
import styled from 'styled-components'

const Wrapper = styled.div`
background-image: url(${bg});
background-attachment: scroll;
`
const App = () => (
  <React.Fragment>
    <Header />
    <Wrapper>
      <Banner />
      <FolksList />
      <Footer />
    </Wrapper>
  </React.Fragment>
);

export default App;
