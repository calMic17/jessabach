import { BrowserRouter } from "react-router-dom";
import './index.scss'
import NavBar from './components/navBar'
import PageComponent from "./Helpers/PageSelect";
import Hero from "./components/Hero";


function App() {
 const CurrentPage = PageComponent;
  return (
    <BrowserRouter>
      <NavBar />
      {CurrentPage ? <CurrentPage /> : <Hero />}
    </BrowserRouter>
  );
}

export default App;