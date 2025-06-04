const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.BG64j6kJ.js","assets/chunks/framework.CTmPMVNO.js"])))=>i.map(i=>d[i]);
import{p as h,D as p,v as c,V as u,C as k,c as g,o as m,j as a,ah as v,G as s,ag as b,a as d,ai as f,k as n,w as o,aj as y}from"./chunks/framework.CTmPMVNO.js";import{O as _,E as x}from"./chunks/index.D6OAlCbV.js";const C=`<script setup lang="ts">
const handleLongPress = () => {
  console.log('长按触发')
}
<\/script>

<template>
  <div class="long-press-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <div v-long-press="{ callback: handleLongPress }" class="long-press-item">
        长按触发回调
      </div>
    </div>

    <h3>自定义时长</h3>
    <div class="demo-row">
      <div
        v-long-press="{ duration: 1000, callback: handleLongPress }"
        class="long-press-item"
      >
        长按1秒触发
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.long-press-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

.long-press-item {
  display: inline-block;
  padding: 10px 20px;
  background: #f5f7fa;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #ecf5ff;
    border-color: #409eff;
    color: #409eff;
  }
}
</style>
`,F=JSON.parse('{"title":"LongPress 长按指令","description":"","frontmatter":{},"headers":[],"relativePath":"directives/long-press/index.md","filePath":"directives/long-press/index.md"}'),P={name:"directives/long-press/index.md"},w=Object.assign(P,{setup(E){const i=h(!0),t=p();return c(async()=>{t.value=(await u(async()=>{const{default:l}=await import("./chunks/index.BG64j6kJ.js");return{default:l}},__vite__mapDeps([0,1]))).default}),(l,e)=>{const r=k("ClientOnly");return m(),g("div",null,[e[1]||(e[1]=a("h1",{id:"longpress-长按指令",tabindex:"-1"},[d("LongPress 长按指令 "),a("a",{class:"header-anchor",href:"#longpress-长按指令","aria-label":'Permalink to "LongPress 长按指令"'},"​")],-1)),e[2]||(e[2]=a("p",null,"长按指令用于检测元素的长按事件。支持自定义触发时长，同时支持移动端触摸事件和桌面端鼠标事件。",-1)),e[3]||(e[3]=a("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),v(s(n(_),null,null,512),[[f,i.value]]),s(r,null,{default:o(()=>[s(n(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{i.value=!1}),vueCode:n(C)},y({_:2},[t.value?{name:"vue",fn:o(()=>[s(n(t))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[4]||(e[4]=b("",7))])}}});export{F as __pageData,w as default};
