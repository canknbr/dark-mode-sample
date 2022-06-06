import React, { useState, useEffect } from 'react';
import Article from './Article';
import data from './data';
const App = () => {
  const getTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
  };
  const [articles, setArticles] = useState([]);
  const [theme, setTheme] = useState(getTheme());
  useEffect(() => {
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  useEffect(() => {
    setArticles(data);
  }, []);
  const handleToggle = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };
  return (
    <main>
      <nav className="nav-center">
        <h1 className="title">Overreacted</h1>
        <button onClick={handleToggle} className="btn">
          Toggle
        </button>
      </nav>
      <section className="articles">
        {articles.map(article => {
          return <Article key={article.id} {...article} />;
        })}
      </section>
    </main>
  );
};

export default App;
