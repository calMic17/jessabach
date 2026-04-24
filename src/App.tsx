import { BrowserRouter } from "react-router-dom";
import './index.scss'
import NavBar from './components/navBar'
import PageComponent from "./Helpers/PageSelect";


function App() {

  const baseName = import.meta.env.BASE_URL || "/";
  
  return (
    <BrowserRouter basename={baseName}>
      <NavBar />
      <PageComponent />
    </BrowserRouter>
  );
}

export default App;