import "./App.css";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

import { BrowserRouter } from "react-router-dom";

import { Login } from "./Login";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Login />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
