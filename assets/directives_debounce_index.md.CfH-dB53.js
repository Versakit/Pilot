const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.hlWzp-6M.js","assets/chunks/framework.CTmPMVNO.js"])))=>i.map(i=>d[i]);
import{p as u,D as p,v as m,V as c,C as h,c as b,o as v,j as n,ah as f,G as t,ag as _,a as i,ai as x,k as a,w as r,aj as V}from"./chunks/framework.CTmPMVNO.js";import{O as g,E as y}from"./chunks/index.D6OAlCbV.js";const D=`<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')
const debouncedValue = ref('')
const immediateValue = ref('')
const immediateDebouncedValue = ref('')

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  debouncedValue.value = target.value
}

const handleImmediateInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  immediateDebouncedValue.value = target.value
}
<\/script>

<template>
  <div class="debounce-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <div class="demo-col">
        <input
          v-model="inputValue"
          v-pilot-debounce="{ delay: 500 }"
          @input="handleInput"
          placeholder="输入内容，500ms后更新"
        />
        <div class="result">
          <p>输入值: {{ inputValue }}</p>
          <p>防抖值: {{ debouncedValue }}</p>
        </div>
      </div>
    </div>

    <h3>立即执行</h3>
    <div class="demo-row">
      <div class="demo-col">
        <input
          v-model="immediateValue"
          v-pilot-debounce="{ delay: 500, immediate: true }"
          @input="handleImmediateInput"
          placeholder="输入内容，立即执行一次，之后500ms更新"
        />
        <div class="result">
          <p>输入值: {{ immediateValue }}</p>
          <p>防抖值: {{ immediateDebouncedValue }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.debounce-demo {
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
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
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
`,k=JSON.parse('{"title":"Debounce 防抖","description":"","frontmatter":{},"headers":[],"relativePath":"directives/debounce/index.md","filePath":"directives/debounce/index.md"}'),w={name:"directives/debounce/index.md"},A=Object.assign(w,{setup(C){const l=u(!0),d=p();return m(async()=>{d.value=(await c(async()=>{const{default:o}=await import("./chunks/index.hlWzp-6M.js");return{default:o}},__vite__mapDeps([0,1]))).default}),(o,e)=>{const s=h("ClientOnly");return v(),b("div",null,[e[1]||(e[1]=n("h1",{id:"debounce-防抖",tabindex:"-1"},[i("Debounce 防抖 "),n("a",{class:"header-anchor",href:"#debounce-防抖","aria-label":'Permalink to "Debounce 防抖"'},"​")],-1)),e[2]||(e[2]=n("p",null,"防抖指令用于控制事件的触发频率，在指定时间内多次触发事件，只执行最后一次。",-1)),e[3]||(e[3]=n("h2",{id:"基本使用",tabindex:"-1"},[i("基本使用 "),n("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),f(t(a(g),null,null,512),[[x,l.value]]),t(s,null,{default:r(()=>[t(a(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:a(D)},V({_:2},[d.value?{name:"vue",fn:r(()=>[t(a(d))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[4]||(e[4]=_('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>delay</td><td>延迟时间（毫秒）</td><td>number</td><td>300</td></tr><tr><td>immediate</td><td>是否立即执行</td><td>boolean</td><td>false</td></tr></tbody></table><p>&lt;/rewritten_file&gt;</p>',4))])}}});export{k as __pageData,A as default};
