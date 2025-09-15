import React, { useState, useEffect } from 'react'
import './styles/App.css'
import contentData from './config/content.json'
import ArticlesList from './components/ArticlesList'
import HarmoniesCarousel from './components/HarmoniesCarousel'

function App() {
  const [language, setLanguage] = useState('zh')
  const [currentSection, setCurrentSection] = useState('home')

  // 从JSON配置获取内容
  const content = contentData.site[language]
  const navigation = contentData.navigation[language]
  const sections = contentData.sections[language]
  const sixHarmonies = contentData.sixHarmonies
  const articles = contentData.articles
  const assets = contentData.assets

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

      {/* 六和要素轮播 - 使用新组件 */}
      <HarmoniesCarousel 
        harmonies={sixHarmonies} 
        language={language} 
        title={sections.harmonies} 
      />

      {/* 专栏文章 - 使用新组件 */}
      <ArticlesList 
        articles={articles} 
        language={language} 
        title={navigation.articles} 
      />

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

