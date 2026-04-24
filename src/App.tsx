import { BrowserRouter } from "react-router-dom";
import './index.scss'
import NavBar from './components/navBar'
import PageComponent from "./Helpers/PageSelect";
import Hero from "./components/Hero";


function App() {
 const page = PageComponent;
  return (
    <BrowserRouter>
      <NavBar />
      {page === undefined ? <PageComponent /> : <Hero />}
    </BrowserRouter>
  );
}

export default App;