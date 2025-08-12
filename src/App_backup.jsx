import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Menu, X, BookOpen, Heart, Users, Leaf, Zap, Radio, Eye, ArrowUp, ExternalLink } from 'lucide-react'
import './App.css'

// 导入图片
import heroBackground from './assets/hero_background_optimized.png'

// 扩展的内容数据
const content = {
  site: {
    zh: {
      title: "心沐六和",
      subtitle: "念和在心·归和而明",
      description: "在这个快节奏的时代，我们常常迷失在外在的纷扰中，忘记了内心的声音。心沐六和，是一次深入内心的探索之旅，带您从内在觉醒到宇宙和谐，走上一条完整的修行之路。",
      cta: "开始探索",
      core_philosophy: "念和在心·归和而明"
    },
    en: {
      title: "Ximory Six Harmonies",
      subtitle: "Harmony in Mind · Clarity in Return",
      description: "In this fast-paced era, we often lose ourselves in external distractions, forgetting our inner voice. Ximory Six Harmonies is a journey of deep inner exploration, guiding you from inner awakening to cosmic harmony on a complete path of cultivation.",
      cta: "Begin Exploration",
      core_philosophy: "Harmony in Mind · Clarity in Return"
    }
  },
  navigation: {
    zh: {
      home: "首页",
      articles: "专栏文章",
      about: "关于专栏",
      contact: "联系我们"
    },
    en: {
      home: "Home",
      articles: "Articles",
      about: "About",
      contact: "Contact"
    }
  },
  sections: {
    features: {
      zh: {
        title: "专栏特色",
        description: "念和在心·归和而明，一条完整的修行之路"
      },
      en: {
        title: "Column Features",
        description: "Harmony in Mind · Clarity in Return, a complete path of cultivation"
      }
    }
  }
}

function App() {
  const [language, setLanguage] = useState('zh')
  const [currentSection, setCurrentSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // 简化但完整的翻译函数
  const t = (path) => {
    // 直接映射常用的翻译键
    const translations = {
      'site.title': content.site[language].title,
      'site.subtitle': content.site[language].subtitle,
      'site.description': content.site[language].description,
      'site.cta': content.site[language].cta,
      'site.core_philosophy': content.site[language].core_philosophy,
      'navigation.home': content.navigation[language].home,
      'navigation.articles': content.navigation[language].articles,
      'navigation.about': content.navigation[language].about,
      'navigation.contact': content.navigation[language].contact,
      'sections.features.title': content.sections.features[language].title,
      'sections.features.description': content.sections.features[language].description
    }
    
    return translations[path] || path
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
    </div>
  )

  // 简单的其他页面组件
  const ArticlesPage = () => (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {t('navigation.articles')}
        </h1>
        <p className="text-xl text-gray-600">
          文章页面正在开发中...
        </p>
      </div>
    </div>
  )

  const AboutPage = () => (
    <div className="min-h-screen pt-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {t('navigation.about')}
        </h1>
        <p className="text-xl text-gray-600">
          关于页面正在开发中...
        </p>
      </div>
    </div>
  )

  const ContactPage = () => (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {t('navigation.contact')}
        </h1>
        <p className="text-xl text-gray-600">
          联系页面正在开发中...
        </p>
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
    </div>
  )
}

export default App

