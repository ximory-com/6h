import React from 'react';

const ArticleCard = ({ article, language }) => {
  // 确保文章数据存在
  if (!article) {
    return null;
  }

  // 获取当前语言的文章数据，如果不存在则使用另一种语言
  const articleData = article[language] || article[language === 'zh' ? 'en' : 'zh'] || {};
  
  // 确保所有必要的字段都存在
  const title = articleData.title || '未命名文章';
  const subtitle = articleData.subtitle || '';
  const excerpt = articleData.excerpt || '暂无摘要';
  const readMore = language === 'zh' ? '阅读原文' : 'Read More';
  
  // 使用绝对路径处理图片
  let imageUrl = '/images/article_placeholder.png';
  if (article.image) {
    // 如果图片路径是相对路径，转换为绝对路径
    imageUrl = article.image.startsWith('/') ? article.image : `/${article.image}`;
  }
      
  // 确保文章链接存在
  const articleUrl = article.url || '#';

  return (
    <div className="article-card">
      <div className="article-image-container">
        <img 
          src={imageUrl} 
          alt={title} 
          className="article-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/article_placeholder.png';
          }}
        />
      </div>
      <div className="article-content">
        <h3 className="article-title">{title}</h3>
        {subtitle && <p className="article-subtitle">{subtitle}</p>}
        <p className="article-excerpt">{excerpt}</p>
        <a 
          href={articleUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="read-more-link"
        >
          {readMore}
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;

