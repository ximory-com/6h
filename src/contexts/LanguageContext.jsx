import React, { createContext, useContext, useState, useEffect } from 'react'
import contentData from '../config/content.json'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('zh')
  const [content, setContent] = useState(contentData)

  useEffect(() => {
    // 从localStorage获取保存的语言设置
    const savedLanguage = localStorage.getItem('preferred-language')
    if (savedLanguage && (savedLanguage === 'zh' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  const switchLanguage = (newLanguage) => {
    if (newLanguage === 'zh' || newLanguage === 'en') {
      setLanguage(newLanguage)
      localStorage.setItem('preferred-language', newLanguage)
    }
  }

  const t = (path) => {
    const keys = path.split('.')
    let result = content
    
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key]
      } else {
        console.warn(`Translation key not found: ${path}`)
        return path
      }
    }
    
    if (result && typeof result === 'object' && language in result) {
      return result[language]
    }
    
    // 如果result本身就是字符串，直接返回
    if (typeof result === 'string') {
      return result
    }
    
    console.warn(`Translation not found for language ${language} at path: ${path}`)
    return path
  }

  const getContent = (path) => {
    const keys = path.split('.')
    let result = content
    
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key]
      } else {
        return null
      }
    }
    
    return result
  }

  const value = {
    language,
    switchLanguage,
    t,
    getContent,
    isZh: language === 'zh',
    isEn: language === 'en'
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

