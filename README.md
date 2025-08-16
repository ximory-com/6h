# 心沐六和网站 (Ximory Six Harmonies Website)

## 📁 项目结构

```
xinmu-liuhe-website/
├── public/                          # 静态资源目录
│   ├── images/                      # 图片资源
│   │   ├── hero_background_optimized.png    # 背景图
│   │   ├── overview_zh.png                  # 中文总览图PNG
│   │   ├── overview_en.png                  # 英文总览图PNG
│   │   ├── article_self_harmony.png         # 自我和配图
│   │   ├── article_social_harmony.png       # 社会和配图
│   │   ├── article_nature_harmony.png       # 自然和配图
│   │   ├── article_energy_harmony.png       # 能量和配图
│   │   ├── article_frequency_harmony.png    # 共频和配图
│   │   ├── article_no_self_harmony.png      # 无我和配图
│   │   └── article_awakening_path.png       # 觉醒之路配图
│   ├── icons/                       # 图标资源
│   │   ├── overview_zh.svg                  # 中文总览图SVG
│   │   └── overview_en.svg                  # 英文总览图SVG
│   └── logos/                       # LOGO资源
│       ├── XIMORY_Harmony_Logo_Main.svg    # 主LOGO
│       ├── 自我和.svg                        # 自我和子LOGO
│       ├── 社会和.svg                        # 社会和子LOGO
│       ├── 自然和.svg                        # 自然和子LOGO
│       ├── 能量和.svg                        # 能量和子LOGO
│       ├── 共频和.svg                        # 共频和子LOGO
│       └── 无我和.svg                        # 无我和子LOGO
├── src/                             # 源代码目录
│   ├── components/                  # React组件（预留）
│   ├── config/                      # 配置文件
│   │   └── content.json             # 网站内容配置
│   ├── data/                        # 数据文件（预留）
│   ├── assets/                      # 源码资源（预留）
│   ├── styles/                      # 样式文件
│   │   ├── App.css                  # 主样式文件
│   │   └── index.css                # 基础样式
│   ├── utils/                       # 工具函数（预留）
│   ├── App.jsx                      # 主应用组件
│   └── main.jsx                     # 应用入口
├── package.json                     # 项目配置
├── package-lock.json               # 依赖锁定
├── vite.config.js                  # 构建配置
├── vercel.json                     # 部署配置
└── README.md                       # 项目说明
```

## 🎨 设计系统

### LOGO系统
- **主LOGO**: 六边形组合设计，蓝绿渐变
- **子LOGO**: 每个和都有独特的H字形变体设计，对应特定颜色

### 色彩系统
- **自我和**: 晨光黄 `#F9CF4D`
- **社会和**: 珍珠粉 `#F58E7C`
- **自然和**: 苔原绿 `#00A651`
- **能量和**: 能量橙 `#FFB84D`
- **共频和**: 天空蓝 `#4783DF`
- **无我和**: 静夜蓝 `#2B3D70`

## 📝 内容结构

### 六和体系
每个和包含以下字段：
- **心和**: 名称
- **维度**: 和谐的维度
- **密码**: 字母代码
- **符号**: 象征符号
- **意象**: 视觉意象
- **色彩**: 专属颜色
- **境界**: 修行境界
- **路径**: 实践路径
- **箴言**: 核心理念
- **启悟**: 觉悟要点
- **心语**: 心灵感悟
- **阐释**: 详细解释

## 🚀 功能特性

### 已实现功能
- [x] 响应式设计
- [x] 中英文双语切换
- [x] 六和要素轮播展示
- [x] 水墨风格设计
- [x] SVG动画效果
- [x] 移动端优化

### 待实现功能
- [ ] 文章详情页面
- [ ] 微信公众号内容集成
- [ ] 视频内容展示
- [ ] 搜索功能
- [ ] 评论系统

## 🛠️ 开发指南

### 本地开发
```bash
npm install
npm run dev
```

### 构建部署
```bash
npm run build
git add .
git commit -m "更新内容"
git push origin master
```

### 内容更新
所有内容数据存储在 `src/config/content.json` 中，修改此文件即可更新网站内容。

## 📱 部署信息

- **开发环境**: http://localhost:5173/
- **生产环境**: https://6h-seven.vercel.app
- **自定义域名**: https://6h.ximory.com

## 📞 联系信息

- **微信公众号**: 心沐日月
- **版权**: © 2025 心沐日月（XIMORY）

