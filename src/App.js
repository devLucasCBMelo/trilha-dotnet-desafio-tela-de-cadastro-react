import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Feed from "./pages/feed";
import Teste from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/login" element={ <Login /> } />
      <Route path="/feed" element={ <Feed /> } />
      <Route path="/teste" element={ <Teste /> } />
    </Routes>
  );
}

export default App;
