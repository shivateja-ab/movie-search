import Homepage from "./homepage";
import Favpage from "./favourite";
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route exact path='/' element={<Homepage />} />
    //     <Route exact path='/favpage' element={<Favpage />} />
    //   </Routes>
    // </Router>
    <Homepage />


  );
}
export default App;
