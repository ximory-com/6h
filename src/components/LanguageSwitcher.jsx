import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { useLanguage } from '../contexts/LanguageContext'
import { Globe } from 'lucide-react'

const LanguageSwitcher = ({ className = "" }) => {
  const { language, switchLanguage } = useLanguage()

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Globe className="w-4 h-4 text-muted-foreground" />
      <Button
        variant={language === 'zh' ? 'default' : 'outline'}
        size="sm"
        onClick={() => switchLanguage('zh')}
        className="text-xs px-2 py-1"
      >
        中文
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => switchLanguage('en')}
        className="text-xs px-2 py-1"
      >
        EN
      </Button>
    </div>
  )
}

export default LanguageSwitcher

