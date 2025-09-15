import React from 'react';
import ArticleCard from './ArticleCard';

const ArticlesList = ({ articles, language, title }) => {
  // 确保文章数据存在
  if (!articles || articles.length === 0) {
    return (
      <section id="articles" className="articles-section">
        <h2 className="section-title">{title}</h2>
        <div className="no-articles">
          <p>{language === 'zh' ? '暂无文章' : 'No articles available'}</p>
        </div>
      </section>
    );
  }

  // 确保文章数据是数组
  const articlesArray = Array.isArray(articles) ? articles : Object.values(articles);

  return (
    <section id="articles" className="articles-section">
      <h2 className="section-title">{title}</h2>
      <div className="articles-grid">
        {articlesArray.map((article, index) => (
          <ArticleCard 
            key={article.id || `article-${index}`} 
            article={article} 
            language={language} 
          />
        ))}
      </div>
    </section>
  );
};

export default ArticlesList;

