import { useState, useEffect } from "react";

function api_call(currency) {
  const [data, setdata] = useState({});
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json
`)
      .then((response) => response.json())
      .then((res) => {
        return setdata(res[currency]);
      });
  }, [currency]);
  return data;
}

export default api_call;
