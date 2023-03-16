import { useState, useEffect } from "react";

const useFetchStocks = () => {
  const [data, setData] = useState([]);

  const getStocksInfo = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "cb322486bdmshb00cf3104c61fc2p151f69jsnf526bada23c1",
        "X-RapidAPI-Host": "yahoo-finance15.p.rapidapi.com",
      },
    };

    fetch(
      "https://yahoo-finance15.p.rapidapi.com/api/yahoo/co/collections/day_gainers?start=0",
      options
    )
      .then((res) => res.json())
      .then((res) => setData(res.quotes))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setInterval(getStocksInfo(), 5000);
  }, []);

  return { data };
};

export default useFetchStocks;
