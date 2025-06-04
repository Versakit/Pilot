const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.DAr7g0v8.js","assets/chunks/framework.CTmPMVNO.js"])))=>i.map(i=>d[i]);
import{p,D as k,v as o,V as c,C as g,c as m,o as u,j as s,ah as F,G as e,ag as y,a as l,ai as b,k as a,w as h,aj as v}from"./chunks/framework.CTmPMVNO.js";import{O as E,E as C}from"./chunks/index.D6OAlCbV.js";const f=`<script setup lang="ts">
const handleResize = (width: number, height: number) => {
  console.log(\`新尺寸: \${width}x\${height}\`)
}
<\/script>

<template>
  <div class="resize-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <div
        v-resize="{
          minWidth: 100,
          minHeight: 100,
          onResize: handleResize,
        }"
        class="resize-item"
      >
        拖动右下角调整大小
      </div>
    </div>

    <h3>限制最大尺寸</h3>
    <div class="demo-row">
      <div
        v-resize="{
          minWidth: 100,
          minHeight: 100,
          maxWidth: 300,
          maxHeight: 200,
          onResize: handleResize,
        }"
        class="resize-item"
      >
        拖动右下角调整大小（最大 300x200）
      </div>
    </div>

    <h3>多方向调整</h3>
    <div class="demo-row">
      <div
        v-resize="{
          minWidth: 100,
          minHeight: 100,
          handles: ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'],
          onResize: handleResize,
        }"
        class="resize-item"
      >
        可以从任意角落调整大小
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resize-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

.resize-item {
  width: 200px;
  height: 100px;
  background: #f5f7fa;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  position: relative;
  user-select: none;
}

:deep(.resize-handle) {
  background-color: #409eff;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #66b1ff;
  }
}
</style>
`,B=JSON.parse('{"title":"Resize 大小调整指令","description":"","frontmatter":{},"headers":[],"relativePath":"directives/resize/index.md","filePath":"directives/resize/index.md"}'),x={name:"directives/resize/index.md"},w=Object.assign(x,{setup(A){const t=p(!0),n=k();return o(async()=>{n.value=(await c(async()=>{const{default:d}=await import("./chunks/index.DAr7g0v8.js");return{default:d}},__vite__mapDeps([0,1]))).default}),(d,i)=>{const r=g("ClientOnly");return u(),m("div",null,[i[1]||(i[1]=s("h1",{id:"resize-大小调整指令",tabindex:"-1"},[l("Resize 大小调整指令 "),s("a",{class:"header-anchor",href:"#resize-大小调整指令","aria-label":'Permalink to "Resize 大小调整指令"'},"​")],-1)),i[2]||(i[2]=s("p",null,"大小调整指令用于使元素可以通过拖拽调整大小。支持八个方向的调整，可以限制最小和最大尺寸，并提供尺寸变化的回调函数。",-1)),i[3]||(i[3]=s("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),F(e(a(E),null,null,512),[[b,t.value]]),e(r,null,{default:h(()=>[e(a(C),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:i[0]||(i[0]=()=>{t.value=!1}),vueCode:a(f)},v({_:2},[n.value?{name:"vue",fn:h(()=>[e(a(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),i[4]||(i[4]=y("",7))])}}});export{B as __pageData,w as default};
