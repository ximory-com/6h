import React from 'react'

const ArticleList = ({ language, onArticleSelect }) => {
  // 文章数据
  const articles = {
    zh: [
      {
        id: 'opening',
        title: '开篇｜觉醒之路，从和开始',
        subtitle: '以"合"为途，以"和"为归',
        summary: '真正的觉醒，并不是一场剧烈的革命，也不是一次惊天动地的重生。而是一个温柔的过程——从分离走向融合，从冲突走向和谐。',
        emoji: '🌅',
        date: '2025年07月26日',
        readTime: '5分钟阅读',
        keywords: ['觉醒之路', '六和概览', '融合', '和谐'],
        wechatUrl: 'https://mp.weixin.qq.com/s/...',
        hasFullContent: true
      },
      {
        id: 'self-harmony',
        title: '第一篇｜自我和',
        subtitle: '内省成镜，心光自明',
        summary: '与内在自我对话，让情绪、认知与行动保持一致，减少内耗，活出真实的自己。脱下伪装，活出真实，看似脆弱，却无比自在。',
        emoji: '🌅',
        date: '2025年07月27日',
        readTime: '8分钟阅读',
        keywords: ['自我接纳', '内在平衡', '阴影整合', '自我觉察'],
        wechatUrl: 'https://mp.weixin.qq.com/s/...',
        hasFullContent: true
      },
      {
        id: 'social-harmony',
        title: '第二篇｜社会和',
        subtitle: '外连成桥，众生无隔',
        summary: '在与他人的交往中保持平衡，不被外界裹挟，也不刻意对抗。减少内耗，保持坦然；彼此共鸣，彼此成就。',
        emoji: '🪞',
        date: '2025年07月28日',
        readTime: '7分钟阅读',
        keywords: ['人际和谐', '慈悲心', '理解包容', '关系平衡'],
        wechatUrl: 'https://mp.weixin.qq.com/s/...',
        hasFullContent: false
      },
      {
        id: 'nature-harmony',
        title: '第三篇｜自然和',
        subtitle: '外采成流，四时入怀',
        summary: '顺应四时节律，与自然界保持呼应，让身心在环境中得以复原与滋养。随江河起落，合天地吐纳；偕四时流转，共万物生息。',
        emoji: '🍃',
        date: '2025年07月29日',
        readTime: '6分钟阅读',
        keywords: ['自然连接', '天地能量', '四季智慧', '生态意识'],
        wechatUrl: 'https://mp.weixin.qq.com/s/...',
        hasFullContent: false
      },
      {
        id: 'energy-harmony',
        title: '第四篇｜能量和',
        subtitle: '内炼成炉，能量充盈',
        summary: '调顺身体核心的生理与心理联结，让呼吸、气血与意识同频，稳住生命的根。回归身体的根，守住生命的气。',
        emoji: '💓',
        date: '2025年07月30日',
        readTime: '9分钟阅读',
        keywords: ['能量调和', '身心灵统一', '生命力流动', '正念练习'],
        wechatUrl: 'https://mp.weixin.qq.com/s/...',
        hasFullContent: false
      },
      {
        id: 'frequency-harmony',
        title: '第五篇｜共频和',
        subtitle: '内合成一，同频共振',
        summary: '让个体与群体、系统、智能体在频率上共振，实现资源与力量的最佳流动。在同频共振中，我们共舞、共生、共创、共进、共赢、共享。',
        emoji: '📡',
        date: '2025年07月31日',
        readTime: '8分钟阅读',
        keywords: ['宇宙共振', '频率同步', '万物一体', '宇宙意识'],
        wechatUrl: 'https://mp.weixin.qq.com/s/...',
        hasFullContent: false
      },
      {
        id: 'egoless-harmony',
        title: '第六篇｜无我和',
        subtitle: '无边无际，无处不在',
        summary: '超越自我限定，融入万物的自由流动，无内无外，无边无际；无拘无束，无处不在。不再执着于存在，我开始真正存在。',
        emoji: '🌌',
        date: '2025年08月01日',
        readTime: '10分钟阅读',
        keywords: ['无我境界', '超越二元', '纯粹存在', '终极解脱'],
        wechatUrl: 'https://mp.weixin.qq.com/s/...',
        hasFullContent: false
      },
      {
        id: 'return-harmony',
        title: '归和篇｜念和在心·归和而明',
        subtitle: '六和归一，觉醒之路的完整体系',
        summary: '念和在心·归和而明，这是心沐六和的总体思想。从自我和到无我和，六个层次的和谐修行，最终归于一体的觉醒状态。',
        emoji: '🌟',
        date: '2025年08月02日',
        readTime: '12分钟阅读',
        keywords: ['念和在心', '归和而明', '六和归一', '觉醒之路'],
        wechatUrl: 'https://mp.weixin.qq.com/s/...',
        hasFullContent: true
      }
    ],
    en: [
      {
        id: 'opening',
        title: 'Opening | The Path of Awakening Begins with Harmony',
        subtitle: 'Through "Unity" as the Path, "Harmony" as the Return',
        summary: 'True awakening is not a violent revolution or earth-shattering rebirth, but a gentle process—from separation to integration, from conflict to harmony.',
        emoji: '🌅',
        date: 'July 26, 2025',
        readTime: '5 min read',
        keywords: ['Awakening Path', 'Six Harmonies Overview', 'Integration', 'Harmony'],
        wechatUrl: 'https://mp.weixin.qq.com/s/...',
        hasFullContent: true
      },
      {
        id: 'self-harmony',
        title: 'Chapter 1 | Self Harmony',
        subtitle: 'Inner Reflection Becomes Mirror, Heart Light Self-Illuminates',
        summary: 'Dialogue with the inner self, keeping emotions, cognition and actions consistent, reducing internal friction, living as your true self.',
        emoji: '🌅',
        date: 'July 27, 2025',
        readTime: '8 min read',
        keywords: ['Self-acceptance', 'Inner Balance', 'Shadow Integration', 'Self-awareness'],
        wechatUrl: 'https://mp.weixin.qq.com/s/...',
        hasFullContent: true
      },
      {
        id: 'social-harmony',
        title: 'Chapter 2 | Social Harmony',
        subtitle: 'External Connection Becomes Bridge, All Beings Without Separation',
        summary: 'Maintain balance in interactions with others, neither being swept away by external forces nor deliberately opposing.',
        emoji: '🪞',
        date: 'July 28, 2025',
        readTime: '7 min read',
        keywords: ['Interpersonal Harmony', 'Compassion', 'Understanding', 'Relationship Balance'],
        wechatUrl: 'https://mp.weixin.qq.com/s/...',
        hasFullContent: false
      },
      {
        id: 'nature-harmony',
        title: 'Chapter 3 | Nature Harmony',
        subtitle: 'External Gathering Becomes Flow, Four Seasons Embrace',
        summary: 'Follow the rhythm of four seasons, maintain resonance with nature, allowing body and mind to restore and nourish in the environment.',
        emoji: '🍃',
        date: 'July 29, 2025',
        readTime: '6 min read',
        keywords: ['Nature Connection', 'Earth Energy', 'Seasonal Wisdom', 'Ecological Awareness'],
        wechatUrl: 'https://mp.weixin.qq.com/s/...',
        hasFullContent: false
      },
      {
        id: 'energy-harmony',
        title: 'Chapter 4 | Energy Harmony',
        subtitle: 'Internal Cultivation Becomes Furnace, Energy Abundant',
        summary: 'Harmonize the physiological and psychological connection of the body\'s core, let breathing, qi-blood and consciousness synchronize.',
        emoji: '💓',
        date: 'July 30, 2025',
        readTime: '9 min read',
        keywords: ['Energy Balance', 'Body-mind-spirit Unity', 'Life Force Flow', 'Mindfulness Practice'],
        wechatUrl: 'https://mp.weixin.qq.com/s/...',
        hasFullContent: false
      },
      {
        id: 'frequency-harmony',
        title: 'Chapter 5 | Frequency Harmony',
        subtitle: 'Internal Unity Becomes One, Same Frequency Resonance',
        summary: 'Let individuals resonate with groups, systems, and intelligent entities in frequency, achieving optimal flow of resources and forces.',
        emoji: '📡',
        date: 'July 31, 2025',
        readTime: '8 min read',
        keywords: ['Universal Resonance', 'Frequency Sync', 'Universal Oneness', 'Cosmic Consciousness'],
        wechatUrl: 'https://mp.weixin.qq.com/s/...',
        hasFullContent: false
      },
      {
        id: 'egoless-harmony',
        title: 'Chapter 6 | Egoless Harmony',
        subtitle: 'Boundless Limitless, Omnipresent',
        summary: 'Transcend self-limitation, merge into the free flow of all things, no inside no outside, boundless limitless.',
        emoji: '🌌',
        date: 'August 1, 2025',
        readTime: '10 min read',
        keywords: ['Egoless State', 'Beyond Duality', 'Pure Being', 'Ultimate Liberation'],
        wechatUrl: 'https://mp.weixin.qq.com/s/...',
        hasFullContent: false
      },
      {
        id: 'return-harmony',
        title: 'Return Harmony | Harmony in Mind · Clarity in Return',
        subtitle: 'Six Harmonies Return to One, Complete System of Awakening Path',
        summary: 'Harmony in Mind · Clarity in Return, this is the overall philosophy of Ximory Six Harmonies. From self harmony to egoless harmony, six levels of harmonious cultivation.',
        emoji: '🌟',
        date: 'August 2, 2025',
        readTime: '12 min read',
        keywords: ['Harmony in Mind', 'Clarity in Return', 'Six Harmonies Unity', 'Awakening Path'],
        wechatUrl: 'https://mp.weixin.qq.com/s/...',
        hasFullContent: true
      }
    ]
  }

  const currentArticles = articles[language] || articles.zh

  return (
    <div className="articles-page">
      <div className="container">
        <div className="page-header">
          <h1>{language === 'zh' ? '专栏文章' : 'Column Articles'}</h1>
          <p className="page-description">
            {language === 'zh' 
              ? '心沐六和的完整修行体系，从觉醒之路到归和而明的深度探索'
              : 'Complete cultivation system of Ximory Six Harmonies, from awakening path to clarity in return'
            }
          </p>
        </div>

        <div className="articles-grid">
          {currentArticles.map((article, index) => (
            <article key={article.id} className="article-card">
              <div className="article-header">
                <div className="article-emoji">{article.emoji}</div>
                <div className="article-meta">
                  <span className="article-date">{article.date}</span>
                  <span className="article-read-time">{article.readTime}</span>
                </div>
              </div>
              
              <div className="article-content">
                <h2 className="article-title">{article.title}</h2>
                <h3 className="article-subtitle">{article.subtitle}</h3>
                <p className="article-summary">{article.summary}</p>
                
                <div className="article-keywords">
                  {article.keywords.map((keyword, idx) => (
                    <span key={idx} className="keyword">{keyword}</span>
                  ))}
                </div>
              </div>

              <div className="article-actions">
                {article.hasFullContent ? (
                  <button 
                    className="btn-primary"
                    onClick={() => onArticleSelect(article)}
                  >
                    {language === 'zh' ? '阅读全文' : 'Read Full Article'}
                  </button>
                ) : (
                  <button 
                    className="btn-secondary"
                    onClick={() => window.open(article.wechatUrl, '_blank')}
                  >
                    {language === 'zh' ? '查看原文' : 'View Original'}
                  </button>
                )}
                
                <button 
                  className="btn-outline"
                  onClick={() => window.open(article.wechatUrl, '_blank')}
                >
                  {language === 'zh' ? '微信原文' : 'WeChat Original'}
                </button>
              </div>

              {!article.hasFullContent && (
                <div className="content-status">
                  <span className="status-badge">
                    {language === 'zh' ? '内容整理中' : 'Content Coming Soon'}
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticleList

