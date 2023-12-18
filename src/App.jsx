import "./App.css";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Login } from "./Login";

function App() {
  return (
    <div>
      <h1>This is our Student Portal Login Page</h1>
      <Header />
      <Login />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
