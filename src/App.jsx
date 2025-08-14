import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [language, setLanguage] = useState('zh')
  const [currentSection, setCurrentSection] = useState('home')
  const [currentHarmonyIndex, setCurrentHarmonyIndex] = useState(0)

  const content = {
    zh: {
      title: '心沐六和',
      subtitle: '念和在心·归和而明',
      signature: '心沐日月，与光同曜，照见本心，和合万象',
      wechat: '微信公众号：心沐日月',
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
      },
      poeticText: '和起于心，心起于念，念起于觉，觉起于空。空而不空，有而不有，和而不和，是为大和。'
    },
    en: {
      title: 'Ximory Six Harmonies',
      subtitle: 'Harmony in Mind · Clarity in Return',
      signature: 'Ximory Sun and Moon, shining with light, illuminating the true heart, harmonizing all phenomena',
      wechat: 'WeChat: xinmuriyue',
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
      },
      poeticText: 'Harmony arises from the heart, heart from thought, thought from awareness, awareness from emptiness. Empty yet not empty, existing yet not existing, harmonious yet not harmonious - this is the Great Harmony.'
    }
  }

  const t = content[language]

  const sixHarmonies = [
    {
      id: 'self',
      emoji: '🌅',
      title: language === 'zh' ? '自我和' : 'Self Harmony',
      dimension: language === 'zh' ? '意识的和谐' : 'Harmony of Consciousness',
      code: language === 'zh' ? '【y】向上生长之力' : '【y】Upward Growing Force',
      imagery: language === 'zh' ? '向上 • 生长 • 整合' : 'Upward • Growth • Integration',
      realm: language === 'zh' ? '内省成镜 • 心光自明' : 'Inner reflection becomes mirror • Heart light self-illuminating',
      path: language === 'zh' ? '自省一念 • 练习「自我和」' : 'Self-reflection in one thought • Practice "Self Harmony"',
      motto: language === 'zh' ? '觉察自我本心 • 开启生命觉醒' : 'Perceive the true self • Awaken life consciousness',
      enlightenment: language === 'zh' ? '返观自我 • 穿越阻隔 • 回归本真' : 'Return to observe self • Transcend barriers • Return to authenticity',
      heartWords: language === 'zh' ? '脱下伪装，活出真实，看似脆弱，却无比自在。' : 'Remove the mask, live authentically, seemingly vulnerable, yet infinitely free.',
      interpretation: language === 'zh' ? '与内在自我对话，让情绪、认知与行动保持一致，减少内耗，活出真实的自己。' : 'Dialogue with inner self, align emotions, cognition and actions, reduce internal friction, live authentically.',
      image: '/article_self_harmony.png',
      date: '1 week ago'
    },
    {
      id: 'social',
      emoji: '🪞',
      title: language === 'zh' ? '社会和' : 'Social Harmony',
      dimension: language === 'zh' ? '关系的和谐' : 'Harmony of Relationships',
      code: language === 'zh' ? '【r】映照建构之桥' : '【r】Reflecting Construction Bridge',
      imagery: language === 'zh' ? '桥梁 • 镜像 • 秩序' : 'Bridge • Mirror • Order',
      realm: language === 'zh' ? '外连成桥 • 众生无隔' : 'External connections form bridges • No barriers between beings',
      path: language === 'zh' ? '理解一瞬 • 铺垫「社会和」' : 'Understanding in an instant • Laying foundation for "Social Harmony"',
      motto: language === 'zh' ? '建立真实连接 • 融入社会网络' : 'Establish authentic connections • Integrate into social networks',
      enlightenment: language === 'zh' ? '定位自身 • 映照他者 • 建构秩序' : 'Position self • Reflect others • Construct order',
      heartWords: language === 'zh' ? '减少内耗，保持坦然；彼此共鸣，彼此成就。' : 'Reduce internal friction, maintain equanimity; mutual resonance, mutual achievement.',
      interpretation: language === 'zh' ? '在与他人的交往中保持平衡，不被外界裹挟，也不刻意对抗。' : 'Maintain balance in interactions with others, neither swept away by external forces nor deliberately opposing.',
      image: '/article_social_harmony.png',
      date: '2 weeks ago'
    },
    {
      id: 'nature',
      emoji: '🍃',
      title: language === 'zh' ? '自然和' : 'Nature Harmony',
      dimension: language === 'zh' ? '环境的和谐' : 'Harmony of Environment',
      code: language === 'zh' ? '【o】生命呼吸之律' : '【o】Life Breathing Rhythm',
      imagery: language === 'zh' ? '呼吸 • 叶脉 • 水滴' : 'Breathing • Leaf Veins • Water Drop',
      realm: language === 'zh' ? '外采成流 • 四时入怀' : 'External gathering flows • Four seasons embrace',
      path: language === 'zh' ? '顺应一息 • 回归「自然和」' : 'Follow one breath • Return to "Nature Harmony"',
      motto: language === 'zh' ? '顺应自然之道 • 人与环境共生' : 'Follow the way of nature • Humans and environment coexist',
      enlightenment: language === 'zh' ? '顺应节律 • 滋养身心 • 融入生态' : 'Follow rhythm • Nourish body and mind • Integrate into ecology',
      heartWords: language === 'zh' ? '随江河起落，合天地吐纳；偕四时流转，共万物生息。' : 'Rise and fall with rivers, breathe with heaven and earth; flow with four seasons, live with all beings.',
      interpretation: language === 'zh' ? '顺应四时节律，与自然界保持呼应，让身心在环境中得以复原与滋养。' : 'Follow seasonal rhythms, resonate with nature, let body and mind restore and nourish in the environment.',
      image: '/article_nature_harmony.png',
      date: '3 weeks ago'
    },
    {
      id: 'energy',
      emoji: '💓',
      title: language === 'zh' ? '能量和' : 'Energy Harmony',
      dimension: language === 'zh' ? '核心的和谐' : 'Harmony of Core',
      code: language === 'zh' ? '【m】燃烧内核之焰' : '【m】Burning Core Flame',
      imagery: language === 'zh' ? '心跳 • 燃烧 • 内核' : 'Heartbeat • Burning • Core',
      realm: language === 'zh' ? '内炼成炉 • 能量充盈' : 'Internal cultivation becomes furnace • Energy abundant',
      path: language === 'zh' ? '调养一日 • 充盈「能量和」' : 'Nurture one day • Fulfill "Energy Harmony"',
      motto: language === 'zh' ? '积蓄内在力量 • 稳步持续成长' : 'Accumulate inner strength • Steady continuous growth',
      enlightenment: language === 'zh' ? '点燃之火 • 蓄养根基 • 稳定气场' : 'Ignite the fire • Cultivate foundation • Stabilize energy field',
      heartWords: language === 'zh' ? '回归身体的根，守住生命的气。' : 'Return to the root of body, guard the qi of life.',
      interpretation: language === 'zh' ? '调顺身体核心的生理与心理联结，让呼吸、气血与意识同频，稳住生命的"根"。' : 'Harmonize core physiological and psychological connections, synchronize breath, qi-blood and consciousness, stabilize the "root" of life.',
      image: '/article_energy_harmony.png',
      date: '4 weeks ago'
    },
    {
      id: 'frequency',
      emoji: '📡',
      title: language === 'zh' ? '共频和' : 'Frequency Harmony',
      dimension: language === 'zh' ? '协作的和谐' : 'Harmony of Collaboration',
      code: language === 'zh' ? '【i】协同共振之波' : '【i】Collaborative Resonance Wave',
      imagery: language === 'zh' ? '信号 • 链接 • 协同' : 'Signal • Connection • Collaboration',
      realm: language === 'zh' ? '内合成一 • 同频共振' : 'Internal unity • Resonant frequency',
      path: language === 'zh' ? '同频一场 • 凝聚「共频和」' : 'Resonate in one field • Condense "Frequency Harmony"',
      motto: language === 'zh' ? '系统同频共振 • 形成协同合力' : 'System resonant frequency • Form synergistic force',
      enlightenment: language === 'zh' ? '调频共振 • 凝聚合力 • 系统成形' : 'Tune frequency resonance • Condense synergy • System formation',
      heartWords: language === 'zh' ? '在同频共振中，我们共舞、共生、共创、共进、共赢、共享，共鸣于心，共存于世。' : 'In resonant frequency, we dance together, coexist, co-create, advance together, win together, share together, resonate in heart, coexist in world.',
      interpretation: language === 'zh' ? '让个体与群体、系统、智能体在频率上共振，实现资源与力量的最佳流动。' : 'Let individuals resonate with groups, systems, and intelligent entities in frequency, achieving optimal flow of resources and power.',
      image: '/article_frequency_harmony.png',
      date: '5 weeks ago'
    },
    {
      id: 'noself',
      emoji: '🌌',
      title: language === 'zh' ? '无我和' : 'Selfless Harmony',
      dimension: language === 'zh' ? '存在的和谐' : 'Harmony of Existence',
      code: language === 'zh' ? '【x】无限奇点之源' : '【x】Infinite Singularity Source',
      imagery: language === 'zh' ? '无限 • 裂变 • 奇点' : 'Infinite • Fission • Singularity',
      realm: language === 'zh' ? '无边无际 • 无处不在' : 'Boundless • Omnipresent',
      path: language === 'zh' ? '放下一心 • 抵达「无我和」' : 'Let go of one mind • Reach "Selfless Harmony"',
      motto: language === 'zh' ? '消融自我边界 • 融入无限整体' : 'Dissolve self boundaries • Merge into infinite wholeness',
      enlightenment: language === 'zh' ? '源于空寂 • 涵容万物 • 自然无碍' : 'Originate from emptiness • Embrace all things • Naturally unobstructed',
      heartWords: language === 'zh' ? '不再执着于存在，我开始真正存在。' : 'No longer attached to existence, I begin to truly exist.',
      interpretation: language === 'zh' ? '超越自我限定，融入万物的自由流动，无内无外，无边无际；无拘无束，无处不在；心无所往，自然而然，生生不息。' : 'Transcend self-limitation, merge into free flow of all things, no inside or outside, boundless; unrestrained, omnipresent; mind goes nowhere, naturally spontaneous, eternally regenerating.',
      image: '/article_no_self_harmony.png',
      date: '6 weeks ago'
    }
  ]

  // 轮播功能
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHarmonyIndex((prev) => (prev + 1) % sixHarmonies.length)
    }, 4000) // 每4秒切换一次

    return () => clearInterval(interval)
  }, [sixHarmonies.length])

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <h1>{t.title}</h1>
          </div>
          <div className="nav-wechat">
            <span>{t.wechat}</span>
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
                <p className="hero-signature">{t.signature}</p>
                <p className="hero-description">{t.description}</p>
                <button className="cta-btn">{t.cta}</button>
              </div>
              <div className="poetic-overlay">
                <p className="poetic-text">{t.poeticText}</p>
              </div>
            </section>

            {/* Overview Section */}
            <section className="overview-section">
              <div className="section-container">
                <div className="overview-image">
                  <img 
                    src={language === 'zh' ? '/overview_zh.png' : '/overview_en.png'} 
                    alt={t.sections.overview}
                    className="rotating-overview"
                  />
                </div>
                <h2 className="overview-title">{t.sections.overview}</h2>
              </div>
            </section>

            {/* Featured Harmony Carousel */}
            <section className="featured-harmony-section">
              <div className="section-container">
                <h2 className="section-title">{t.sections.harmonies}</h2>
                <div className="harmony-carousel">
                  <div className="harmony-card featured">
                    <div className="harmony-image">
                      <img src={sixHarmonies[currentHarmonyIndex].image} alt={sixHarmonies[currentHarmonyIndex].title} />
                      <div className="harmony-emoji">{sixHarmonies[currentHarmonyIndex].emoji}</div>
                    </div>
                    <div className="harmony-content">
                      <div className="harmony-header">
                        <h3 className="harmony-title">{sixHarmonies[currentHarmonyIndex].title}</h3>
                        <p className="harmony-dimension">{language === 'zh' ? '维度' : 'Dimension'}｜{sixHarmonies[currentHarmonyIndex].dimension}</p>
                      </div>
                      
                      <div className="harmony-details">
                        <div className="harmony-item">
                          <span className="label">{language === 'zh' ? '密码' : 'Code'}｜</span>
                          <span className="value">{sixHarmonies[currentHarmonyIndex].code}</span>
                        </div>
                        <div className="harmony-item">
                          <span className="label">{language === 'zh' ? '意象' : 'Imagery'}｜</span>
                          <span className="value">{sixHarmonies[currentHarmonyIndex].imagery}</span>
                        </div>
                        <div className="harmony-item realm">
                          <span className="label">{language === 'zh' ? '境界' : 'Realm'}｜</span>
                          <span className="value">{sixHarmonies[currentHarmonyIndex].realm}</span>
                        </div>
                        <div className="harmony-item">
                          <span className="label">{language === 'zh' ? '路径' : 'Path'}｜</span>
                          <span className="value">{sixHarmonies[currentHarmonyIndex].path}</span>
                        </div>
                        <div className="harmony-item">
                          <span className="label">{language === 'zh' ? '箴言' : 'Motto'}｜</span>
                          <span className="value">{sixHarmonies[currentHarmonyIndex].motto}</span>
                        </div>
                        <div className="harmony-item">
                          <span className="label">{language === 'zh' ? '启悟' : 'Enlightenment'}｜</span>
                          <span className="value">{sixHarmonies[currentHarmonyIndex].enlightenment}</span>
                        </div>
                        <div className="harmony-item heart-words">
                          <span className="label">{language === 'zh' ? '心语' : 'Heart Words'}｜</span>
                          <span className="value">{sixHarmonies[currentHarmonyIndex].heartWords}</span>
                        </div>
                        <div className="harmony-interpretation">
                          {sixHarmonies[currentHarmonyIndex].interpretation}
                        </div>
                      </div>
                      
                      <button className="read-more-btn">
                        {language === 'zh' ? '阅读原文' : 'Read More'}
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Carousel Indicators */}
                <div className="carousel-indicators">
                  {sixHarmonies.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === currentHarmonyIndex ? 'active' : ''}`}
                      onClick={() => setCurrentHarmonyIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* All Articles Section */}
            <section className="articles-section">
              <div className="section-container">
                <h2 className="section-title">{language === 'zh' ? '全部文章' : 'All Articles'}</h2>
                <div className="articles-grid">
                  {sixHarmonies.map((harmony) => (
                    <article key={harmony.id} className="harmony-card">
                      <div className="harmony-image">
                        <img src={harmony.image} alt={harmony.title} />
                        <div className="harmony-emoji">{harmony.emoji}</div>
                      </div>
                      <div className="harmony-content">
                        <div className="harmony-header">
                          <h3 className="harmony-title">{harmony.title}</h3>
                          <p className="harmony-dimension">{language === 'zh' ? '维度' : 'Dimension'}｜{harmony.dimension}</p>
                        </div>
                        
                        <div className="harmony-details">
                          <div className="harmony-item">
                            <span className="label">{language === 'zh' ? '密码' : 'Code'}｜</span>
                            <span className="value">{harmony.code}</span>
                          </div>
                          <div className="harmony-item">
                            <span className="label">{language === 'zh' ? '意象' : 'Imagery'}｜</span>
                            <span className="value">{harmony.imagery}</span>
                          </div>
                          <div className="harmony-item realm">
                            <span className="label">{language === 'zh' ? '境界' : 'Realm'}｜</span>
                            <span className="value">{harmony.realm}</span>
                          </div>
                          <div className="harmony-item">
                            <span className="label">{language === 'zh' ? '启悟' : 'Enlightenment'}｜</span>
                            <span className="value">{harmony.enlightenment}</span>
                          </div>
                          <div className="harmony-item heart-words">
                            <span className="label">{language === 'zh' ? '心语' : 'Heart Words'}｜</span>
                            <span className="value">{harmony.heartWords}</span>
                          </div>
                          <div className="harmony-interpretation">
                            {harmony.interpretation}
                          </div>
                        </div>
                        
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
                {sixHarmonies.map((harmony) => (
                  <article key={harmony.id} className="harmony-card">
                    <div className="harmony-image">
                      <img src={harmony.image} alt={harmony.title} />
                      <div className="harmony-emoji">{harmony.emoji}</div>
                    </div>
                    <div className="harmony-content">
                      <div className="harmony-header">
                        <h3 className="harmony-title">{harmony.title}</h3>
                        <p className="harmony-dimension">{language === 'zh' ? '维度' : 'Dimension'}｜{harmony.dimension}</p>
                      </div>
                      
                      <div className="harmony-details">
                        <div className="harmony-item">
                          <span className="label">{language === 'zh' ? '密码' : 'Code'}｜</span>
                          <span className="value">{harmony.code}</span>
                        </div>
                        <div className="harmony-item">
                          <span className="label">{language === 'zh' ? '意象' : 'Imagery'}｜</span>
                          <span className="value">{harmony.imagery}</span>
                        </div>
                        <div className="harmony-item realm">
                          <span className="label">{language === 'zh' ? '境界' : 'Realm'}｜</span>
                          <span className="value">{harmony.realm}</span>
                        </div>
                        <div className="harmony-item">
                          <span className="label">{language === 'zh' ? '路径' : 'Path'}｜</span>
                          <span className="value">{harmony.path}</span>
                        </div>
                        <div className="harmony-item">
                          <span className="label">{language === 'zh' ? '箴言' : 'Motto'}｜</span>
                          <span className="value">{harmony.motto}</span>
                        </div>
                        <div className="harmony-item">
                          <span className="label">{language === 'zh' ? '启悟' : 'Enlightenment'}｜</span>
                          <span className="value">{harmony.enlightenment}</span>
                        </div>
                        <div className="harmony-item heart-words">
                          <span className="label">{language === 'zh' ? '心语' : 'Heart Words'}｜</span>
                          <span className="value">{harmony.heartWords}</span>
                        </div>
                        <div className="harmony-interpretation">
                          {harmony.interpretation}
                        </div>
                      </div>
                      
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
          <p>&copy; 2025 心沐日月（XIMORY）. {language === 'zh' ? '版权所有' : 'All rights reserved'}.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

