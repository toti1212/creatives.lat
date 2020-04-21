import Banner from "./Banner/index.jsx";
import FolksList from "./FolksList/index.jsx";
import Footer from "./Footer/index.jsx";
import Header from "./Header/index.jsx";
import React from "react";

const App = () => (
  <React.Fragment>
    <Header />
    <Banner />
    <FolksList />
    <Footer />
  </React.Fragment>
);

export default App;
