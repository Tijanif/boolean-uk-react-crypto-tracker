import { useEffect, useState } from "react";
import {CRIPTO_LIST} from './constants'
import MainDetail from "./components/MainDetail";
import SideList from "./components/SideList";

function App() {
  // This piece of state keeps the id from the selected coin to be displayed in the MainDetail component
  const [selectedCripto, setSelectedCripto] = useState(null);
  const [criptoList, setCriptoList]= useState([])
  // This function gives you whether a coin has been selected or not
  // You will need this for the SideListItem component
  function isSelectedCripto(id) {
    return selectedCripto === id;
  }


  const getCoins = () => {
    return fetch(CRIPTO_LIST)
    .then(resp => resp.json())
      
  }
 

  useEffect(() => {
    getCoins().then(cripto => setCriptoList(cripto))
  },[])
  

  return (
    /* These (<> </>) are called React Fragments, and allow us to return more than one top element */
    <>
    
      <aside className="side-list">
        {
         <SideList  isSelectedCripto={isSelectedCripto}
         criptoList={criptoList}
         
         /> } 
      </aside>
      <main className="main-detail">
        {selectedCripto
          ? "Create the main detail component here"
          : "Select a coin bro!"}
        {/* News feed component needs to go here */}
      </main>
    </>
  );
}

export default App;
