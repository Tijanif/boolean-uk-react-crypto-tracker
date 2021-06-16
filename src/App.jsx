import { useEffect, useState } from "react";

import MainDetail from "./components/MainDetail";
import { CRYPTO_LIST } from "./constants";

function App() {
  // This piece of state keeps the id from the selected coin to be displayed in the MainDetail component
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [cryptoList, setCryptoList] = useState([])
  // This function gives you whether a coin has been selected or not
  // You will need this for the SideListItem component
  function isSelectedCrypto(id) {
    return selectedCrypto === id;
  }

  useEffect(() => {
    return fetch(CRYPTO_LIST).then(resp => resp.json()).then(listOfCrypto => setCryptoList(listOfCrypto))
  }, [])
  
  return (
    /* These (<> </>) are called React Fragments, and allow us to return more than one top element */
    <>
      <aside className="side-list">
        {/* This is where the side list goes */}
      </aside>
      <main className="main-detail">
        {selectedCrypto
          ? "Create the main detail component here"
          : "Select a coin bro!"}
        {/* News feed component needs to go here */}
      </main>
    </>
  );
}

export default App;
