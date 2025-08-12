import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Menu, X, BookOpen, Heart, Users, Leaf, Zap, Radio, Eye, ArrowUp } from 'lucide-react'
import './App.css'

// 导入图片
import heroBackground from './assets/hero_background_optimized.png'
import logoImage from './assets/logo_concept.png'
import selfHarmonyImage from './assets/article_self_harmony.png'
import socialHarmonyImage from './assets/article_social_harmony.png'
import natureHarmonyImage from './assets/article_nature_harmony.png'
import energyHarmonyImage from './assets/article_energy_harmony.png'
import frequencyHarmonyImage from './assets/article_frequency_harmony.png'
import noSelfHarmonyImage from './assets/article_no_self_harmony.png'
import awakeningPathImage from './assets/article_awakening_path.png'

function App() {
  const [currentSection, setCurrentSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // 文章数据
  const articles = [
    {
      id: 1,
      title: "开篇｜觉醒之路，从和开始",
      subtitle: "觉醒之路的起点",
      description: "在这个充满分裂与对立的世界中，我们如何找回内心的平静与和谐？本篇文章将为您开启一扇通往内在觉醒的大门。",
      image: awakeningPathImage,
      date: "07/26",
      icon: BookOpen,
      color: "from-orange-400 to-red-500"
    },
    {
      id: 2,
      title: "第一篇｜自我和",
      subtitle: "与自己的和解",
      description: "真正的和谐始于与自己的和解，接纳自己的光明与阴影。当我们学会与内在的各个面向和平共处时，就为更高层次的和谐奠定了基础。",
      image: selfHarmonyImage,
      date: "1 week ago",
      icon: Heart,
      color: "from-blue-400 to-purple-500"
    },
    {
      id: 3,
      title: "第二篇｜社会和",
      subtitle: "人际关系的和谐",
      description: "当我们在内在找到平衡后，如何将这种和谐扩展到人际关系和社会交往中？本篇探讨如何在复杂的社会环境中保持内心的平静。",
      image: socialHarmonyImage,
      date: "5天前",
      icon: Users,
      color: "from-green-400 to-blue-500"
    },
    {
      id: 4,
      title: "第三篇｜自然和",
      subtitle: "与自然的深度连接",
      description: "现代人往往与自然疏离，但真正的和谐生活离不开与自然的深度连接。本篇将引导您重新发现与自然和谐共处的智慧。",
      image: natureHarmonyImage,
      date: "4天前",
      icon: Leaf,
      color: "from-green-500 to-teal-500"
    },
    {
      id: 5,
      title: "第四篇｜能量和",
      subtitle: "内在能量的调和",
      description: "从物质层面进入能量层面，我们开始触及生命更深层的奥秘。本篇将探讨如何感知、调节和平衡内在的能量流动。",
      image: energyHarmonyImage,
      date: "2天前",
      icon: Zap,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 6,
      title: "第五篇｜共频和",
      subtitle: "宇宙频率的同步",
      description: "共频和谐是一种更高维度的体验，当我们学会与周围的能量场共振时，就能感受到与万物的深度连接。",
      image: frequencyHarmonyImage,
      date: "2 days ago",
      icon: Radio,
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 7,
      title: "第六篇｜无我和",
      subtitle: "超越自我的境界",
      description: "无我并非失去自己，而是超越狭隘的自我认同，在更广阔的意识中找到真正的自由与和谐。这是修行路上的重要里程碑。",
      image: noSelfHarmonyImage,
      date: "2 days ago",
      icon: Eye,
      color: "from-gray-400 to-blue-400"
    },
    {
      id: 8,
      title: "归和｜念和在心 • 归和明",
      subtitle: "日常生活中的和谐",
      description: "经过前面七个层次的探索，我们最终要将所有的智慧整合起来，在日常生活的每一个瞬间都能保持和谐的状态。",
      image: awakeningPathImage,
      date: "Yesterday",
      icon: BookOpen,
      color: "from-emerald-400 to-cyan-500"
    }
  ]

  // 监听滚动事件
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
          <div className="flex items-center space-x-3">
            <img src={logoImage} alt="心沐六和" className="h-10 w-10 rounded-lg" />
            <span className="text-xl font-bold text-gradient font-chinese">心沐六和</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => setCurrentSection('home')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentSection === 'home' ? 'text-primary bg-secondary' : 'text-gray-600 hover:text-primary'
              }`}
            >
              首页
            </button>
            <button 
              onClick={() => setCurrentSection('articles')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentSection === 'articles' ? 'text-primary bg-secondary' : 'text-gray-600 hover:text-primary'
              }`}
            >
              专栏文章
            </button>
            <button 
              onClick={() => setCurrentSection('about')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentSection === 'about' ? 'text-primary bg-secondary' : 'text-gray-600 hover:text-primary'
              }`}
            >
              关于专栏
            </button>
            <button 
              onClick={() => setCurrentSection('contact')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentSection === 'contact' ? 'text-primary bg-secondary' : 'text-gray-600 hover:text-primary'
              }`}
            >
              联系我们
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <button 
              onClick={() => { setCurrentSection('home'); setIsMenuOpen(false) }}
              className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary hover:bg-secondary"
            >
              首页
            </button>
            <button 
              onClick={() => { setCurrentSection('articles'); setIsMenuOpen(false) }}
              className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary hover:bg-secondary"
            >
              专栏文章
            </button>
            <button 
              onClick={() => { setCurrentSection('about'); setIsMenuOpen(false) }}
              className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary hover:bg-secondary"
            >
              关于专栏
            </button>
            <button 
              onClick={() => { setCurrentSection('contact'); setIsMenuOpen(false) }}
              className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary hover:bg-secondary"
            >
              联系我们
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
        className="min-h-screen flex items-center justify-center text-white relative"
        style={{
          backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.5), rgba(44, 62, 80, 0.5)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-chinese">心沐六和</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">觉醒之路，从和开始</p>
          <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed opacity-80">
            在这个快节奏的时代，我们常常迷失在外在的纷扰中，忘记了内心的声音。
            "心沐六和"专栏，是一次深入内心的探索之旅，带您从自我和谐开始，
            逐步扩展到社会和谐、自然和谐，最终达到能量和谐、共频和谐，直至无我和谐的境界。
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg"
            onClick={() => setCurrentSection('articles')}
          >
            开始探索
          </Button>
        </div>
      </section>

      {/* 专栏特色 */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-chinese">专栏特色</h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            从内在觉醒到宇宙和谐，一条完整的修行之路
          </p>
        </div>
      </section>
      {/* 最新文章预览 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-chinese">最新文章</h2>
            <p className="text-lg text-muted-foreground">
              探索和谐的不同层次
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article) => {
              const IconComponent = article.icon
              return (
                <Card key={article.id} className="article-card overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute top-4 left-4 w-10 h-10 rounded-full bg-gradient-to-r ${article.color} flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{article.date}</Badge>
                    </div>
                    <CardTitle className="text-lg font-chinese">{article.title}</CardTitle>
                    <CardDescription className="text-sm text-accent font-medium">
                      {article.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {article.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setCurrentSection('articles')}
            >
              查看全部文章
            </Button>
          </div>
        </div>
      </section>
    </div>
  )

  // 文章列表组件
  const ArticlesPage = () => (
    <div className="pt-20 pb-16 fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-chinese">心沐六和专栏</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            八篇文章，八个层次，一条完整的觉醒之路
          </p>
        </div>

        <div className="grid gap-8">
          {articles.map((article, index) => {
            const IconComponent = article.icon
            return (
              <Card key={article.id} className="article-card overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r ${article.color} flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-medium">{index + 1}</span>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="secondary">{article.date}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 font-chinese">{article.title}</h3>
                    <p className="text-lg text-accent font-medium mb-4">{article.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )

  // 关于页面组件
  const AboutPage = () => (
    <div className="pt-20 pb-16 fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-chinese">关于专栏</h1>
          <p className="text-lg text-muted-foreground">
            了解"心沐六和"的理念与使命
          </p>
        </div>

        <div className="space-y-12">
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl font-chinese">专栏理念</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                "心沐六和"专栏诞生于对现代人精神困境的深度思考。在这个物质丰富却精神贫瘠的时代，
                我们比任何时候都更需要回到内心，寻找真正的和谐与平静。
              </p>
              <p>
                "六和"代表着六个层次的和谐状态：自我和、社会和、自然和、能量和、共频和、无我和。
                这不仅是一个理论框架，更是一条实践的道路。每一个层次都有其独特的修行方法和体验，
                但它们又是相互关联、层层递进的。
              </p>
              <p>
                我们相信，真正的觉醒不是逃离世界，而是在世界中找到内心的宁静；不是追求完美，
                而是接纳当下的完整；不是征服自然，而是与万物和谐共处。
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl font-chinese">专栏使命</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  为现代人提供一条通往内在觉醒的实践道路
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  传承东方智慧，结合现代心理学洞察
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  帮助读者在快节奏的生活中找到内心的平静
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  促进个人成长与社会和谐的良性循环
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl font-chinese">适合人群</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 text-accent mr-2" />
                    对精神成长和自我觉醒感兴趣的朋友
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-accent mr-2" />
                    在生活中感到迷茫或压力的现代人
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 text-accent mr-2" />
                    希望改善人际关系和社会适应能力的读者
                  </div>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center">
                    <Leaf className="w-5 h-5 text-accent mr-2" />
                    对东方哲学和修行文化有兴趣的探索者
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-5 h-5 text-accent mr-2" />
                    追求内在平静与外在和谐的修行者
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  // 联系页面组件
  const ContactPage = () => (
    <div className="pt-20 pb-16 fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-chinese">联系我们</h1>
          <p className="text-lg text-muted-foreground">
            与我们一起探索内在觉醒的道路
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl font-chinese">关注我们</CardTitle>
              <CardDescription>
                想要获得更多关于"心沐六和"的内容和更新，请关注我们的微信公众号"心沐日月"。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-secondary/50 p-6 rounded-lg text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">二维码</span>
                </div>
                <p className="font-medium">心沐日月</p>
                <p className="text-sm text-muted-foreground">微信公众号</p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl font-chinese">公众号介绍</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                "心沐日月"是一个专注于精神成长和内在觉醒的平台。我们定期分享关于冥想、正念、
                哲学思考、心理成长等方面的深度内容，致力于为现代人提供精神滋养和成长指导。
              </p>
              <Separator />
              <div>
                <h4 className="font-medium text-foreground mb-2">互动交流</h4>
                <p>
                  我们欢迎读者的反馈和交流。如果您在阅读过程中有任何感悟、疑问或建议，
                  都可以通过公众号与我们联系。每一份真诚的交流都是我们前进的动力。
                </p>
              </div>
              <Separator />
              <div>
                <h4 className="font-medium text-foreground mb-2">版权声明</h4>
                <p className="text-sm">
                  本专栏所有内容均为原创，版权归"心沐日月"公众号所有。
                  欢迎分享和转载，但请注明出处并保持内容完整性。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground italic font-chinese">
            让我们一起在"和"的智慧中，找到生命的真谛。
          </p>
        </div>
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
    <div className="min-h-screen scroll-smooth">
      <Navigation />
      {renderCurrentPage()}
      
      {/* 回到顶部按钮 */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 bg-accent hover:bg-accent/90"
          size="sm"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}

      {/* 页脚 */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={logoImage} alt="心沐六和" className="h-8 w-8 rounded" />
            <span className="text-lg font-bold font-chinese">心沐六和</span>
          </div>
          <p className="text-sm opacity-80">
            © 2024 心沐日月公众号 版权所有 | 觉醒之路，从和开始
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

