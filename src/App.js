import { useState } from "react";
import Home from "./components/Home";
import Logged from "./components/Logged"

function App() {

  const [login, setLogin] = useState(false);
  const [rating, setRating] = useState(0);

  function updateLogin(val){
    setLogin(true);
    setRating(val);
    console.log(val)
  }
  return (
    <div className="App">
      <div className="Section font-link">
        {!login ? <Home update={updateLogin}/> : <Logged updatedRating ={rating}/> }
      </div>
    </div>
  );
}

export default App;
