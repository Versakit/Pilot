<template>
  <div class="theme-main-page">
    <div class="hero-section">
      <div class="stars-background"></div>
      <div class="space-objects">
        <div class="planet planet-1"></div>
        <div class="planet planet-2"></div>
        <div class="shooting-star shooting-star-1"></div>
        <div class="shooting-star shooting-star-2"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="logo-section">
            <svg class="rocket-logo" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 2C23 12 18 22 16 32C22 30 29 30 32 30C35 30 42 30 48 32C46 22 41 12 32 2Z" fill="#0066cc" />
              <path d="M32 38C28 38 24 39 20 40L24 56C24 58 28 58 32 58C36 58 40 58 40 56L44 40C40 39 36 38 32 38Z"
                fill="#0052a3" />
              <path d="M22 34C19 34 16 36 16 40C12 42 10 46 10 52C14 50 18 48 22 46C22 42 22 38 22 34Z"
                fill="#0066cc" />
              <path d="M42 34C45 34 48 36 48 40C52 42 54 46 54 52C50 50 46 48 42 46C42 42 42 38 42 34Z"
                fill="#0066cc" />
            </svg>
          </div>
          <div class="title-section">
            <h1 class="main-title">Pilot</h1>
            <p class="subtitle">探索未知,引领创新的指令库</p>
          </div>

          <div class="cta-section">
            <button @click="navigate('/Pilot/guide/versakit/')" class="start-button">
              开始探索
              <svg class="start-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" fill="none" />
              </svg>
            </button>
            <div class="version-badge">V 0.3.10</div>
          </div>
        </div>
      </div>
    </div>

    <main class="main-content">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Pilot</h2>
          <p class="section-description">基于 Vue3的指令库</p>
        </div>

        <div class="feature-grid">
          <div class="feature-card" v-for="item in features" :key="item.name" @click="navigate(item.link)">
            <div class="feature-icon-wrapper">
              <svg class="feature-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" v-html="item.svg"></svg>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">{{ item.title }}</h3>
              <p class="feature-description">{{ item.description }}</p>
            </div>
            <div class="feature-footer">
              <span>{{ item.btnText }}</span>
              <svg class="arrow-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const navigate = (path) => {
  window.location.href = path
}

// 特性卡片数据
const features = [
  {
    name: 'directives',
    title: '核心指令',
    description: '精心打造的Vue3指令，助您快速构建交互丰富的用户界面',
    link: '/Pilot/directives/ripple/',
    btnText: '浏览指令',
    svg: `<path d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5z" fill="none" stroke="currentColor" stroke-width="2"></path>
          <path d="M9 9h6M9 12h6M9 15h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>`,
  },
  {
    name: 'performance',
    title: '高性能',
    description: '轻量级设计，零依赖，确保您的应用保持最佳性能',
    link: '/Pilot/guide/quickstart/',
    btnText: '性能详情',
    svg: `<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>`,
  },
  {
    name: 'customization',
    title: '易于定制',
    description: '每个指令都提供丰富的配置选项，满足您的个性化需求',
    link: '/Pilot/guide/directives/',
    btnText: '定制指南',
    svg: `<circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" stroke-width="2"></circle>
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>`,
  },
]
</script>

<style>
/* 基础样式重置 */
.VPDoc .has-aside {
  padding: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  overflow-x: hidden;
}

.theme-main-page {
  width: 100%;
  overflow-x: hidden;
}

.container {
  width: 100%;
  /* max-width: 1152px; */
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* 英雄区域样式 */
.hero-section {
  position: relative;
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #001233 0%, #023e8a 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  left: 0;
  right: 0;
}

/* 星空背景 */
.stars-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(2px 2px at 20px 30px, #ffffff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 40px 70px, #ffffff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 50px 160px, #ffffff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 130px 80px, #ffffff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 160px 120px, #ffffff, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  background-size: 200px 200px;
  animation: stars 100s linear infinite;
  opacity: 0.6;
}

@keyframes stars {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 200px 200px;
  }
}

/* 流星动画 */
.shooting-star {
  position: absolute;
  width: 150px;
  height: 1px;
  transform: rotate(-45deg);
  background: linear-gradient(90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%);
}

.shooting-star-1 {
  top: 10%;
  left: 10%;
  animation: shooting-star 6s linear infinite;
  animation-delay: 2s;
}

.shooting-star-2 {
  top: 15%;
  right: 20%;
  animation: shooting-star 8s linear infinite;
  animation-delay: 5s;
}

@keyframes shooting-star {
  0% {
    transform: translateX(0) translateY(0) rotate(-45deg);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  100% {
    transform: translateX(500px) translateY(500px) rotate(-45deg);
    opacity: 0;
  }
}

/* 行星装饰 */
.planet {
  position: absolute;
  border-radius: 50%;
}

.planet-1 {
  width: 100px;
  height: 100px;
  background: radial-gradient(circle at 30% 30%, #0077b6, #023e8a);
  top: 15%;
  right: 15%;
  box-shadow: 0 0 20px rgba(0, 119, 182, 0.6);
  animation: planet-float 15s ease-in-out infinite;
}

.planet-2 {
  width: 60px;
  height: 60px;
  background: radial-gradient(circle at 30% 30%, #48cae4, #0096c7);
  bottom: 20%;
  left: 10%;
  box-shadow: 0 0 15px rgba(0, 150, 199, 0.6);
  animation: planet-float 20s ease-in-out infinite reverse;
}

@keyframes planet-float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }
}

/* 内容区域 */
.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  color: #fff;
  padding: 2rem;
}

.logo-section {
  margin-bottom: 2rem;
}

.rocket-logo {
  width: 120px;
  height: 120px;
  animation: rocket-float 6s ease-in-out infinite;
}

@keyframes rocket-float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-15px);
  }
}

.title-section {
  margin-bottom: 3rem;
}

.main-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 119, 182, 0.5);
  background: linear-gradient(135deg, #ffffff 0%, #90e0ef 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: title-glow 3s ease-in-out infinite;
}

@keyframes title-glow {

  0%,
  100% {
    text-shadow: 0 0 10px rgba(0, 119, 182, 0.7);
  }

  50% {
    text-shadow: 0 0 20px rgba(0, 119, 182, 1);
  }
}

.subtitle {
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 300;
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
}

/* CTA 区域 */
.cta-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.start-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(90deg, #0077b6 0%, #00b4d8 100%);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 119, 182, 0.5);
}

.start-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 119, 182, 0.7);
}

.start-icon {
  width: 1.2rem;
  height: 1.2rem;
  margin-left: 0.5rem;
}

.version-badge {
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  font-size: 0.875rem;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: badge-pulse 3s infinite linear;
}

@keyframes badge-pulse {

  0%,
  100% {
    opacity: 0.7;
  }

  50% {
    opacity: 1;
  }
}

/* 主内容区域 */
.main-content {
  padding: 5rem 0;
  background-color: #f8f9fa;
}

.dark .main-content {
  background-color: #0a192f;
  color: #e6f1ff;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #0077b6;
}

.dark .section-title {
  color: #64ffda;
}

.section-description {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  color: #495057;
}

.dark .section-description {
  color: #8892b0;
}

/* 特性卡片 */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.dark .feature-card {
  background: #112240;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 119, 182, 0.2);
}

.feature-icon-wrapper {
  padding: 2rem;
  display: flex;
  justify-content: center;
  background: linear-gradient(135deg, #caf0f8 0%, #90e0ef 100%);
}

.dark .feature-icon-wrapper {
  background: linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%);
}

.feature-icon {
  width: 3rem;
  height: 3rem;
  color: #0077b6;
}

.dark .feature-icon {
  color: #64ffda;
}

.feature-content {
  padding: 1.5rem;
  flex: 1;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #0077b6;
}

.dark .feature-title {
  color: #64ffda;
}

.feature-description {
  color: #6c757d;
  font-size: 0.9rem;
  line-height: 1.5;
}

.dark .feature-description {
  color: #8892b0;
}

.feature-footer {
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e9ecef;
  color: #0077b6;
  font-weight: 500;
}

.dark .feature-footer {
  border-top: 1px solid #1b263b;
  color: #64ffda;
}

.arrow-icon {
  width: 1.2rem;
  height: 1.2rem;
  transition: transform 0.3s ease;
}

.feature-card:hover .arrow-icon {
  transform: translateX(5px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>
