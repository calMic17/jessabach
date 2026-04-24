import { BrowserRouter } from "react-router-dom";
import './index.scss'
import NavBar from './components/Header/navBar'
import PageComponent from "./Helpers/PageSelect";
import Footer from "./components/footer/Footer";


function App() {

  const baseName = import.meta.env.BASE_URL || "/";
  
  return (
    <BrowserRouter basename={baseName}>
      <NavBar />
      <PageComponent />
      <Footer />
    </BrowserRouter>
  );
}

export default App;