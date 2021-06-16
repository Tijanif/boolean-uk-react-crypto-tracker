import { useEffect, useState } from "react";
import SideListItem from './components/SideListItem'
import MainDetail from "./components/MainDetail";
import NewsCard from "./components/NewsCard";
import { CRYPTO_LIST, STATUS_UPDATES } from "./constants";

function App() {
  // This piece of state keeps the id from the selected coin to be displayed in the MainDetail component
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [cryptoList, setCryptoList] = useState([])
  const [listOfCryptoNews, setListOfCryptoNews] = useState([])
  // This function gives you whether a coin has been selected or not
  // You will need this for the SideListItem component
  function isSelectedCrypto(id) {
    return selectedCrypto === id;
  }
  const foundCrypto = cryptoList.find((item) => item.id === selectedCrypto )
  useEffect(() => {
    return fetch(CRYPTO_LIST)
    .then(resp => resp.json())
    .then(listOfCrypto => setCryptoList(listOfCrypto))
  }, [])
  
  useEffect(() => {
    return fetch(STATUS_UPDATES)
    .then(resp => resp.json())
    .then(cryptoNews => setListOfCryptoNews(cryptoNews["status_updates"]))
  },[])


  console.log(listOfCryptoNews)
  return (
    /* These (<> </>) are called React Fragments, and allow us to return more than one top element */
    <>
      <aside className="side-list">
        {/* This is where the side list goes */
        <ul>
        {cryptoList.map(item => {
          return <SideListItem isSelectedCrypto={isSelectedCrypto} setSelectedCrypto={setSelectedCrypto} selectedCrypto={selectedCrypto} item={item}  />
        })}
        </ul>
         }
      </aside>
      <main className="main-detail">
      
        {selectedCrypto
          ? <MainDetail  foundCrypto={foundCrypto} />
          : "Select a coin bro!"}
      
       <ul className="newsfeed">
         {
       listOfCryptoNews.map(newsItem => {
         return <NewsCard newsItem={newsItem} />
       })}
         </ul> 
        
      </main>
    </>
  );
}

export default App;
