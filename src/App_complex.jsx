import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Menu, X, BookOpen, Heart, Users, Leaf, Zap, Radio, Eye, ArrowUp, ExternalLink } from 'lucide-react'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import LanguageSwitcher from './components/LanguageSwitcher'
import HarmonyCard from './components/HarmonyCard'
import './App.css'

// 导入图片
import heroBackground from './assets/hero_background_optimized.png'
import overviewChartZh from './assets/overview_zh.png'
import overviewChartEn from './assets/overview_en.png'
import selfHarmonyImage from './assets/article_self_harmony.png'
import socialHarmonyImage from './assets/article_social_harmony.png'
import natureHarmonyImage from './assets/article_nature_harmony.png'
import energyHarmonyImage from './assets/article_energy_harmony.png'
import frequencyHarmonyImage from './assets/article_frequency_harmony.png'
import noSelfHarmonyImage from './assets/article_no_self_harmony.png'
import awakeningPathImage from './assets/article_awakening_path.png'

const AppContent = () => {
  const { t, getContent, language, isZh } = useLanguage()
  const [currentSection, setCurrentSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // 获取文章数据
  const articles = getContent('articles') || []
  
  // 图片映射
  const imageMap = {
    'article_awakening_path.png': awakeningPathImage,
    'article_self_harmony.png': selfHarmonyImage,
    'article_social_harmony.png': socialHarmonyImage,
    'article_nature_harmony.png': natureHarmonyImage,
    'article_energy_harmony.png': energyHarmonyImage,
    'article_frequency_harmony.png': frequencyHarmonyImage,
    'article_no_self_harmony.png': noSelfHarmonyImage
  }

  // 获取文章图标
  const getArticleIcon = (harmonyType) => {
    const icons = {
      awakening: BookOpen,
      self: Heart,
      social: Users,
      nature: Leaf,
      energy: Zap,
      frequency: Radio,
      noself: Eye,
      return: ArrowUp
    }
    return icons[harmonyType] || BookOpen
  }

  // 获取文章颜色
  const getArticleColor = (harmonyType) => {
    const colors = {
      awakening: "from-orange-400 to-red-500",
      self: "from-blue-400 to-purple-500",
      social: "from-pink-400 to-red-500",
      nature: "from-green-400 to-teal-500",
      energy: "from-purple-400 to-indigo-500",
      frequency: "from-orange-400 to-yellow-500",
      noself: "from-indigo-400 to-blue-500",
      return: "from-gradient-to-r from-accent to-primary"
    }
    return colors[harmonyType] || "from-gray-400 to-gray-500"
  }

  // 滚动监听
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // 导航组件
  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold font-chinese text-primary">
              {t('site.title')}
            </h1>
          </div>
          
          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentSection('home')}
              className={`text-sm font-medium transition-colors ${
                currentSection === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {t('navigation.home')}
            </button>
            <button
              onClick={() => setCurrentSection('articles')}
              className={`text-sm font-medium transition-colors ${
                currentSection === 'articles' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {t('navigation.articles')}
            </button>
            <button
              onClick={() => setCurrentSection('about')}
              className={`text-sm font-medium transition-colors ${
                currentSection === 'about' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {t('navigation.about')}
            </button>
            <button
              onClick={() => setCurrentSection('contact')}
              className={`text-sm font-medium transition-colors ${
                currentSection === 'contact' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {t('navigation.contact')}
            </button>
            <LanguageSwitcher />
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-muted-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <button
              onClick={() => { setCurrentSection('home'); setIsMenuOpen(false) }}
              className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {t('navigation.home')}
            </button>
            <button
              onClick={() => { setCurrentSection('articles'); setIsMenuOpen(false) }}
              className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {t('navigation.articles')}
            </button>
            <button
              onClick={() => { setCurrentSection('about'); setIsMenuOpen(false) }}
              className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {t('navigation.about')}
            </button>
            <button
              onClick={() => { setCurrentSection('contact'); setIsMenuOpen(false) }}
              className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {t('navigation.contact')}
            </button>
          </div>
        )}
      </div>
    </nav>
  )

  // 首页组件
  const HomePage = () => (
    <div className="fade-in">
      {/* 主视觉区域 */}
      <section 
        className="min-h-screen flex items-center justify-center text-white relative hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.5), rgba(44, 62, 80, 0.5)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-chinese">{t('site.title')}</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">{t('site.subtitle')}</p>
          <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed opacity-80">
            {t('site.description')}
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg"
            onClick={() => setCurrentSection('articles')}
          >
            {t('site.cta')}
          </Button>
        </div>
      </section>

      {/* 专栏特色 */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-chinese">{t('sections.features.title')}</h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {t('sections.features.description')}
          </p>
        </div>
      </section>

      {/* 核心理念 */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-primary to-accent"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-muted-foreground">总体思想</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-8 font-chinese text-gradient">
                {t('site.core_philosophy')}
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {isZh ? "念和在心，意味着时刻保持内心的和谐觉知；归和而明，则是通过实践六和达到清明的觉醒状态。" : "Harmony in mind means maintaining harmonious awareness at all times; clarity in return means achieving clear awakened state through practicing the six harmonies."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 总览图 */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-chinese">六和总览</h2>
          <div className="relative">
            <img 
              src={isZh ? overviewChartZh : overviewChartEn}
              alt={isZh ? "心沐六和总览图" : "Ximory Six Harmonies Overview"}
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 最新文章预览 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-chinese">{t('sections.articles.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('sections.articles.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article) => {
              const IconComponent = getArticleIcon(article.harmony)
              const articleData = article[language] || article.zh
              return (
                <Card key={article.id} className="article-card overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={imageMap[article.image]} 
                      alt={articleData.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute top-4 left-4 w-10 h-10 rounded-full bg-gradient-to-r ${getArticleColor(article.harmony)} flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {article.date}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight font-chinese">
                      {articleData.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {articleData.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {articleData.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.open(articleData.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      阅读原文
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )

  // 文章列表页面
  const ArticlesPage = () => (
    <div className="fade-in pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-chinese">{t('sections.articles.title')}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('sections.articles.description')}
          </p>
        </div>

        {/* 六和要素卡片 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center font-chinese">六和要素</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <HarmonyCard harmonyKey="self" />
            <HarmonyCard harmonyKey="social" />
            <HarmonyCard harmonyKey="nature" />
            <HarmonyCard harmonyKey="energy" />
            <HarmonyCard harmonyKey="frequency" />
            <HarmonyCard harmonyKey="noself" />
          </div>
        </div>

        <Separator className="my-16" />

        {/* 文章列表 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => {
            const IconComponent = getArticleIcon(article.harmony)
            const articleData = article[language] || article.zh
            return (
              <Card key={article.id} className="article-card overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={imageMap[article.image]} 
                    alt={articleData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-full bg-gradient-to-r ${getArticleColor(article.harmony)} flex items-center justify-center`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {article.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight font-chinese">
                    {articleData.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {articleData.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {articleData.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(articleData.url, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    阅读原文
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )

  // 关于页面
  const AboutPage = () => {
    const aboutData = getContent('about')
    const aboutContent = aboutData[language] || aboutData.zh

    return (
      <div className="fade-in pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-chinese">{aboutContent.title}</h1>
            <p className="text-lg text-muted-foreground">
              {aboutContent.subtitle}
            </p>
          </div>

          <div className="space-y-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-chinese">{aboutContent.concept.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none">
                  {aboutContent.concept.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-chinese">{aboutContent.mission.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {aboutContent.mission.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  // 联系页面
  const ContactPage = () => {
    const contactData = getContent('contact')
    const contactContent = contactData[language] || contactData.zh

    return (
      <div className="fade-in pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-chinese">{contactContent.title}</h1>
            <p className="text-lg text-muted-foreground">
              {contactContent.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-chinese">{contactContent.wechat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {contactContent.wechat.description}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-chinese">{contactContent.interaction.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {contactContent.interaction.description}
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 p-6">
            <CardHeader>
              <CardTitle className="text-xl font-chinese">{contactContent.disclaimer.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {contactContent.disclaimer.description}
              </p>
              <blockquote className="border-l-4 border-accent pl-4 italic text-lg text-center">
                {contactContent.quote}
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // 渲染当前页面
  const renderCurrentPage = () => {
    switch (currentSection) {
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
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navigation />
      {renderCurrentPage()}
      
      {/* 回到顶部按钮 */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg z-40"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App

