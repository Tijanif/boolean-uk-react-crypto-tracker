import { useEffect, useState } from "react";
import { getCriptoUpdateUrl } from "../constants";

// This function give us the current time in seconds
function currentTime() {
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

export default function MainDetail({selectedCripto}) {
  return (
    <>
      <section className="main-detail__central">
      <div class="main-detail__update">
    
  </div>
  <div class="main-detail__name">
    <h2>{}</h2>
    <p><span class="small">a.k.a </span>btc</p>
  </div>
  <div class="main-detail__price">
    <p>£27979</p>
    <p>Updated 1191 seconds ago</p>
  </div>
      </section>
    </>
  );
}
