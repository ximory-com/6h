import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Menu, X, BookOpen, Heart, Users, Leaf, Zap, Radio, Eye, ArrowUp, ExternalLink, Globe } from 'lucide-react'
import './App.css'

// 导入配置文件
import { contentData } from './config/contentData.js'

// 导入图片
import heroBackground from './assets/hero_background_optimized.png'
import selfHarmonyImage from './assets/article_self_harmony.png'
import natureHarmonyImage from './assets/article_nature_harmony.png'
import frequencyHarmonyImage from './assets/article_frequency_harmony.png'

function App() {
  const [language, setLanguage] = useState('zh')
  const [currentSection, setCurrentSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // 翻译函数
  const t = (path) => {
    try {
      const keys = path.split('.')
      let result = contentData
      
      for (const key of keys) {
        if (result && typeof result === 'object' && key in result) {
          result = result[key]
        } else {
          return path
        }
      }
      
      if (result && typeof result === 'object' && language in result) {
        return result[language]
      }
      
      return result || path
    } catch (error) {
      console.error('Translation error:', error)
      return path
    }
  }

  // 获取内容
  const getContent = (path) => {
    const keys = path.split('.')
    let result = contentData
    
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key]
      } else {
        return null
      }
    }
    
    return result
  }

  // 图片映射
  const imageMap = {
    'article_self_harmony.png': selfHarmonyImage,
    'article_nature_harmony.png': natureHarmonyImage,
    'article_frequency_harmony.png': frequencyHarmonyImage
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
      return: BookOpen
    }
    return icons[harmonyType] || BookOpen
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">{t('site.title')}</span>
          </div>
          
          {/* 桌面导航 */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentSection('home')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentSection === 'home' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {t('navigation.home')}
            </button>
            <button
              onClick={() => setCurrentSection('articles')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentSection === 'articles' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {t('navigation.articles')}
            </button>
            <button
              onClick={() => setCurrentSection('about')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentSection === 'about' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {t('navigation.about')}
            </button>
            <button
              onClick={() => setCurrentSection('contact')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentSection === 'contact' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {t('navigation.contact')}
            </button>
            
            {/* 语言切换 */}
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => setLanguage('zh')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'zh' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                中文
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => { setCurrentSection('home'); setIsMenuOpen(false) }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
            >
              {t('navigation.home')}
            </button>
            <button
              onClick={() => { setCurrentSection('articles'); setIsMenuOpen(false) }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
            >
              {t('navigation.articles')}
            </button>
            <button
              onClick={() => { setCurrentSection('about'); setIsMenuOpen(false) }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
            >
              {t('navigation.about')}
            </button>
            <button
              onClick={() => { setCurrentSection('contact'); setIsMenuOpen(false) }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
            >
              {t('navigation.contact')}
            </button>
            <div className="flex space-x-2 px-3 py-2">
              <button
                onClick={() => setLanguage('zh')}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  language === 'zh' ? 'bg-blue-600 text-white' : 'text-gray-600'
                }`}
              >
                中文
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )

  // 首页组件
  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {t('site.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-delay">
            {t('site.subtitle')}
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto animate-fade-in-delay-2">
            {t('site.description')}
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg animate-fade-in-delay-3"
            onClick={() => setCurrentSection('articles')}
          >
            {t('site.cta')}
          </Button>
        </div>
      </section>

      {/* 核心理念 */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            {t('site.core_philosophy')}
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            {t('sections.features.description')}
          </p>
        </div>
      </section>

      {/* 六和要素卡片 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            六和要素
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(getContent('harmonies') || {}).map(([key, harmony]) => (
              <Card key={key} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{harmony[language]?.emoji}</div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {harmony[language]?.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {harmony[language]?.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-blue-600 mb-2">境界</p>
                    <p className="text-gray-700">{harmony[language]?.essence}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-green-600 mb-2">路径</p>
                    <p className="text-gray-700">{harmony[language]?.path}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-purple-600 mb-2">心语</p>
                    <p className="text-gray-700 italic">{harmony[language]?.heart_language}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {harmony[language]?.keywords?.map((keyword, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )

  // 文章页面组件
  const ArticlesPage = () => {
    const articles = getContent('articles') || []
    
    return (
      <div className="min-h-screen pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('sections.articles.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('sections.articles.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => {
              const Icon = getArticleIcon(article.harmony)
              return (
                <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    {imageMap[article.image] && (
                      <img 
                        src={imageMap[article.image]} 
                        alt={article[language]?.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    )}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90">
                        {article.date}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">
                        {getContent(`harmonies.${article.harmony}.${language}.name`) || article.harmony}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {article[language]?.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {article[language]?.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {article[language]?.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                      onClick={() => window.open(article[language]?.url, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
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
  }

  // 关于页面组件
  const AboutPage = () => (
    <div className="min-h-screen pt-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {t('about.concept.title')}
          </h2>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line mb-12">
            {t('about.concept.content')}
          </div>
        </div>
      </div>
    </div>
  )

  // 联系页面组件
  const ContactPage = () => (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">
              {t('contact.wechat.title')}
            </CardTitle>
            <CardDescription>
              {t('contact.wechat.description')}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                {t('contact.wechat.account')}
              </p>
              <p className="text-blue-600 font-mono text-xl">心沐日月</p>
            </div>
            <Separator />
            <div>
              <p className="text-gray-700">
                {t('contact.wechat.note')}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

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
    <div className="min-h-screen bg-white">
      <Navigation />
      {renderCurrentPage()}
      
      {/* 返回顶部按钮 */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
      
      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{t('site.title')}</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('footer.description')}
            </p>
          </div>
          <Separator className="bg-gray-700 mb-8" />
          <div className="text-gray-400">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

