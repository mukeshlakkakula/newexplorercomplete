import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";
import Header from "./components/Header";
import Paynow from "./components/PayNow";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="p-2 ">
          <Header />
        </div>

        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/register-form" Component={RegisterForm} />
          <Route exact path="/paynow" Component={Paynow} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
