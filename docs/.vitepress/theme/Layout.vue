<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide } from 'vue'

const { isDark } = useData()

const { Layout } = DefaultTheme

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`,
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  )
})
</script>

<template>
  <DefaultTheme.Layout />
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

/* 布局和视觉层次 */
.VPDoc {
  padding: 0 !important;
  overflow: visible !important;
  position: relative;
  transition: all 1.2s cubic-bezier(0.16, 0.85, 0.25, 1);
}

.VPDoc.has-aside .container .aside:has(.theme-main-page) {
  display: none;
}

.VPDoc.has-aside .container .aside .aside-curtain {
  display: none;
}

.VPContent#VPContent .VPDoc.has-aside > .container:has(.theme-main-page) {
  display: block;
  max-width: 100%;
}

.VPDoc.has-aside .container .content:has(.theme-main-page) {
  max-width: 100%;
  padding: 0;
}

.VPDoc.has-aside .container .content-container:has(.theme-main-page) {
  max-width: 100%;
}

.VPNavBar.top {
  user-select: none;
}

.dark {
  --vp-c-bg: #0a0a0a;
  --vp-c-text: rgba(255, 255, 255, 0.96);
  background: var(--vp-c-bg) !important;
}

.VPNavBar.top {
  z-index: 999999;
  position: relative;
  background: rgba(var(--vp-c-bg-raw), 0.8);
  backdrop-filter: blur(12px);
}

/* 全局渐变过渡 */
* {
  transition:
    background-color 0.6s cubic-bezier(0.16, 0.85, 0.25, 1),
    color 0.6s cubic-bezier(0.16, 0.85, 0.25, 1),
    opacity 0.4s ease;
}

/* 暗模式对比度 */
.dark .VPContent {
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 10, 1) 0%,
    rgba(20, 20, 20, 1) 100%
  );
}

/* 自定义指令库样式 */
.vp-doc h1 {
  background: linear-gradient(
    90deg,
    var(--vp-c-brand),
    var(--vp-c-brand-light)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.vp-doc h2 {
  border-left: 4px solid var(--vp-c-brand);
  padding-left: 12px;
}

.vp-doc a {
  text-decoration: none;
  border-bottom: 1px dashed var(--vp-c-brand-light);
  transition:
    border-bottom 0.3s,
    color 0.3s;
}

.vp-doc a:hover {
  border-bottom: 1px solid var(--vp-c-brand);
}

/* 代码块样式 */
.vp-doc div[class*='language-'] {
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.dark .vp-doc div[class*='language-'] {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.vp-doc div[class*='language-']:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
}

.dark .vp-doc div[class*='language-']:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}
</style>
