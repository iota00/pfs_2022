import "./App.css";
import Home from "./pages/Home"
import Create from "./pages/Create"
import Market from "./pages/Market"
import Desc from "./pages/description"
import {BrowserRouter, Route, Routes} from "react-router-dom"






function App() {
   console.log({Home})
   return(
<>
<BrowserRouter>
      <Routes> 

         <Route path={"/"} element={<Home />} />
         <Route path={"/create"} element={<Create />} />
         <Route path={"/market"} element={<Market />} />
         <Route path={"/description"} element={<Desc />} />




      </Routes>
</BrowserRouter>
    
    </>
   )



}
export default App;