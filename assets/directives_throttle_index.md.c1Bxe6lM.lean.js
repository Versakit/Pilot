const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.BDAGTI9N.js","assets/chunks/framework.CTmPMVNO.js"])))=>i.map(i=>d[i]);
import{p as u,D as p,v as m,V as h,C as c,c as v,o as f,j as t,ah as b,G as n,ag as _,a as r,ai as x,k as a,w as i,aj as g}from"./chunks/framework.CTmPMVNO.js";import{O as y,E as V}from"./chunks/index.D6OAlCbV.js";const T=`<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')
const throttledValue = ref('')
const immediateValue = ref('')
const immediateThrottledValue = ref('')

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  throttledValue.value = target.value
}

const handleImmediateInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  immediateThrottledValue.value = target.value
}
<\/script>

<template>
  <div class="throttle-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <div class="demo-col">
        <input
          v-model="inputValue"
          v-pilot-throttle="{ delay: 500 }"
          @input="handleInput"
          placeholder="输入内容，每500ms最多执行一次"
        />
        <div class="result">
          <p>输入值: {{ inputValue }}</p>
          <p>节流值: {{ throttledValue }}</p>
        </div>
      </div>
    </div>

    <h3>立即执行</h3>
    <div class="demo-row">
      <div class="demo-col">
        <input
          v-model="immediateValue"
          v-pilot-throttle="{ delay: 500, immediate: true }"
          @input="handleImmediateInput"
          placeholder="输入内容，立即执行一次，之后每500ms最多执行一次"
        />
        <div class="result">
          <p>输入值: {{ immediateValue }}</p>
          <p>节流值: {{ immediateThrottledValue }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.throttle-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

.demo-col {
  display: flex;
  flex-direction: column;
  width: 100%;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  margin-bottom: 10px;
}

.result {
  margin-top: 10px;
  padding: 10px;
  background: #f5f7fa;
  border-radius: 4px;

  p {
    margin: 5px 0;
    color: #666;
  }
}
</style>
`,A=JSON.parse('{"title":"Throttle 节流","description":"","frontmatter":{},"headers":[],"relativePath":"directives/throttle/index.md","filePath":"directives/throttle/index.md"}'),w={name:"directives/throttle/index.md"},E=Object.assign(w,{setup(C){const d=u(!0),l=p();return m(async()=>{l.value=(await h(async()=>{const{default:o}=await import("./chunks/index.BDAGTI9N.js");return{default:o}},__vite__mapDeps([0,1]))).default}),(o,e)=>{const s=c("ClientOnly");return f(),v("div",null,[e[1]||(e[1]=t("h1",{id:"throttle-节流",tabindex:"-1"},[r("Throttle 节流 "),t("a",{class:"header-anchor",href:"#throttle-节流","aria-label":'Permalink to "Throttle 节流"'},"​")],-1)),e[2]||(e[2]=t("p",null,"节流指令用于控制事件的触发频率，在指定时间内只执行一次事件处理函数。",-1)),e[3]||(e[3]=t("h2",{id:"基本使用",tabindex:"-1"},[r("基本使用 "),t("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),b(n(a(y),null,null,512),[[x,d.value]]),n(s,null,{default:i(()=>[n(a(V),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{d.value=!1}),vueCode:a(T)},g({_:2},[l.value?{name:"vue",fn:i(()=>[n(a(l))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[4]||(e[4]=_("",4))])}}});export{A as __pageData,E as default};
