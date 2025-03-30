import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import api_call from "./hooks/API_call";

function App() {
  const [from, setfrom] = useState("inr");
  const [to, setto] = useState("usd");
  const [amount, setamount] = useState(0);
  const [convertedAmount, setconvertedAmount] = useState(0);

  const currencyInfo = api_call(from);
  // console.log(currencyInfo);

  const options = Object.keys(currencyInfo);
  console.log(options);

  const convert = function () {
    setconvertedAmount(amount * currencyInfo[to]);
  };

  const swap = function () {
    setto(from);
    setfrom(to);
    setconvertedAmount(amount);
    setamount(convertedAmount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyoption={options}
                onamountchange={(amount) => setamount(amount)}
                oncurrencychange={(currency) => setfrom(currency)}
                selectcurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amountdisable
                currencyoption={options}
                selectcurrency={to}
                oncurrencychange={(currency) => setto(currency)}
                amount={convertedAmount}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={convert}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
