import "./App.css";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

import { BrowserRouter } from "react-router-dom";

import { Login } from "./Login";

function App() {
  let homePage;
  if (localStorage.jwt === undefined) {
    homePage = (
      <div>
        <Login />
      </div>
    );
  } else {
    homePage = (
      <div>
        <Content />
      </div>
    );
  }
  return (
    <div>
      <BrowserRouter>
        <Header />
        {homePage}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
