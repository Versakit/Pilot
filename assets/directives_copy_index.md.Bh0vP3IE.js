const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.BFyktTRJ.js","assets/chunks/framework.CTmPMVNO.js"])))=>i.map(i=>d[i]);
import{p,D as h,v as c,V as k,C as y,c as u,o as v,j as t,ah as g,G as e,ag as m,a as d,ai as f,k as a,w as r,aj as b}from"./chunks/framework.CTmPMVNO.js";import{O as _,E}from"./chunks/index.D6OAlCbV.js";const x=`<script setup lang="ts">
const copySuccess = () => {
  console.log('复制成功')
}

const copyError = (err: Error) => {
  console.error('复制失败:', err)
}
<\/script>

<template>
  <div class="copy-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <div v-pilot-copy class="copy-item">点击复制这段文本</div>
    </div>

    <h3>自定义文本</h3>
    <div class="demo-row">
      <div v-pilot-copy="{ text: '这是自定义的复制文本' }" class="copy-item">
        点击复制自定义文本
      </div>
    </div>

    <h3>回调函数</h3>
    <div class="demo-row">
      <div
        v-pilot-copy="{
          text: '带回调的复制文本',
          success: copySuccess,
          error: copyError,
        }"
        class="copy-item"
      >
        点击复制并查看控制台输出
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.copy-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

.copy-item {
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
`,D=JSON.parse('{"title":"Copy 复制指令","description":"","frontmatter":{},"headers":[],"relativePath":"directives/copy/index.md","filePath":"directives/copy/index.md"}'),C={name:"directives/copy/index.md"},w=Object.assign(C,{setup(F){const n=p(!0),i=h();return c(async()=>{i.value=(await k(async()=>{const{default:l}=await import("./chunks/index.BFyktTRJ.js");return{default:l}},__vite__mapDeps([0,1]))).default}),(l,s)=>{const o=y("ClientOnly");return v(),u("div",null,[s[1]||(s[1]=t("h1",{id:"copy-复制指令",tabindex:"-1"},[d("Copy 复制指令 "),t("a",{class:"header-anchor",href:"#copy-复制指令","aria-label":'Permalink to "Copy 复制指令"'},"​")],-1)),s[2]||(s[2]=t("p",null,"复制指令用于快速实现点击复制文本的功能。支持复制元素内容或自定义文本，并提供复制成功和失败的回调函数。",-1)),s[3]||(s[3]=t("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),g(e(a(_),null,null,512),[[f,n.value]]),e(o,null,{default:r(()=>[e(a(E),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{n.value=!1}),vueCode:a(x)},b({_:2},[i.value?{name:"vue",fn:r(()=>[e(a(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[4]||(s[4]=m(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="指令值" tabindex="-1">指令值 <a class="header-anchor" href="#指令值" aria-label="Permalink to &quot;指令值&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>要复制的文本，如果不传则使用元素的文本内容</td><td><code>string</code></td><td>-</td></tr><tr><td>success</td><td>复制成功的回调函数</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>error</td><td>复制失败的回调函数</td><td><code>(err: Error) =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="示例类型定义" tabindex="-1">示例类型定义 <a class="header-anchor" href="#示例类型定义" aria-label="Permalink to &quot;示例类型定义&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CopyOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	success</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	error</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,5))])}}});export{D as __pageData,w as default};
