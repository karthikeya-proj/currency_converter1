// src/components/ExchangeRateChart.jsx
import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

export default function ExchangeRateChart({ fromCurrency, toCurrency }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function fetchHistoricalRates() {
      setLoading(true);
      setErrorMsg("");

      try {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 7);

        const format = (date) => date.toISOString().split("T")[0];
        const url = `https://api.exchangerate.host/timeseries?start_date=${format(startDate)}&end_date=${format(endDate)}&base=${fromCurrency}&symbols=${toCurrency}`;

        const res = await fetch(url);
        const json = await res.json();

        if (!json.success || !json.rates) {
          throw new Error("Invalid response from exchangerate.host");
        }

        const formattedData = Object.entries(json.rates).map(([date, rate]) => ({
          date,
          rate: rate[toCurrency],
        }));

        setData(formattedData);
      } catch (err) {
        console.error("Chart error:", err);
        setErrorMsg("📉 Unable to load chart data.");
      } finally {
        setLoading(false);
      }
    }

    fetchHistoricalRates();
  }, [fromCurrency, toCurrency]);

  if (loading) return <p className="text-center text-sm text-gray-500">Loading chart...</p>;
  if (errorMsg) return <p className="text-center text-sm text-red-500">{errorMsg}</p>;

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-center mb-2">📈 Exchange Rate - Last 7 Days</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="rate" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
