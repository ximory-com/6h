import React, { useState } from 'react'
import './App.css'

function App() {
  const [language, setLanguage] = useState('zh')
  const [currentSection, setCurrentSection] = useState('home')

  const content = {
    zh: {
      title: '心沐六和',
      subtitle: '念和在心·归和而明',
      description: '在这个快节奏的时代，我们常常迷失在外在的纷扰中，忘记了内心的声音。心沐六和，是一次深入内心的探索之旅，带您从内在觉醒到宇宙和谐，走上一条完整的修行之路。',
      cta: '开始探索',
      nav: {
        home: '首页',
        articles: '专栏文章',
        about: '关于',
        contact: '联系'
      },
      sections: {
        features: '专栏特色',
        overview: '六和总览',
        harmonies: '六和要素'
      }
    },
    en: {
      title: 'Ximory Six Harmonies',
      subtitle: 'Harmony in Mind · Clarity in Return',
      description: 'In this fast-paced era, we often lose ourselves in external distractions, forgetting our inner voice. Ximory Six Harmonies is a journey of deep inner exploration, guiding you from inner awakening to cosmic harmony on a complete path of cultivation.',
      cta: 'Begin Exploration',
      nav: {
        home: 'Home',
        articles: 'Articles',
        about: 'About',
        contact: 'Contact'
      },
      sections: {
        features: 'Column Features',
        overview: 'Six Harmonies Overview',
        harmonies: 'Six Harmonies Elements'
      }
    }
  }

  const t = content[language]

  const sixHarmonies = [
    {
      id: 'awakening',
      title: language === 'zh' ? '觉醒之路' : 'Awakening Path',
      subtitle: language === 'zh' ? '开启·觉醒之路，从和开始' : 'Begin the awakening journey from harmony',
      description: language === 'zh' ? '在这个充满分裂与对立的世界中，我们如何找到内心的平静与和谐？本篇文章将为您开启一扇通往内在觉醒的大门。' : 'In this world full of division and opposition, how do we find inner peace and harmony? This article will open a door to inner awakening for you.',
      image: '/article_awakening_path.png',
      date: '07/26'
    },
    {
      id: 'self',
      title: language === 'zh' ? '第一章 | 自我和' : 'Chapter 1 | Self Harmony',
      subtitle: language === 'zh' ? '与己的和解' : 'Reconciliation with oneself',
      description: language === 'zh' ? '真正的和谐始于与自己的和解，接纳自己的光明与阴影。当我们学会内在的和谐设定了基础。' : 'True harmony begins with reconciliation with oneself, accepting both light and shadow. When we learn inner harmony, we set the foundation.',
      image: '/article_self_harmony.png',
      date: '1 week ago'
    },
    {
      id: 'social',
      title: language === 'zh' ? '第二章 | 社会和' : 'Chapter 2 | Social Harmony',
      subtitle: language === 'zh' ? '与他人的和谐' : 'Harmony with others',
      description: language === 'zh' ? '当我们与自己和解后，下一步是学会与他人和谐相处。这不仅仅是表面的礼貌，而是深层的理解与共鸣。' : 'After reconciling with ourselves, the next step is learning to live in harmony with others. This is not just surface politeness, but deep understanding and resonance.',
      image: '/article_social_harmony.png',
      date: '2 weeks ago'
    },
    {
      id: 'nature',
      title: language === 'zh' ? '第三章 | 自然和' : 'Chapter 3 | Nature Harmony',
      subtitle: language === 'zh' ? '与自然的连接' : 'Connection with nature',
      description: language === 'zh' ? '人类是自然的一部分，当我们重新连接自然，我们就找到了生命的根源和力量。' : 'Humans are part of nature. When we reconnect with nature, we find the source and power of life.',
      image: '/article_nature_harmony.png',
      date: '3 weeks ago'
    },
    {
      id: 'energy',
      title: language === 'zh' ? '第四章 | 能量和' : 'Chapter 4 | Energy Harmony',
      subtitle: language === 'zh' ? '内炼成炉，能量充盈' : 'Internal cultivation, abundant energy',
      description: language === 'zh' ? '通过修炼和调息，调和身心能量，让生命力充盈流动，达到身心灵的统一与和谐。' : 'Through cultivation and breath regulation, harmonize body-mind energy, let life force flow abundantly, achieving unity and harmony of body, mind and spirit.',
      image: '/article_energy_harmony.png',
      date: '4 weeks ago'
    },
    {
      id: 'frequency',
      title: language === 'zh' ? '第五章 | 共频和' : 'Chapter 5 | Frequency Harmony',
      subtitle: language === 'zh' ? '内合成一，同频共振' : 'Internal unity, resonant frequency',
      description: language === 'zh' ? '与宇宙频率同步，在同频共振中实现更高层次的和谐，体验万物一体的宇宙意识。' : 'Synchronize with universal frequency, achieve higher levels of harmony through resonant vibration, experience cosmic consciousness of universal oneness.',
      image: '/article_frequency_harmony.png',
      date: '5 weeks ago'
    },
    {
      id: 'noself',
      title: language === 'zh' ? '第六章 | 无我和' : 'Chapter 6 | Selfless Harmony',
      subtitle: language === 'zh' ? '无边无际，无处不在' : 'Boundless, omnipresent',
      description: language === 'zh' ? '超越个体的局限，达到无我的境界，体验纯粹的存在，实现终极的解脱与和谐。' : 'Transcend individual limitations, reach the realm of selflessness, experience pure existence, achieve ultimate liberation and harmony.',
      image: '/article_no_self_harmony.png',
      date: '6 weeks ago'
    }
  ]

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <h1>{t.title}</h1>
          </div>
          <div className="nav-menu">
            <button 
              className={currentSection === 'home' ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentSection('home')}
            >
              {t.nav.home}
            </button>
            <button 
              className={currentSection === 'articles' ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentSection('articles')}
            >
              {t.nav.articles}
            </button>
          </div>
          <div className="language-toggle">
            <button 
              className={language === 'zh' ? 'lang-btn active' : 'lang-btn'}
              onClick={() => setLanguage('zh')}
            >
              中文
            </button>
            <button 
              className={language === 'en' ? 'lang-btn active' : 'lang-btn'}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {currentSection === 'home' && (
          <>
            {/* Hero Section */}
            <section className="hero-section">
              <div className="hero-content">
                <h1 className="hero-title">{t.title}</h1>
                <p className="hero-subtitle">{t.subtitle}</p>
                <p className="hero-description">{t.description}</p>
                <button className="cta-btn">{t.cta}</button>
              </div>
            </section>

            {/* Overview Section */}
            <section className="overview-section">
              <div className="section-container">
                <h2 className="section-title">{t.sections.overview}</h2>
                <div className="overview-image">
                  <img 
                    src={language === 'zh' ? '/overview_zh.png' : '/overview_en.png'} 
                    alt={t.sections.overview}
                  />
                </div>
              </div>
            </section>

            {/* Articles Section */}
            <section className="articles-section">
              <div className="section-container">
                <h2 className="section-title">{t.sections.harmonies}</h2>
                <div className="articles-grid">
                  {sixHarmonies.map((article) => (
                    <article key={article.id} className="article-card">
                      <div className="article-image">
                        <img src={article.image} alt={article.title} />
                      </div>
                      <div className="article-content">
                        <div className="article-meta">
                          <span className="article-date">{article.date}</span>
                        </div>
                        <h3 className="article-title">{article.title}</h3>
                        <p className="article-subtitle">{article.subtitle}</p>
                        <p className="article-description">{article.description}</p>
                        <button className="read-more-btn">
                          {language === 'zh' ? '阅读原文' : 'Read More'}
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {currentSection === 'articles' && (
          <section className="articles-page">
            <div className="section-container">
              <h2 className="page-title">{t.nav.articles}</h2>
              <div className="articles-grid">
                {sixHarmonies.map((article) => (
                  <article key={article.id} className="article-card">
                    <div className="article-image">
                      <img src={article.image} alt={article.title} />
                    </div>
                    <div className="article-content">
                      <div className="article-meta">
                        <span className="article-date">{article.date}</span>
                      </div>
                      <h3 className="article-title">{article.title}</h3>
                      <p className="article-subtitle">{article.subtitle}</p>
                      <p className="article-description">{article.description}</p>
                      <button className="read-more-btn">
                        {language === 'zh' ? '阅读原文' : 'Read More'}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 {t.title}. {language === 'zh' ? '版权所有' : 'All rights reserved'}.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

