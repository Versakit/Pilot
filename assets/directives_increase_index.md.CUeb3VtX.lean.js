const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.CI6LKWXb.js","assets/chunks/framework.CTmPMVNO.js"])))=>i.map(i=>d[i]);
import{p as c,D as m,v,V as u,C as p,c as b,o as f,j as n,ah as h,G as a,a as d,ai as _,k as t,w as r,aj as x}from"./chunks/framework.CTmPMVNO.js";import{O as g,E as y}from"./chunks/index.D6OAlCbV.js";const C=`<script setup lang="ts">
import { ref } from 'vue'

const numbers = ref({
  small: 100,
  medium: 1000,
  large: 10000,
  huge: 100000,
})
<\/script>

<template>
  <div class="increase-demo">
    <h3>数字增长动画</h3>
    <div class="demo-content">
      <div class="demo-item">
        <div class="label">小数值</div>
        <div class="number" v-increase="numbers.small">0</div>
      </div>
      <div class="demo-item">
        <div class="label">中数值</div>
        <div class="number" v-increase="numbers.medium">0</div>
      </div>
      <div class="demo-item">
        <div class="label">大数值</div>
        <div class="number" v-increase="numbers.large">0</div>
      </div>
      <div class="demo-item">
        <div class="label">超大数值</div>
        <div class="number" v-increase="numbers.huge">0</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.increase-demo {
  padding: 20px;

  h3 {
    margin-bottom: 20px;
    color: #333;
  }
}

.demo-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.demo-item {
  padding: 20px;
  background: #f5f7fa;
  border-radius: 8px;
  text-align: center;

  .label {
    margin-bottom: 10px;
    color: #666;
    font-size: 14px;
  }

  .number {
    font-size: 24px;
    font-weight: bold;
    color: #409eff;
  }
}
</style>
`,V=JSON.parse('{"title":"数字动画","description":"","frontmatter":{},"headers":[],"relativePath":"directives/increase/index.md","filePath":"directives/increase/index.md"}'),k={name:"directives/increase/index.md"},W=Object.assign(k,{setup(B){const i=c(!0),s=m();return v(async()=>{s.value=(await u(async()=>{const{default:l}=await import("./chunks/index.CI6LKWXb.js");return{default:l}},__vite__mapDeps([0,1]))).default}),(l,e)=>{const o=p("ClientOnly");return f(),b("div",null,[e[1]||(e[1]=n("h1",{id:"数字动画",tabindex:"-1"},[d("数字动画 "),n("a",{class:"header-anchor",href:"#数字动画","aria-label":'Permalink to "数字动画"'},"​")],-1)),e[2]||(e[2]=n("h2",{id:"基本使用",tabindex:"-1"},[d("基本使用 "),n("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),h(a(t(g),null,null,512),[[_,i.value]]),a(o,null,{default:r(()=>[a(t(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{i.value=!1}),vueCode:t(C)},x({_:2},[s.value?{name:"vue",fn:r(()=>[a(t(s))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{V as __pageData,W as default};
