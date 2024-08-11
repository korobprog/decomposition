// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const News = () => {
  const [newsList, setNewsList] = useState([]);

  // 3. Create out useEffect function
  useEffect(() => {
    try {
      fetch(
        'https://newsapi.org/v2/top-headlines?country=ru&apiKey=19fda756c8a34265b57408e22f7241cb'
      )
        .then((response) => response.json())
        .then((data) => setNewsList(data.articles));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="flex-news">
      {newsList.slice(0, 5).map((item, index) => (
        <div key={index} className="menu">
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
