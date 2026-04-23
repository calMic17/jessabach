import { BrowserRouter } from "react-router-dom";
import './index.scss'
import NavBar from './components/navBar'
import PageComponent from "./Helpers/PageSelect";


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <PageComponent />
    </BrowserRouter>
  );
}

export default App;