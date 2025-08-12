import React, { useState } from 'react'
import './App.css'

function App() {
  const [language, setLanguage] = useState('zh')

  return (
    <div className="App">
      <nav className="navigation">
        <div className="nav-brand">
          <h1>心沐六和</h1>
        </div>
        <div className="nav-links">
          <button>首页</button>
          <button>专栏文章</button>
          <button>关于专栏</button>
          <button>联系我们</button>
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

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>{language === 'zh' ? '心沐六和' : 'Ximory Six Harmonies'}</h1>
            <h2>{language === 'zh' ? '念和在心·归和而明' : 'Harmony in Mind · Clarity in Return'}</h2>
            <p className="hero-description">
              {language === 'zh' 
                ? '在这个快节奏的时代，我们常常迷失在外在的纷扰中，忘记了内心的声音。心沐六和，是一次深入内心的探索之旅。'
                : 'In this fast-paced era, we often lose ourselves in external distractions. Ximory Six Harmonies is a journey of deep inner exploration.'
              }
            </p>
            <button className="cta-button">
              {language === 'zh' ? '开始探索' : 'Begin Exploration'}
            </button>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2>{language === 'zh' ? '专栏特色' : 'Column Features'}</h2>
            <p className="section-description">
              {language === 'zh' ? '念和在心·归和而明，一条完整的修行之路' : 'Harmony in Mind · Clarity in Return, a complete path of cultivation'}
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>{language === 'zh' ? '心沐六和，念和在心，归和而明。' : 'Ximory Six Harmonies, harmony in mind, clarity in return.'}</p>
          <p className="copyright">© 2024 心沐六和. 保留所有权利.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

