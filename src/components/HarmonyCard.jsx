import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { useLanguage } from '../contexts/LanguageContext'

const HarmonyCard = ({ harmonyKey, className = "" }) => {
  const { t, getContent } = useLanguage()
  
  const harmonyData = getContent(`harmonies.${harmonyKey}`)
  if (!harmonyData) return null

  const harmonyInfo = harmonyData[t('language')] || harmonyData.zh

  const getHarmonyColor = (key) => {
    const colors = {
      self: "from-blue-400 to-purple-500",
      social: "from-pink-400 to-red-500", 
      nature: "from-green-400 to-teal-500",
      energy: "from-purple-400 to-indigo-500",
      frequency: "from-orange-400 to-yellow-500",
      noself: "from-indigo-400 to-blue-500"
    }
    return colors[key] || "from-gray-400 to-gray-500"
  }

  return (
    <Card className={`harmony-card overflow-hidden hover:shadow-lg transition-all duration-300 ${className}`}>
      <CardHeader className="pb-3">
        <div className={`w-full h-2 rounded-full bg-gradient-to-r ${getHarmonyColor(harmonyKey)} mb-3`}></div>
        <CardTitle className="text-lg font-chinese">{harmonyInfo.name}</CardTitle>
        <p className="text-sm text-muted-foreground font-medium">{harmonyInfo.title}</p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="p-3 bg-secondary/30 rounded-lg">
            <p className="text-sm font-medium text-accent mb-1">核心要素</p>
            <p className="text-sm leading-relaxed">{harmonyInfo.essence}</p>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {harmonyInfo.description}
          </p>
          
          <div className="flex flex-wrap gap-1">
            {harmonyInfo.keywords.map((keyword, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default HarmonyCard

