import {Routes,Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {

  return (
    <div className="text-center font-bold text-2xl mt-5"> 
      <h1 className="text-transparent bg-clip-text bg-gradient-to-bl to-slate-950 from-[#00FF00] ">Star Wars</h1>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
      </Routes>         
    </div>
  )
}

export default App
