import React, { useState, useEffect } from 'react'
import './styles/App.css'
import contentData from './config/content.json'

function App() {
  const [language, setLanguage] = useState('zh')
  const [currentSection, setCurrentSection] = useState('home')
  const [currentHarmonyIndex, setCurrentHarmonyIndex] = useState(0)

  // 从JSON配置获取内容
  const content = contentData.site[language]
  const navigation = contentData.navigation[language]
  const sections = contentData.sections[language]
  const sixHarmonies = contentData.sixHarmonies
  const articles = contentData.articles
  const assets = contentData.assets

  // 六和要素轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHarmonyIndex((prev) => (prev + 1) % sixHarmonies.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [sixHarmonies.length])

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh')
  }

  const scrollToSection = (sectionId) => {
    setCurrentSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentHarmony = sixHarmonies[currentHarmonyIndex]
  const harmonyContent = currentHarmony[language]

  return (
    <div className="App">
      {/* 导航栏 */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <img 
              src={assets.mainLogo} 
              alt="心沐六和" 
              className="main-logo"
            />
            <span className="nav-title">{content.title}</span>
          </div>
          <div className="nav-center">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`nav-link ${currentSection === 'home' ? 'active' : ''}`}
            >
              {navigation.home}
            </button>
            <button 
              onClick={() => scrollToSection('articles')} 
              className={`nav-link ${currentSection === 'articles' ? 'active' : ''}`}
            >
              {navigation.articles}
            </button>
          </div>
          <div className="nav-right">
            <span className="wechat-info">{content.wechat}</span>
            <button onClick={toggleLanguage} className="language-toggle">
              {language === 'zh' ? 'EN' : '中文'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero区域 */}
      <section id="home" className="hero" style={{backgroundImage: `url(${assets.heroBackground})`}}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">{content.title}</h1>
            <p className="hero-subtitle">{content.subtitle}</p>
            <p className="hero-description">{content.description}</p>
            <button className="cta-button">{content.cta}</button>
          </div>
        </div>
        
        {/* 诗意文字滚动 */}
        <div className="poetic-text-container">
          <div className="poetic-text">{content.poeticText}</div>
        </div>
      </section>

      {/* 品牌签名 */}
      <section className="signature-section">
        <div className="signature-text">{content.signature}</div>
      </section>

      {/* 六和总览 */}
      <section className="overview-section">
        <h2 className="section-title">{sections.overview}</h2>
        <div className="overview-container">
          <img 
            src={language === 'zh' ? assets.overviewZh : assets.overviewEn} 
            alt="六和总览" 
            className="overview-image rotating"
          />
        </div>
      </section>

      {/* 六和要素轮播 */}
      <section className="harmonies-section">
        <h2 className="section-title">{sections.harmonies}</h2>
        
        <div className="harmony-carousel">
          <div className="harmony-card" style={{borderColor: harmonyContent.color}}>
            <div className="harmony-header">
              <img 
                src={currentHarmony.logo} 
                alt={harmonyContent.title} 
                className="harmony-logo"
              />
            </div>
            
            <div className="harmony-content">
              <h3 className="harmony-title" style={{color: harmonyContent.color}}>
                {harmonyContent.title}
              </h3>
              
              <div className="harmony-details">
                <div className="harmony-field">
                  <span className="field-label">心和</span>
                  <span className="field-value">{harmonyContent.heartName}</span>
                </div>
                
                <div className="harmony-field">
                  <span className="field-label">维度</span>
                  <span className="field-value">{harmonyContent.dimension}</span>
                </div>
                
                <div className="harmony-field">
                  <span className="field-label">密码</span>
                  <span className="field-value code">{harmonyContent.code}</span>
                </div>
                
                <div className="harmony-field">
                  <span className="field-label">符号</span>
                  <span className="field-value symbol">{harmonyContent.symbol}</span>
                </div>
                
                <div className="harmony-field">
                  <span className="field-label">意象</span>
                  <span className="field-value">{harmonyContent.imagery}</span>
                </div>
                
                <div className="harmony-field">
                  <span className="field-label">色彩</span>
                  <span className="field-value">
                    {harmonyContent.colorName} 
                    <span className="color-dot" style={{backgroundColor: harmonyContent.color}}></span>
                  </span>
                </div>
                
                <div className="harmony-field">
                  <span className="field-label">境界</span>
                  <span className="field-value realm">{harmonyContent.realm}</span>
                </div>
                
                <div className="harmony-field">
                  <span className="field-label">路径</span>
                  <span className="field-value">{harmonyContent.path}</span>
                </div>
                
                <div className="harmony-field">
                  <span className="field-label">箴言</span>
                  <span className="field-value">{harmonyContent.motto}</span>
                </div>
                
                <div className="harmony-field">
                  <span className="field-label">启悟</span>
                  <span className="field-value">{harmonyContent.enlightenment}</span>
                </div>
                
                <div className="harmony-field">
                  <span className="field-label">心语</span>
                  <span className="field-value heart-words">{harmonyContent.heartWords}</span>
                </div>
                
                <div className="harmony-field">
                  <span className="field-label">阐释</span>
                  <span className="field-value interpretation">{harmonyContent.interpretation}</span>
                </div>
              </div>
              
              <img 
                src={currentHarmony.image} 
                alt={harmonyContent.title} 
                className="harmony-image"
              />
            </div>
          </div>
          
          {/* 轮播指示器 */}
          <div className="carousel-indicators">
            {sixHarmonies.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentHarmonyIndex ? 'active' : ''}`}
                onClick={() => setCurrentHarmonyIndex(index)}
                style={{
                  backgroundColor: index === currentHarmonyIndex ? 
                    sixHarmonies[index][language].color : 'rgba(255,255,255,0.3)'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 专栏文章 */}
      <section id="articles" className="articles-section">
        <h2 className="section-title">{navigation.articles}</h2>
        <div className="articles-grid">
          {articles.map((article) => (
            <div key={article.id} className="article-card">
              <img 
                src={article.image} 
                alt={article[language].title} 
                className="article-image"
              />
              <div className="article-content">
                <h3 className="article-title">{article[language].title}</h3>
                <p className="article-subtitle">{article[language].subtitle}</p>
                <p className="article-excerpt">{article[language].excerpt}</p>
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="read-more-link"
                >
                  {article[language].readMore}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 页脚 */}
      <footer className="footer">
        <div className="footer-content">
          <p className="copyright">{content.copyright}</p>
          <p className="signature">{content.signature}</p>
        </div>
      </footer>
    </div>
  )
}

export default App

