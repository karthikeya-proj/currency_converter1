import React, { useState } from 'react';
import { fetchRates } from '../services/fetchRates';
import { currencyList } from '../utils/currencyList';
import ExchangeRateChart from './ExchangeRateChart'; // Make sure the path is correct

export default function ConverterCard() {
  const [amount, setAmount] = useState("100000");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [converted, setConverted] = useState("");
  const [history, setHistory] = useState([]);

  const handleConvert = async () => {
    const rate = await fetchRates(fromCurrency, toCurrency);
    const result = (parseFloat(amount) * rate).toFixed(2);
    setConverted(result);

    const newEntry = {
      amount,
      from: fromCurrency,
      to: toCurrency,
      result,
      time: new Date().toLocaleTimeString()
    };
    setHistory([newEntry, ...history.slice(0, 4)]);
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="w-full min-h-screen p-4 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl text-gray-800 mt-10 sm:mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-900">💱 Currency Converter</h2>

        <div className="flex flex-col gap-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter amount"
          />

          <div className="flex flex-col sm:flex-row gap-2">
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="flex-1 p-3 rounded-lg border border-gray-300"
            >
              {currencyList.map(c => (
                <option key={c.code} value={c.code}>{c.label}</option>
              ))}
            </select>

            <button
              onClick={handleSwap}
              className="p-2 bg-blue-100 hover:bg-blue-200 rounded-full self-center"
            >
              ⇄
            </button>

            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="flex-1 p-3 rounded-lg border border-gray-300"
            >
              {currencyList.map(c => (
                <option key={c.code} value={c.code}>{c.label}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleConvert}
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold transition"
          >
            Convert
          </button>

          {converted && (
            <>
              <div className="text-xl font-bold text-center text-green-700">
                💰 {amount} {fromCurrency} = {converted} {toCurrency}
              </div>

              {/* Show the chart below conversion result */}
              <ExchangeRateChart fromCurrency={fromCurrency} toCurrency={toCurrency} />
            </>
          )}
        </div>

        {history.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">🕒 Recent Conversions</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              {history.map((entry, i) => (
                <li key={i} className="border-b pb-1">
                  {entry.amount} {entry.from} → {entry.result} {entry.to} at {entry.time}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
