const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.DSYWyhJF.js","assets/chunks/framework.CTmPMVNO.js"])))=>i.map(i=>d[i]);
import{p,D as h,v as c,V as k,C as y,c as u,o as m,j as s,ah as v,G as i,ag as g,a as r,ai as C,k as a,w as d,aj as w}from"./chunks/framework.CTmPMVNO.js";import{O as _,E as b}from"./chunks/index.D6OAlCbV.js";const f=`<script setup lang="ts">
const handleComplete = () => {
  console.log('打字效果完成')
}
<\/script>

<template>
  <div class="typewriter-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <div
        v-typewriter="{
          text: '这是一个基本的打字机效果示例',
          speed: 100,
        }"
        class="typewriter-item"
      />
    </div>

    <h3>自定义光标</h3>
    <div class="demo-row">
      <div
        v-typewriter="{
          text: '使用自定义光标字符',
          cursorChar: '_',
          speed: 150,
        }"
        class="typewriter-item"
      />
    </div>

    <h3>延迟开始</h3>
    <div class="demo-row">
      <div
        v-typewriter="{
          text: '延迟1秒后开始打字效果',
          delay: 1000,
          onComplete: handleComplete,
        }"
        class="typewriter-item"
      />
    </div>

    <h3>无光标</h3>
    <div class="demo-row">
      <div
        v-typewriter="{
          text: '不显示光标的打字效果',
          cursor: false,
        }"
        class="typewriter-item"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.typewriter-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

.typewriter-item {
  padding: 15px;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  min-height: 24px;
  line-height: 1.6;
  font-family: monospace;
}
</style>
`,E=JSON.parse('{"title":"Typewriter 打字机指令","description":"","frontmatter":{},"headers":[],"relativePath":"directives/typewriter/index.md","filePath":"directives/typewriter/index.md"}'),F={name:"directives/typewriter/index.md"},D=Object.assign(F,{setup(x){const t=p(!0),n=h();return c(async()=>{n.value=(await k(async()=>{const{default:l}=await import("./chunks/index.DSYWyhJF.js");return{default:l}},__vite__mapDeps([0,1]))).default}),(l,e)=>{const o=y("ClientOnly");return m(),u("div",null,[e[1]||(e[1]=s("h1",{id:"typewriter-打字机指令",tabindex:"-1"},[r("Typewriter 打字机指令 "),s("a",{class:"header-anchor",href:"#typewriter-打字机指令","aria-label":'Permalink to "Typewriter 打字机指令"'},"​")],-1)),e[2]||(e[2]=s("p",null,"打字机指令用于创建文字逐个显示的打字机效果。支持自定义打字速度、延迟开始时间、光标样式等。",-1)),e[3]||(e[3]=s("h2",{id:"基础用法",tabindex:"-1"},[r("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),v(i(a(_),null,null,512),[[C,t.value]]),i(o,null,{default:d(()=>[i(a(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:a(f)},w({_:2},[n.value?{name:"vue",fn:d(()=>[i(a(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[4]||(e[4]=g("",7))])}}});export{E as __pageData,D as default};
