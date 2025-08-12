import React, { useState } from 'react'
import './App.css'

// 导入图片
import heroBackground from './assets/hero_background_optimized.png'
import overviewZh from './assets/overview_zh.png'
import overviewEn from './assets/overview_en.png'

// 导入组件
import ArticleList from './components/ArticleList'
import ArticleDetail from './components/ArticleDetail'

function App() {
  const [language, setLanguage] = useState('zh')
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedArticle, setSelectedArticle] = useState(null)

  // 六和要素数据
  const harmoniesData = {
    zh: [
      {
        name: "自我和",
        emoji: "🌅",
        essence: "内省成镜，心光自明",
        heartLanguage: "脱下伪装，活出真实，看似脆弱，却无比自在。",
        description: "与内在自我对话，让情绪、认知与行动保持一致，减少内耗，活出真实的自己。",
        keywords: ["自我接纳", "内在平衡", "阴影整合", "自我觉察"]
      },
      {
        name: "社会和",
        emoji: "🪞",
        essence: "外连成桥，众生无隔",
        heartLanguage: "减少内耗，保持坦然；彼此共鸣，彼此成就。",
        description: "在与他人的交往中保持平衡，不被外界裹挟，也不刻意对抗。",
        keywords: ["人际和谐", "慈悲心", "理解包容", "关系平衡"]
      },
      {
        name: "自然和",
        emoji: "🍃",
        essence: "外采成流，四时入怀",
        heartLanguage: "随江河起落，合天地吐纳；偕四时流转，共万物生息。",
        description: "顺应四时节律，与自然界保持呼应，让身心在环境中得以复原与滋养。",
        keywords: ["自然连接", "天地能量", "四季智慧", "生态意识"]
      },
      {
        name: "能量和",
        emoji: "💓",
        essence: "内炼成炉，能量充盈",
        heartLanguage: "回归身体的根，守住生命的气。",
        description: "调顺身体核心的生理与心理联结，让呼吸、气血与意识同频，稳住生命的根。",
        keywords: ["能量调和", "身心灵统一", "生命力流动", "正念练习"]
      },
      {
        name: "共频和",
        emoji: "📡",
        essence: "内合成一，同频共振",
        heartLanguage: "在同频共振中，我们共舞、共生、共创、共进、共赢、共享，共鸣于心，共存于世。",
        description: "让个体与群体、系统、智能体在频率上共振，实现资源与力量的最佳流动。",
        keywords: ["宇宙共振", "频率同步", "万物一体", "宇宙意识"]
      },
      {
        name: "无我和",
        emoji: "🌌",
        essence: "无边无际，无处不在",
        heartLanguage: "不再执着于存在，我开始真正存在。",
        description: "超越自我限定，融入万物的自由流动，无内无外，无边无际；无拘无束，无处不在；心无所往，自然而然，生生不息。",
        keywords: ["无我境界", "超越二元", "纯粹存在", "终极解脱"]
      }
    ],
    en: [
      {
        name: "Self Harmony",
        emoji: "🌅",
        essence: "Inner reflection becomes mirror, heart light self-illuminates",
        heartLanguage: "Remove the disguise, live authentically, seemingly vulnerable, yet infinitely free.",
        description: "Dialogue with the inner self, keeping emotions, cognition and actions consistent, reducing internal friction, living as your true self.",
        keywords: ["Self-acceptance", "Inner balance", "Shadow integration", "Self-awareness"]
      },
      {
        name: "Social Harmony",
        emoji: "🪞",
        essence: "External connection becomes bridge, all beings without separation",
        heartLanguage: "Reduce internal friction, maintain composure; resonate with each other, achieve together.",
        description: "Maintain balance in interactions with others, neither being swept away by external forces nor deliberately opposing.",
        keywords: ["Interpersonal harmony", "Compassion", "Understanding", "Relationship balance"]
      },
      {
        name: "Nature Harmony",
        emoji: "🍃",
        essence: "External gathering becomes flow, four seasons embrace",
        heartLanguage: "Rise and fall with rivers, breathe with heaven and earth; flow with four seasons, live with all things.",
        description: "Follow the rhythm of four seasons, maintain resonance with nature, allowing body and mind to restore and nourish in the environment.",
        keywords: ["Nature connection", "Earth energy", "Seasonal wisdom", "Ecological awareness"]
      },
      {
        name: "Energy Harmony",
        emoji: "💓",
        essence: "Internal cultivation becomes furnace, energy abundant",
        heartLanguage: "Return to the root of the body, guard the qi of life.",
        description: "Harmonize the physiological and psychological connection of the body's core, let breathing, qi-blood and consciousness synchronize, stabilize the root of life.",
        keywords: ["Energy balance", "Body-mind-spirit unity", "Life force flow", "Mindfulness practice"]
      },
      {
        name: "Frequency Harmony",
        emoji: "📡",
        essence: "Internal unity becomes one, same frequency resonance",
        heartLanguage: "In same frequency resonance, we dance together, live together, create together, advance together, win together, share together, resonate in heart, coexist in world.",
        description: "Let individuals resonate with groups, systems, and intelligent entities in frequency, achieving optimal flow of resources and forces.",
        keywords: ["Universal resonance", "Frequency sync", "Universal oneness", "Cosmic consciousness"]
      },
      {
        name: "Egoless Harmony",
        emoji: "🌌",
        essence: "Boundless limitless, omnipresent",
        heartLanguage: "No longer attached to existence, I begin to truly exist.",
        description: "Transcend self-limitation, merge into the free flow of all things, no inside no outside, boundless limitless; unrestrained unbounded, omnipresent; mind goes nowhere, naturally spontaneous, eternally regenerating.",
        keywords: ["Egoless state", "Beyond duality", "Pure being", "Ultimate liberation"]
      }
    ]
  }

  // 获取当前语言的总览图
  const getOverviewImage = () => {
    return language === 'zh' ? overviewZh : overviewEn
  }

  // 处理文章选择
  const handleArticleSelect = (article) => {
    setSelectedArticle(article)
    setCurrentPage('article-detail')
  }

  // 处理返回文章列表
  const handleBackToArticles = () => {
    setSelectedArticle(null)
    setCurrentPage('articles')
  }

  // 六和要素卡片组件
  const HarmonyCard = ({ harmony }) => (
    <div className="harmony-card">
      <div className="harmony-emoji">{harmony.emoji}</div>
      <h3>{harmony.name}</h3>
      <p className="harmony-essence">{harmony.essence}</p>
      <p className="harmony-heart-language">"{harmony.heartLanguage}"</p>
      <p className="harmony-description">{harmony.description}</p>
      <div className="harmony-keywords">
        {harmony.keywords.map((keyword, index) => (
          <span key={index} className="keyword">{keyword}</span>
        ))}
      </div>
    </div>
  )

  // 首页内容
  const HomePage = () => (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero" style={{backgroundImage: `url(${heroBackground})`}}>
        <div className="hero-content">
          <h1>{language === 'zh' ? '心沐六和' : 'Ximory Six Harmonies'}</h1>
          <h2>{language === 'zh' ? '念和在心·归和而明' : 'Harmony in Mind · Clarity in Return'}</h2>
          <p className="core-philosophy">
            {language === 'zh' ? '念和在心·归和而明' : 'Harmony in Mind · Clarity in Return'}
          </p>
          <p className="hero-description">
            {language === 'zh' 
              ? '在这个快节奏的时代，我们常常迷失在外在的纷扰中，忘记了内心的声音。心沐六和，是一次深入内心的探索之旅，带您从内在觉醒到宇宙和谐，走上一条完整的修行之路。'
              : 'In this fast-paced era, we often lose ourselves in external distractions, forgetting our inner voice. Ximory Six Harmonies is a journey of deep inner exploration, guiding you from inner awakening to cosmic harmony on a complete path of cultivation.'
            }
          </p>
          <button className="cta-button" onClick={() => setCurrentPage('articles')}>
            {language === 'zh' ? '开始探索' : 'Begin Exploration'}
          </button>
        </div>
      </section>

      {/* 专栏特色 */}
      <section className="features">
        <div className="container">
          <h2>{language === 'zh' ? '专栏特色' : 'Column Features'}</h2>
          <p className="section-description">
            {language === 'zh' ? '念和在心·归和而明，一条完整的修行之路' : 'Harmony in Mind · Clarity in Return, a complete path of cultivation'}
          </p>
        </div>
      </section>

      {/* 六和总览 */}
      <section className="overview">
        <div className="container">
          <h2>{language === 'zh' ? '六和总览' : 'Six Harmonies Overview'}</h2>
          <p className="section-description">
            {language === 'zh' ? '心沐六和的完整体系图解' : 'Complete system diagram of Ximory Six Harmonies'}
          </p>
          <div className="overview-image">
            <img src={getOverviewImage()} alt={language === 'zh' ? '六和总览' : 'Six Harmonies Overview'} />
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
            {harmoniesData[language].map((harmony, index) => (
              <HarmonyCard key={index} harmony={harmony} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )

  // 关于页面
  const AboutPage = () => (
    <div className="page about-page">
      <div className="container">
        <h1>{language === 'zh' ? '关于专栏' : 'About the Column'}</h1>
        <div className="about-content">
          <div className="about-section">
            <h2>{language === 'zh' ? '专栏使命' : 'Column Mission'}</h2>
            <p>
              {language === 'zh' 
                ? '心沐六和专栏致力于探索一条温柔而深刻的觉醒之路。我们相信，真正的觉醒不是激烈的对抗，而是从分离走向融合，从冲突走向和谐的过程。'
                : 'The Ximory Six Harmonies column is dedicated to exploring a gentle yet profound path of awakening. We believe that true awakening is not fierce confrontation, but a process from separation to integration, from conflict to harmony.'
              }
            </p>
          </div>
          
          <div className="about-section">
            <h2>{language === 'zh' ? '核心理念' : 'Core Philosophy'}</h2>
            <p className="core-philosophy-text">
              {language === 'zh' ? '念和在心·归和而明' : 'Harmony in Mind · Clarity in Return'}
            </p>
            <p>
              {language === 'zh' 
                ? '这是我们的总体思想。通过六个维度的和谐修行——自我和、社会和、自然和、能量和、共频和、无我和，最终达到内在觉醒与宇宙和谐的统一状态。'
                : 'This is our overall philosophy. Through six dimensions of harmonious cultivation—Self Harmony, Social Harmony, Nature Harmony, Energy Harmony, Frequency Harmony, Egoless Harmony—ultimately achieving a unified state of inner awakening and cosmic harmony.'
              }
            </p>
          </div>

          <div className="about-section">
            <h2>{language === 'zh' ? '适合人群' : 'Suitable Audience'}</h2>
            <ul>
              <li>{language === 'zh' ? '寻求内在成长和觉醒的探索者' : 'Seekers of inner growth and awakening'}</li>
              <li>{language === 'zh' ? '希望改善人际关系的朋友' : 'Friends hoping to improve interpersonal relationships'}</li>
              <li>{language === 'zh' ? '追求身心灵平衡的修行者' : 'Practitioners pursuing body-mind-spirit balance'}</li>
              <li>{language === 'zh' ? '对东方哲学和现代心理学感兴趣的读者' : 'Readers interested in Eastern philosophy and modern psychology'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  // 联系页面
  const ContactPage = () => (
    <div className="page contact-page">
      <div className="container">
        <h1>{language === 'zh' ? '联系我们' : 'Contact Us'}</h1>
        <div className="contact-content">
          <div className="contact-section">
            <h2>{language === 'zh' ? '微信公众号' : 'WeChat Public Account'}</h2>
            <p className="contact-info">
              <strong>{language === 'zh' ? '公众号名称' : 'Account Name'}:</strong> 心沐日月
            </p>
            <p>
              {language === 'zh' 
                ? '关注我们的微信公众号，获取最新的文章更新和深度思考。'
                : 'Follow our WeChat public account for the latest article updates and deep reflections.'
              }
            </p>
          </div>

          <div className="contact-section">
            <h2>{language === 'zh' ? '交流互动' : 'Communication & Interaction'}</h2>
            <p>
              {language === 'zh' 
                ? '我们欢迎您的留言和分享。每一个真诚的交流，都是修行路上的相互滋养。'
                : 'We welcome your messages and sharing. Every sincere exchange is mutual nourishment on the path of cultivation.'
              }
            </p>
          </div>

          <div className="contact-section">
            <h2>{language === 'zh' ? '专栏理念' : 'Column Philosophy'}</h2>
            <p className="philosophy-quote">
              {language === 'zh' 
                ? '"在这里，我们一起探索内在觉醒的道路，寻找生命的和谐与平衡。念和在心，归和而明。"'
                : '"Here, we explore the path of inner awakening together, seeking harmony and balance in life. Harmony in Mind, Clarity in Return."'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  // 渲染当前页面
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'articles':
        return <ArticleList language={language} onArticleSelect={handleArticleSelect} />
      case 'article-detail':
        return <ArticleDetail article={selectedArticle} language={language} onBack={handleBackToArticles} />
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
      <nav className="navigation">
        <div className="nav-brand">
          <h1 onClick={() => setCurrentPage('home')}>
            {language === 'zh' ? '心沐六和' : 'Ximory Six Harmonies'}
          </h1>
        </div>
        <div className="nav-links">
          <button 
            className={currentPage === 'home' ? 'active' : ''} 
            onClick={() => setCurrentPage('home')}
          >
            {language === 'zh' ? '首页' : 'Home'}
          </button>
          <button 
            className={currentPage === 'articles' || currentPage === 'article-detail' ? 'active' : ''} 
            onClick={() => setCurrentPage('articles')}
          >
            {language === 'zh' ? '专栏文章' : 'Articles'}
          </button>
          <button 
            className={currentPage === 'about' ? 'active' : ''} 
            onClick={() => setCurrentPage('about')}
          >
            {language === 'zh' ? '关于专栏' : 'About'}
          </button>
          <button 
            className={currentPage === 'contact' ? 'active' : ''} 
            onClick={() => setCurrentPage('contact')}
          >
            {language === 'zh' ? '联系我们' : 'Contact'}
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

      <main>
        {renderCurrentPage()}
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            {language === 'zh' 
              ? '心沐六和，念和在心，归和而明。在这里，我们一起探索内在觉醒的道路，寻找生命的和谐与平衡。'
              : 'Ximory Six Harmonies, harmony in mind, clarity in return. Here, we explore the path of inner awakening together, seeking harmony and balance in life.'
            }
          </p>
          <p className="copyright">© 2024 {language === 'zh' ? '心沐六和' : 'Ximory Six Harmonies'}. {language === 'zh' ? '保留所有权利' : 'All rights reserved'}.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

