import { useState } from 'react'
import './App.css'

// 导入配置数据
import contentData from './config/contentData.js'

// 导入图片
import heroBackground from './assets/hero_background_optimized.png'

// 导入组件
import ArticleList from './components/ArticleList'
import ArticleDetail from './components/ArticleDetail'

function App() {
  const [language, setLanguage] = useState('zh')
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedArticle, setSelectedArticle] = useState(null)

  // 获取当前语言的内容
  const t = (path) => {
    const keys = path.split('.')
    let value = contentData
    for (const key of keys) {
      value = value[key]?.[language] || value[key]
    }
    return value || path
  }

  // 六和要素数据 - 从配置文件获取
  const harmoniesData = contentData.harmonies.map(harmony => ({
    name: harmony[language].name,
    image: harmony.image,
    essence: harmony[language].essence,
    heartLanguage: harmony[language].heartLanguage,
    description: harmony[language].description,
    keywords: harmony[language].keywords
  }))

  // 文章数据 - 从配置文件获取
  const articlesData = contentData.articles.map(article => ({
    id: article.id,
    title: article[language].title,
    subtitle: article[language].subtitle,
    summary: article[language].summary,
    content: article[language].content,
    keywords: article[language].keywords,
    date: article.date,
    image: article.image,
    wechatUrl: article.wechatUrl,
    hasFullContent: article.hasFullContent
  }))

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh')
  }

  const navigateTo = (page) => {
    setCurrentPage(page)
    setSelectedArticle(null)
  }

  const selectArticle = (article) => {
    setSelectedArticle(article)
    setCurrentPage('article-detail')
  }

  const renderHomePage = () => (
    <>
      {/* Hero Section */}
      <section className="hero" style={{backgroundImage: `url(${heroBackground})`}}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>{t('site.title')}</h1>
            <h2>{t('site.subtitle')}</h2>
            <p className="core-philosophy">{t('site.core_philosophy')}</p>
            <p className="hero-description">{t('site.description')}</p>
            <button className="cta-button" onClick={() => navigateTo('articles')}>
              {t('site.cta')}
            </button>
          </div>
        </div>
      </section>

      {/* 专栏特色 */}
      <section className="features">
        <div className="container">
          <h2>{t('sections.features.title')}</h2>
          <div className="feature-highlight">
            <p>{t('sections.features.description')}</p>
          </div>
        </div>
      </section>

      {/* 六和总览 */}
      <section className="overview">
        <div className="container">
          <h2>{t('sections.overview.title')}</h2>
          <p className="section-description">{t('sections.overview.description')}</p>
          <div className="overview-image">
            <img 
              src={t('sections.overview.image')} 
              alt={t('sections.overview.title')}
              style={{maxWidth: '100%', height: 'auto'}}
            />
          </div>
        </div>
      </section>

      {/* 六和要素 */}
      <section className="harmonies">
        <div className="container">
          <h2>{language === 'zh' ? '六和要素' : 'Six Harmonies Elements'}</h2>
          <p className="section-description">
            {language === 'zh' ? '念和在心·归和而明的完整体系' : 'Complete system of Harmony in Mind · Clarity in Return'}
          </p>
          <div className="harmonies-grid">
            {harmoniesData.map((harmony, index) => (
              <div key={index} className="harmony-card">
                <div className="harmony-image">
                  <img src={harmony.image} alt={harmony.name} />
                </div>
                <h3>{harmony.name}</h3>
                <p className="harmony-essence">{harmony.essence}</p>
                <p className="harmony-heart-language">"{harmony.heartLanguage}"</p>
                <p className="harmony-description">{harmony.description}</p>
                <div className="harmony-keywords">
                  {harmony.keywords.map((keyword, i) => (
                    <span key={i} className="keyword">{keyword}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 精选文章预览 */}
      <section className="featured-articles">
        <div className="container">
          <h2>{t('sections.articles.title')}</h2>
          <p className="section-description">{t('sections.articles.description')}</p>
          <div className="articles-grid">
            {articlesData.slice(0, 3).map((article) => (
              <div key={article.id} className="article-card">
                <div className="article-image">
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="article-content">
                  <h3>{article.title}</h3>
                  <p className="article-subtitle">{article.subtitle}</p>
                  <p className="article-summary">{article.summary}</p>
                  <div className="article-meta">
                    <span className="article-date">{article.date}</span>
                    <div className="article-keywords">
                      {article.keywords.slice(0, 3).map((keyword, i) => (
                        <span key={i} className="keyword">{keyword}</span>
                      ))}
                    </div>
                  </div>
                  <div className="article-actions">
                    <button 
                      className="read-more-btn"
                      onClick={() => selectArticle(article)}
                    >
                      {language === 'zh' ? '阅读全文' : 'Read More'}
                    </button>
                    <a 
                      href={article.wechatUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="wechat-link-btn"
                    >
                      {language === 'zh' ? '微信原文' : 'WeChat Original'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button 
            className="view-all-button"
            onClick={() => navigateTo('articles')}
          >
            {language === 'zh' ? '查看全部文章' : 'View All Articles'}
          </button>
        </div>
      </section>
    </>
  )

  const renderAboutPage = () => (
    <section className="about-page">
      <div className="container">
        <h1>{language === 'zh' ? '关于专栏' : 'About Column'}</h1>
        <p className="page-subtitle">
          {language === 'zh' ? '念和在心·归和而明' : 'Harmony in Mind · Clarity in Return'}
        </p>
        
        <div className="about-content">
          <div className="mission-section">
            <h2>{language === 'zh' ? '专栏使命' : 'Column Mission'}</h2>
            <p>
              {language === 'zh' 
                ? '心沐六和专栏致力于探索内在觉醒与宇宙和谐的完整路径。通过六个维度的深入实践，帮助每个人找到属于自己的和谐之道。'
                : 'The Ximory Six Harmonies column is dedicated to exploring the complete path of inner awakening and cosmic harmony. Through deep practice in six dimensions, helping everyone find their own path of harmony.'
              }
            </p>
          </div>

          <div className="approach-section">
            <h2>{language === 'zh' ? '修行方法' : 'Practice Method'}</h2>
            <p>
              {language === 'zh'
                ? '不是对抗世界，而是融入生命的流动；不是战胜谁，而是与一切安然共处。从自我和谐开始，逐步扩展到社会、自然、能量、共频，最终达到无我的境界。'
                : 'Not opposing the world, but flowing with life; not conquering anyone, but peacefully coexisting with everything. Starting from self-harmony, gradually expanding to society, nature, energy, frequency, and finally reaching the realm of selflessness.'
              }
            </p>
          </div>

          <div className="audience-section">
            <h2>{language === 'zh' ? '适合人群' : 'Target Audience'}</h2>
            <ul>
              <li>{language === 'zh' ? '寻求内在平静与和谐的修行者' : 'Practitioners seeking inner peace and harmony'}</li>
              <li>{language === 'zh' ? '希望改善人际关系的朋友' : 'Friends hoping to improve interpersonal relationships'}</li>
              <li>{language === 'zh' ? '对身心灵成长感兴趣的探索者' : 'Explorers interested in mind-body-spirit growth'}</li>
              <li>{language === 'zh' ? '追求生活与工作平衡的现代人' : 'Modern people pursuing work-life balance'}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )

  const renderContactPage = () => (
    <section className="contact-page">
      <div className="container">
        <h1>{language === 'zh' ? '联系我们' : 'Contact Us'}</h1>
        <p className="page-subtitle">
          {language === 'zh' ? '与我们一起探索和谐之道' : 'Explore the path of harmony with us'}
        </p>
        
        <div className="contact-content">
          <div className="wechat-info">
            <h2>{language === 'zh' ? '微信公众号' : 'WeChat Official Account'}</h2>
            <p className="wechat-name">心沐日月</p>
            <p className="wechat-description">
              {language === 'zh' 
                ? '关注我们的微信公众号，获取最新的专栏文章和修行指导。'
                : 'Follow our WeChat official account for the latest column articles and practice guidance.'
              }
            </p>
          </div>

          <div className="interaction-section">
            <h2>{language === 'zh' ? '互动交流' : 'Interaction'}</h2>
            <p>
              {language === 'zh'
                ? '欢迎在公众号留言分享您的修行体验和感悟，我们会认真阅读每一条留言，并在合适的时候进行回复和交流。'
                : 'Welcome to leave messages on our official account to share your practice experiences and insights. We will carefully read every message and respond when appropriate.'
              }
            </p>
          </div>

          <div className="community-section">
            <h2>{language === 'zh' ? '修行社群' : 'Practice Community'}</h2>
            <p>
              {language === 'zh'
                ? '我们正在建设一个温暖的修行社群，让志同道合的朋友们可以相互支持、共同成长。敬请期待更多社群活动的推出。'
                : 'We are building a warm practice community where like-minded friends can support each other and grow together. Please look forward to more community activities.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <div className="App">
      {/* 导航栏 */}
      <nav className="navigation">
        <div className="nav-brand">
          <h1 onClick={() => navigateTo('home')}>{t('site.title')}</h1>
        </div>
        <div className="nav-links">
          <button 
            className={currentPage === 'home' ? 'active' : ''}
            onClick={() => navigateTo('home')}
          >
            {t('navigation.home')}
          </button>
          <button 
            className={currentPage === 'articles' ? 'active' : ''}
            onClick={() => navigateTo('articles')}
          >
            {t('navigation.articles')}
          </button>
          <button 
            className={currentPage === 'about' ? 'active' : ''}
            onClick={() => navigateTo('about')}
          >
            {t('navigation.about')}
          </button>
          <button 
            className={currentPage === 'contact' ? 'active' : ''}
            onClick={() => navigateTo('contact')}
          >
            {t('navigation.contact')}
          </button>
        </div>
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
      </nav>

      {/* 主要内容 */}
      <main>
        {currentPage === 'home' && renderHomePage()}
        {currentPage === 'articles' && (
          <ArticleList 
            articles={articlesData}
            language={language}
            onSelectArticle={selectArticle}
          />
        )}
        {currentPage === 'article-detail' && selectedArticle && (
          <ArticleDetail 
            article={selectedArticle}
            language={language}
            onBack={() => navigateTo('articles')}
          />
        )}
        {currentPage === 'about' && renderAboutPage()}
        {currentPage === 'contact' && renderContactPage()}
      </main>
    </div>
  )
}

export default App

