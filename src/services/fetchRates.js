export async function fetchRates(from, to) {
  const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
  const data = await res.json();
  return data.rates[to];
}