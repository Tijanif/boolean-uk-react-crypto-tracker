import { useEffect, useState } from "react";
import { getCryptoUpdateUrl } from "../constants";


// This function give us the current time in seconds
function getCurrentTime() {
  return Math.round(Date.now() / 1000);
}


/*
  Use this function with the updated_at timestamp you get from each coin item in the API response
 */
function convertToSeconds(dateValue) {
  // This guard is needed due to the API discrepancies in handling dates
  return typeof dateValue === "string"
    ? Math.round(Date.parse(dateValue) / 1000)
    : dateValue;
}

export default function MainDetail({foundCrypto}) {

  const {name, symbol, last_updated, current_price} = foundCrypto

  const [currentTime, setCurrentTime] = useState(getCurrentTime())

  const dateValue = last_updated

  const seconds =  convertToSeconds(dateValue)
  const timeToDisplay = currentTime - seconds

  useEffect(() => {
     const stopInterval = setInterval(() => {
       setCurrentTime(getCurrentTime())
     }, 1000);
     return (() => {
       clearInterval(stopInterval)
     })
  },[])

 
 
  return (
    <>
<section className="main-detail__central">
  <div className="main-detail__update">
  </div>
  <div className="main-detail__name">
    <h2>{name}</h2>
    <p><span className="small">a.k.a </span>{symbol}</p>
  </div>
  <div className="main-detail__price">
    <p>{`£${current_price.toFixed(2)}`}</p>
    <p>{`Updated ${timeToDisplay} seconds ago`}</p>
  </div>
</section>
    </>
  );
}
