import React, { useState, useEffect } from 'react';
import HarmonyCard from './HarmonyCard';

const HarmoniesCarousel = ({ harmonies, language, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % harmonies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [harmonies.length]);

  // 确保六和数据存在
  if (!harmonies || harmonies.length === 0) {
    return (
      <section className="harmonies-section">
        <h2 className="section-title">{title}</h2>
        <div className="no-harmonies">
          <p>暂无六和数据</p>
        </div>
      </section>
    );
  }

  const currentHarmony = harmonies[currentIndex];

  return (
    <section className="harmonies-section">
      <h2 className="section-title">{title}</h2>
      
      <div className="harmony-carousel">
        <HarmonyCard 
          harmony={currentHarmony} 
          language={language} 
        />
        
        {/* 轮播指示器 */}
        <div className="carousel-indicators">
          {harmonies.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              style={{
                backgroundColor: index === currentIndex ? 
                  harmonies[index][language].color : 'rgba(255,255,255,0.3)'
              }}
              aria-label={`查看第${index + 1}个六和要素`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HarmoniesCarousel;

