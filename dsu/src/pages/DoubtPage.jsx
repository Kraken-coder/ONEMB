import React, { useState, useEffect } from 'react';
import './dbt.css';

function DoubtPage() {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [displayedAnswer, setDisplayedAnswer] = useState('');
  const [reliability, setReliability] = useState(''); 
  const [loading, setLoading] = useState(false);
  const threshold = 40; 

  const handleQuery = async () => {
    setLoading(true);
    setDisplayedAnswer(''); // Reset displayed answer
    try {
      const response = await fetch(`http://localhost:8000/query/${query}`, {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setAnswer(data.answer);
        setReliability(data.reliability); 
      } else {
        console.error('Error fetching answer');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (answer) {
      // Split answer into words to prevent gibberish
      const words = answer.split(/(\s+)/);
      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex < words.length) {
          setDisplayedAnswer(prevText => prevText + words[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 20); // Adjust speed here - lower number = faster typing

      return () => clearInterval(interval);
    }
  }, [answer]);

  const handleGoogleSearch = () => {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(googleSearchUrl, '_blank'); 
  };

  return (
    <div className="doubt-page"> 
      <h2>Query Document</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your query"
      />
      <button onClick={handleQuery} disabled={loading}>
        {loading ? 'Fetching...' : 'Query'}
      </button>
      {displayedAnswer && <p>Answer: {displayedAnswer}</p>}
      {reliability && (
        <>
          <p>Reliability Score: {reliability}%</p>
          {reliability < threshold && (
            <button className="google-search" onClick={handleGoogleSearch}>
              Search on Google
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default DoubtPage;
