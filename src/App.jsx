import {Routes,Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {

  return (
    <div> 
      <h1>Star Wars</h1>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
      </Routes>         
    </div>
  )
}

export default App
