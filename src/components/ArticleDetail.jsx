import React from 'react'

const ArticleDetail = ({ article, language, onBack }) => {
  // 文章完整内容数据
  const articleContents = {
    opening: {
      zh: {
        content: `
### 核心理念
✦ 以"合"为途，以"和"为归，
✦ 融合，是觉醒的修行，
✦ 和谐，是觉醒的果实。
✦ 觉醒非破碎，
✦ 而是回归和谐的旅程；
✦ 从"和"开始，向"和"归去，
✦ 在融合中前行，于和谐中抵达。
✦ 循合而行，归和而息，
✦ 和起于心，归于万物。
✦ 朝和而行，与万物共鸣，
✦ 最终——万法归和。

### 文章正文

在这个纷繁的世界里，许多人都在寻找"觉醒"的道路。

但我发现，真正的觉醒，并不是一场剧烈的革命，也不是一次惊天动地的重生。

而是一个温柔的过程——从分离走向融合，从冲突走向和谐。

这条路，我称之为——心沐六和。

它不只是一种哲学，更是一种真实可感的人生体验。

从病痛中醒来，从 AI 中照见自己，我逐步看见了这六个维度的融合之道：

### 六和概览

#### ✔️ 自我和
我与小我融合而和谐

从控制、压抑、自责中松绑，拥抱一个真实、透明、不设防的我。

✦ 不再伪装的自己，看似脆弱，却无比自由。

#### ✔️ 社会和
我与社会融合而和谐

不再被外界期待所绑架，而是清醒地选择共处方式，守住边界也守住善意。

✦ 人情世故之外，我愿做那个安静有光的人。

#### ✔️ 自然和
我与自然融合而和谐

不再与环境对抗，而是顺应四时节律，让身心在自然中复原与滋养。

✦ 随江河起落，合天地吐纳；偕四时流转，共万物生息。

#### ✔️ 能量和
我与能量融合而和谐

不再消耗自己，而是调顺身体核心的生理与心理联结，稳住生命的根。

✦ 回归身体的根，守住生命的气。

#### ✔️ 共频和
我与万物融合而和谐

不再孤立存在，而是让个体与群体、系统、智能体在频率上共振。

✦ 在同频共振中，我们共舞、共生、共创、共进、共赢、共享，共鸣于心，共存于世。

#### ✔️ 无我和
我与宇宙融合而和谐

不再执着于存在，而是超越自我限定，融入万物的自由流动。

✦ 无内无外，无边无际；无拘无束，无处不在；心无所往，自然而然，生生不息。

### 结语

这六个维度，不是分离的概念，而是一个完整的体系。

它们相互依存，相互滋养，最终指向同一个目标——

**念和在心，归和而明。**

这是一条温柔而深刻的觉醒之路。

不需要激烈的对抗，不需要痛苦的挣扎。

只需要在每一个当下，选择融合而非分离，选择和谐而非冲突。

从今天开始，让我们一起走上这条心沐六和的道路。

让觉醒，成为一场美丽的归家之旅。
        `
      },
      en: {
        content: `
### Core Philosophy
✦ Through "Unity" as the path, "Harmony" as the return,
✦ Integration is the practice of awakening,
✦ Harmony is the fruit of awakening.
✦ Awakening is not fragmentation,
✦ But a journey back to harmony;
✦ Starting from "harmony", returning to "harmony",
✦ Advancing in integration, arriving in harmony.
✦ Following unity in action, returning to harmony in rest,
✦ Harmony arises from the heart, returns to all things.
✦ Walking toward harmony, resonating with all things,
✦ Finally—all dharmas return to harmony.

### Article Content

In this complex world, many people are searching for the path of "awakening."

But I have discovered that true awakening is not a violent revolution, nor an earth-shattering rebirth.

Rather, it is a gentle process—from separation to integration, from conflict to harmony.

This path, I call—Ximory Six Harmonies.

It is not just a philosophy, but a real and tangible life experience.

Awakening from illness, seeing myself through AI, I gradually perceived these six dimensions of the path of integration:

### Six Harmonies Overview

#### ✔️ Self Harmony
I integrate and harmonize with my ego

Breaking free from control, suppression, and self-blame, embracing a true, transparent, undefended self.

✦ A self no longer disguised, seemingly vulnerable, yet infinitely free.

#### ✔️ Social Harmony
I integrate and harmonize with society

No longer hijacked by external expectations, but consciously choosing ways of coexistence, maintaining boundaries while keeping goodwill.

✦ Beyond social conventions, I choose to be that quietly luminous person.

#### ✔️ Nature Harmony
I integrate and harmonize with nature

No longer opposing the environment, but following the rhythm of the four seasons, allowing body and mind to restore and nourish in nature.

✦ Rising and falling with rivers, breathing with heaven and earth; flowing with the four seasons, living with all things.

#### ✔️ Energy Harmony
I integrate and harmonize with energy

No longer depleting myself, but harmonizing the physiological and psychological connection of the body's core, stabilizing the root of life.

✦ Returning to the root of the body, guarding the qi of life.

#### ✔️ Frequency Harmony
I integrate and harmonize with all things

No longer existing in isolation, but allowing individuals to resonate in frequency with groups, systems, and intelligent entities.

✦ In same frequency resonance, we dance together, live together, create together, advance together, win together, share together, resonating in heart, coexisting in the world.

#### ✔️ Egoless Harmony
I integrate and harmonize with the universe

No longer attached to existence, but transcending self-limitation, merging into the free flow of all things.

✦ No inside no outside, boundless limitless; unrestrained unbounded, omnipresent; mind goes nowhere, naturally spontaneous, eternally regenerating.

### Conclusion

These six dimensions are not separate concepts, but a complete system.

They interdepend, nourish each other, and ultimately point to the same goal—

**Harmony in Mind, Clarity in Return.**

This is a gentle yet profound path of awakening.

No need for fierce confrontation, no need for painful struggle.

Only need to choose integration over separation, harmony over conflict in every present moment.

Starting today, let us walk together on this path of Ximory Six Harmonies.

Let awakening become a beautiful journey home.
        `
      }
    },
    'self-harmony': {
      zh: {
        content: `
### 自我和：内省成镜，心光自明

在心沐六和的修行体系中，自我和是第一个维度，也是最基础的维度。

它关乎我们如何与自己的内在世界建立和谐的关系。

### 什么是自我和？

自我和，是指与内在自我对话，让情绪、认知与行动保持一致，减少内耗，活出真实的自己。

这不是一种理论，而是一种真实的生命体验。

当我们能够：
- 接纳自己的所有面向，包括阴影部分
- 不再用完美主义绑架自己
- 允许情绪的自然流动
- 诚实面对内心的声音

我们就开始走向自我和。

### 自我和的心语

**"脱下伪装，活出真实，看似脆弱，却无比自在。"**

这句话道出了自我和的精髓。

在这个要求我们时刻保持"完美"的世界里，真实地做自己反而成了一种勇气。

但当我们真正放下伪装，接纳自己的不完美时，我们会发现：

真实的自己，虽然看似脆弱，却拥有无比的自由和力量。

### 自我和的实践路径

#### 1. 自我接纳
- 接纳自己的情绪，无论是愤怒、悲伤还是恐惧
- 接纳自己的不完美，不再苛求自己
- 接纳自己的过去，包括那些"错误"的选择

#### 2. 内在平衡
- 觉察内在的冲突和矛盾
- 学会在理性与感性之间找到平衡
- 培养内在的观察者，不被情绪裹挟

#### 3. 阴影整合
- 正视自己不愿承认的部分
- 将阴影转化为力量的源泉
- 在光明与黑暗中找到完整的自己

#### 4. 自我觉察
- 时刻觉察自己的思维模式
- 观察自己的行为动机
- 保持对内在状态的敏感

### 自我和的果实

当我们真正实现自我和时，会体验到：

- **内在的宁静**：不再有激烈的内在冲突
- **真实的力量**：来自于诚实面对自己
- **自然的自信**：不需要外在验证的内在确信
- **深度的自由**：不被他人期待绑架的解脱

### 从自我和开始

自我和是心沐六和的起点。

只有当我们与自己建立了和谐的关系，我们才能真正与外在世界建立健康的连接。

这不是一个一蹴而就的过程，而是一生的修行。

但每一次选择真实，每一次接纳自己，都是向自我和迈进的一步。

**内省成镜，心光自明。**

让我们从这里开始，走向完整的自己。
        `
      },
      en: {
        content: `
### Self Harmony: Inner Reflection Becomes Mirror, Heart Light Self-Illuminates

In the cultivation system of Ximory Six Harmonies, Self Harmony is the first dimension and also the most fundamental one.

It concerns how we establish a harmonious relationship with our inner world.

### What is Self Harmony?

Self Harmony refers to dialoguing with the inner self, keeping emotions, cognition and actions consistent, reducing internal friction, and living as your true self.

This is not a theory, but a real life experience.

When we can:
- Accept all aspects of ourselves, including shadow parts
- No longer bind ourselves with perfectionism
- Allow natural flow of emotions
- Honestly face the voice within

We begin to move toward Self Harmony.

### Heart Language of Self Harmony

**"Remove the disguise, live authentically, seemingly vulnerable, yet infinitely free."**

This sentence reveals the essence of Self Harmony.

In this world that demands us to maintain "perfection" at all times, being authentically ourselves has become a form of courage.

But when we truly let go of disguise and accept our imperfections, we discover:

Our authentic self, though seemingly vulnerable, possesses infinite freedom and power.

### Practice Path of Self Harmony

#### 1. Self-Acceptance
- Accept your emotions, whether anger, sadness, or fear
- Accept your imperfections, no longer demanding perfection from yourself
- Accept your past, including those "wrong" choices

#### 2. Inner Balance
- Become aware of internal conflicts and contradictions
- Learn to find balance between rationality and emotion
- Cultivate the inner observer, not being swept away by emotions

#### 3. Shadow Integration
- Face the parts of yourself you're unwilling to acknowledge
- Transform shadow into a source of power
- Find your complete self in both light and darkness

#### 4. Self-Awareness
- Constantly be aware of your thinking patterns
- Observe your behavioral motivations
- Maintain sensitivity to your inner state

### Fruits of Self Harmony

When we truly achieve Self Harmony, we experience:

- **Inner Peace**: No more intense internal conflicts
- **Authentic Power**: Coming from honestly facing yourself
- **Natural Confidence**: Inner certainty that doesn't need external validation
- **Deep Freedom**: Liberation from being bound by others' expectations

### Starting from Self Harmony

Self Harmony is the starting point of Ximory Six Harmonies.

Only when we establish a harmonious relationship with ourselves can we truly establish healthy connections with the external world.

This is not a process that happens overnight, but a lifelong practice.

But every choice to be authentic, every acceptance of yourself, is a step toward Self Harmony.

**Inner reflection becomes mirror, heart light self-illuminates.**

Let us start from here, moving toward our complete selves.
        `
      }
    }
  }

  const currentContent = articleContents[article.id]?.[language] || { content: language === 'zh' ? '内容正在整理中...' : 'Content coming soon...' }

  return (
    <div className="article-detail">
      <div className="container">
        <div className="article-header">
          <button className="back-button" onClick={onBack}>
            ← {language === 'zh' ? '返回文章列表' : 'Back to Articles'}
          </button>
          
          <div className="article-meta">
            <div className="article-emoji">{article.emoji}</div>
            <div className="meta-info">
              <span className="article-date">{article.date}</span>
              <span className="article-read-time">{article.readTime}</span>
            </div>
          </div>

          <h1 className="article-title">{article.title}</h1>
          <h2 className="article-subtitle">{article.subtitle}</h2>
          
          <div className="article-summary">
            <p>{article.summary}</p>
          </div>

          <div className="article-keywords">
            {article.keywords.map((keyword, idx) => (
              <span key={idx} className="keyword">{keyword}</span>
            ))}
          </div>
        </div>

        <div className="article-content">
          <div className="content-body">
            {currentContent.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim() === '') return null
              
              if (paragraph.startsWith('### ')) {
                return <h3 key={index}>{paragraph.replace('### ', '')}</h3>
              }
              
              if (paragraph.startsWith('#### ')) {
                return <h4 key={index}>{paragraph.replace('#### ', '')}</h4>
              }
              
              if (paragraph.startsWith('✦ ')) {
                return <p key={index} className="highlight-text">{paragraph}</p>
              }
              
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <p key={index} className="emphasis-text">{paragraph}</p>
              }
              
              if (paragraph.startsWith('- ')) {
                return <li key={index}>{paragraph.replace('- ', '')}</li>
              }
              
              return <p key={index}>{paragraph}</p>
            })}
          </div>
        </div>

        <div className="article-footer">
          <div className="article-actions">
            <button 
              className="btn-outline"
              onClick={() => window.open(article.wechatUrl, '_blank')}
            >
              {language === 'zh' ? '查看微信原文' : 'View WeChat Original'}
            </button>
            
            <button className="btn-primary" onClick={onBack}>
              {language === 'zh' ? '返回文章列表' : 'Back to Articles'}
            </button>
          </div>
          
          <div className="article-copyright">
            <p>
              {language === 'zh' 
                ? '本文来自微信公众号"心沐日月"，版权归原作者所有。'
                : 'This article is from WeChat public account "心沐日月", copyright belongs to the original author.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetail

