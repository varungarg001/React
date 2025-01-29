import { useState, useEffect } from "react";

function currencyinfo(currency) {
  const [data, setdata] = useState({});
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json
`)
      .then((Response) => {
        return Response.json();
      })
      .then((res) => {
        setdata(res[currency]);
      });
  }, [currency]);
  // console.log(data);

  return data;
}
export default currencyinfo;
