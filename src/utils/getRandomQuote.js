import quotesJson from './quotes.js';

// helper function for getting a random quote from quotes
export const getRandomQuote = () => {
  const quotes = quotesJson;
  let j = Math.floor(Math.random() * quotes.length);
  return quotes[j];
};
