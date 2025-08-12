import React, { useState } from 'react'
import './App.css'
import { contentData } from './config/contentData.js'

// 导入图片
import heroBackground from './assets/hero_background_optimized.png'
import overviewZh from './assets/overview_zh.png'
import overviewEn from './assets/overview_en.png'
import overviewZhEn from './assets/overview_zh_en.png'

function App() {
  const [language, setLanguage] = useState('zh')
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedArticle, setSelectedArticle] = useState(null)

  // 翻译函数
  const t = (path) => {
    const keys = path.split('.')
    let value = contentData
    
    for (const key of keys) {
      if (value && value[key]) {
        value = value[key]
      } else {
        return path // 如果找不到翻译，返回原始路径
      }
    }
    
    if (value && value[language]) {
      return value[language]
    }
    
    return value || path
  }

  // 获取当前语言的总览图
  const getOverviewImage = () => {
    if (language === 'zh') return overviewZh
    if (language === 'en') return overviewEn
    return overviewZhEn
  }

  // 语言切换组件
  const LanguageSwitcher = () => (
    <div className="language-switcher">
      <button 
        className={language === 'zh' ? 'active' : ''} 
        onClick={() => setLanguage('zh')}
      >
        中文
      </button>
      <button 
        className={language === 'en' ? 'active' : ''} 
        onClick={() => setLanguage('en')}
      >
        English
      </button>
    </div>
  )

  // 导航组件
  const Navigation = () => (
    <nav className="navigation">
      <div className="nav-brand">
        <h1 onClick={() => setCurrentPage('home')}>{t('site.title')}</h1>
      </div>
      <div className="nav-links">
        <button 
          className={currentPage === 'home' ? 'active' : ''} 
          onClick={() => setCurrentPage('home')}
        >
          {t('navigation.home')}
        </button>
        <button 
          className={currentPage === 'articles' ? 'active' : ''} 
          onClick={() => setCurrentPage('articles')}
        >
          {t('navigation.articles')}
        </button>
        <button 
          className={currentPage === 'about' ? 'active' : ''} 
          onClick={() => setCurrentPage('about')}
        >
          {t('navigation.about')}
        </button>
        <button 
          className={currentPage === 'contact' ? 'active' : ''} 
          onClick={() => setCurrentPage('contact')}
        >
          {t('navigation.contact')}
        </button>
      </div>
      <LanguageSwitcher />
    </nav>
  )

  // 六和要素卡片组件
  const HarmonyCard = ({ harmonyKey, harmony }) => (
    <div className="harmony-card">
      <div className="harmony-emoji">{harmony.emoji}</div>
      <h3>{harmony.name}</h3>
      <p className="harmony-essence">{harmony.essence}</p>
      <p className="harmony-heart-language">"{harmony.heart_language}"</p>
      <p className="harmony-description">{harmony.description}</p>
      <div className="harmony-keywords">
        {harmony.keywords.map((keyword, index) => (
          <span key={index} className="keyword">{keyword}</span>
        ))}
      </div>
    </div>
  )

  // 文章卡片组件
  const ArticleCard = ({ article }) => {
    const articleData = article[language]
    return (
      <div className="article-card" onClick={() => setSelectedArticle(article)}>
        <div className="article-image">
          <img src={article.image} alt={articleData.title} />
        </div>
        <div className="article-content">
          <h3>{articleData.title}</h3>
          <p className="article-subtitle">{articleData.subtitle}</p>
          <p className="article-summary">{articleData.summary}</p>
          <div className="article-meta">
            <span className="article-date">{article.date}</span>
            <div className="article-keywords">
              {articleData.keywords.map((keyword, index) => (
                <span key={index} className="keyword">{keyword}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 首页内容
  const HomePage = () => (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero" style={{backgroundImage: `url(${heroBackground})`}}>
        <div className="hero-content">
          <h1>{t('site.title')}</h1>
          <h2>{t('site.subtitle')}</h2>
          <p className="core-philosophy">{t('site.core_philosophy')}</p>
          <p className="hero-description">{t('site.description')}</p>
          <button className="cta-button" onClick={() => setCurrentPage('articles')}>
            {t('site.cta')}
          </button>
        </div>
      </section>

      {/* 专栏特色 */}
      <section className="features">
        <div className="container">
          <h2>{t('sections.features.title')}</h2>
          <p className="section-description">{t('sections.features.description')}</p>
        </div>
      </section>

      {/* 六和总览 */}
      <section className="overview">
        <div className="container">
          <h2>{t('sections.overview.title')}</h2>
          <p className="section-description">{t('sections.overview.description')}</p>
          <div className="overview-image">
            <img src={getOverviewImage()} alt={t('sections.overview.title')} />
          </div>
        </div>
      </section>

      {/* 六和要素 */}
      <section className="harmonies">
        <div className="container">
          <h2>{language === 'zh' ? '六和要素' : 'Six Harmonies Elements'}</h2>
          <p className="section-description">
            {language === 'zh' ? '念和在心·归和而明的完整体系' : 'Complete System of Harmony in Mind · Clarity in Return'}
          </p>
          <div className="harmonies-grid">
            {Object.entries(contentData.harmonies).map(([key, harmony]) => (
              <HarmonyCard key={key} harmonyKey={key} harmony={harmony[language]} />
            ))}
          </div>
        </div>
      </section>

      {/* 精选文章 */}
      <section className="featured-articles">
        <div className="container">
          <h2>{t('sections.articles.title')}</h2>
          <p className="section-description">{t('sections.articles.description')}</p>
          <div className="articles-grid">
            {contentData.articles.slice(0, 2).map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <button className="view-all-button" onClick={() => setCurrentPage('articles')}>
            {language === 'zh' ? '查看全部文章' : 'View All Articles'}
          </button>
        </div>
      </section>
    </div>
  )

  // 文章列表页
  const ArticlesPage = () => (
    <div className="page articles-page">
      <div className="container">
        <h1>{t('sections.articles.title')}</h1>
        <p className="page-description">{t('sections.articles.description')}</p>
        <div className="articles-grid">
          {contentData.articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  )

  // 文章详情页
  const ArticleDetail = ({ article }) => {
    const articleData = article[language]
    return (
      <div className="page article-detail">
        <div className="container">
          <button className="back-button" onClick={() => setSelectedArticle(null)}>
            ← {language === 'zh' ? '返回文章列表' : 'Back to Articles'}
          </button>
          <article className="article-content">
            <header className="article-header">
              <h1>{articleData.title}</h1>
              <h2>{articleData.subtitle}</h2>
              <div className="article-meta">
                <span className="article-date">{article.date}</span>
                <div className="article-keywords">
                  {articleData.keywords.map((keyword, index) => (
                    <span key={index} className="keyword">{keyword}</span>
                  ))}
                </div>
              </div>
            </header>
            <div className="article-image">
              <img src={article.image} alt={articleData.title} />
            </div>
            <div className="article-body">
              {articleData.content.split('\\n\\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="article-footer">
              <a 
                href={article.wechatUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="wechat-link"
              >
                {language === 'zh' ? '在微信公众号阅读原文' : 'Read Original on WeChat'}
              </a>
            </div>
          </article>
        </div>
      </div>
    )
  }

  // 关于页面
  const AboutPage = () => (
    <div className="page about-page">
      <div className="container">
        <h1>{t('about.title')}</h1>
        <p className="page-subtitle">{t('about.subtitle')}</p>
        <div className="about-content">
          <section className="mission">
            <h2>{language === 'zh' ? '专栏使命' : 'Column Mission'}</h2>
            <p>{t('about.mission')}</p>
          </section>
          <section className="audience">
            <h2>{language === 'zh' ? '适合人群' : 'Target Audience'}</h2>
            <p>{t('about.audience')}</p>
          </section>
        </div>
      </div>
    </div>
  )

  // 联系页面
  const ContactPage = () => (
    <div className="page contact-page">
      <div className="container">
        <h1>{t('contact.title')}</h1>
        <p className="page-subtitle">{t('contact.subtitle')}</p>
        <div className="contact-content">
          <div className="wechat-info">
            <h2>{t('contact.wechat.title')}</h2>
            <p>{t('contact.wechat.description')}</p>
            <div className="wechat-account">
              <strong>{t('contact.wechat.account')}</strong>
            </div>
            <p className="wechat-note">{t('contact.wechat.note')}</p>
          </div>
        </div>
      </div>
    </div>
  )

  // 渲染当前页面
  const renderCurrentPage = () => {
    if (selectedArticle) {
      return <ArticleDetail article={selectedArticle} />
    }
    
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'articles':
        return <ArticlesPage />
      case 'about':
        return <AboutPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="App">
      <Navigation />
      <main>
        {renderCurrentPage()}
      </main>
      <footer className="footer">
        <div className="container">
          <p>{t('footer.description')}</p>
          <p className="copyright">{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  )
}

export default App

