import React from "react";
import { Container } from "reactstrap";

import "./App.scss";
import { Header, Footer } from "./views/index";

function App() {
  return (
    <React.Fragment>
      <div className="bg-app w-100">
        <Container className="content p-3 pt-4">
          <Header />
        </Container>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
