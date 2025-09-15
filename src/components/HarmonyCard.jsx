import React from 'react';

const HarmonyCard = ({ harmony, language }) => {
  // 确保六和数据存在
  if (!harmony || !harmony[language]) {
    return null;
  }

  const harmonyContent = harmony[language];
  
  return (
    <div className="harmony-card" style={{borderColor: harmonyContent.color}}>
      <div className="harmony-header">
        <img 
          src={harmony.logo} 
          alt={harmonyContent.title} 
          className="harmony-logo"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/logos/default_harmony.svg';
          }}
        />
        <h3 className="harmony-title" style={{color: harmonyContent.color}}>
          {harmonyContent.title}
        </h3>
      </div>
      
      <div className="harmony-content">
        <div className="harmony-details">
          <div className="harmony-field">
            <span className="field-label">心和</span>
            <span className="field-value">{harmonyContent.heartName}</span>
          </div>
          
          <div className="harmony-field">
            <span className="field-label">维度</span>
            <span className="field-value">{harmonyContent.dimension}</span>
          </div>
          
          <div className="harmony-field">
            <span className="field-label">密码</span>
            <span className="field-value code">{harmonyContent.code}</span>
          </div>
          
          <div className="harmony-field">
            <span className="field-label">符号</span>
            <span className="field-value symbol">{harmonyContent.symbol}</span>
          </div>
          
          <div className="harmony-field">
            <span className="field-label">意象</span>
            <span className="field-value">{harmonyContent.imagery}</span>
          </div>
          
          <div className="harmony-field">
            <span className="field-label">色彩</span>
            <span className="field-value">
              {harmonyContent.colorName} 
              <span className="color-dot" style={{backgroundColor: harmonyContent.color}}></span>
            </span>
          </div>
          
          <div className="harmony-field">
            <span className="field-label">境界</span>
            <span className="field-value realm">{harmonyContent.realm}</span>
          </div>
          
          <div className="harmony-field">
            <span className="field-label">路径</span>
            <span className="field-value">{harmonyContent.path}</span>
          </div>
          
          <div className="harmony-field">
            <span className="field-label">箴言</span>
            <span className="field-value">{harmonyContent.motto}</span>
          </div>
          
          <div className="harmony-field">
            <span className="field-label">启悟</span>
            <span className="field-value">{harmonyContent.enlightenment}</span>
          </div>
          
          <div className="harmony-field">
            <span className="field-label">心语</span>
            <span className="field-value heart-words">{harmonyContent.heartWords}</span>
          </div>
          
          <div className="harmony-field">
            <span className="field-label">阐释</span>
            <span className="field-value interpretation">{harmonyContent.interpretation}</span>
          </div>
        </div>
        
        {harmony.image && (
          <img 
            src={harmony.image} 
            alt={harmonyContent.title} 
            className="harmony-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/harmony_placeholder.png';
            }}
          />
        )}
      </div>
    </div>
  );
};

export default HarmonyCard;

