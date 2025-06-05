const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.D76t2ppH.js","assets/chunks/framework.CTmPMVNO.js"])))=>i.map(i=>d[i]);
import{p as h,D as u,v as c,V as p,C as v,c as b,o as m,j as e,ah as g,G as a,ag as x,a as i,ai as f,k as d,w as s,aj as _}from"./chunks/framework.CTmPMVNO.js";import{O as y,E as w}from"./chunks/index.D6OAlCbV.js";const C=`<script setup lang="ts">
// 不需要导入 VKPanel，因为我们使用原生 div 元素
<\/script>

<template>
  <div class="drag-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <div class="drag-container">
        <div v-pilot-drag class="draggable">自由拖拽</div>
      </div>
    </div>

    <h3>限制方向</h3>
    <div class="demo-row">
      <div class="drag-container">
        <div v-pilot-drag="{ axis: 'x' }" class="draggable">只能水平拖拽</div>
      </div>
    </div>

    <h3>限制边界</h3>
    <div class="demo-row">
      <div class="drag-container">
        <div
          v-pilot-drag="{
            boundary: { left: 0, right: 300, top: 0, bottom: 100 },
          }"
          class="draggable"
        >
          限制在容器内拖拽
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.drag-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

.drag-container {
  position: relative;
  width: 400px;
  height: 200px;
  border: 1px dashed #dcdfe6;
  border-radius: 4px;
  background: #f5f7fa;
  overflow: hidden;
}

.draggable {
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: move;
  user-select: none;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>
`,T=JSON.parse('{"title":"Drag 拖拽","description":"","frontmatter":{},"headers":[],"relativePath":"directives/drag/index.md","filePath":"directives/drag/index.md"}'),k={name:"directives/drag/index.md"},A=Object.assign(k,{setup(D){const r=h(!0),n=u();return c(async()=>{n.value=(await p(async()=>{const{default:o}=await import("./chunks/index.D76t2ppH.js");return{default:o}},__vite__mapDeps([0,1]))).default}),(o,t)=>{const l=v("ClientOnly");return m(),b("div",null,[t[1]||(t[1]=e("h1",{id:"drag-拖拽",tabindex:"-1"},[i("Drag 拖拽 "),e("a",{class:"header-anchor",href:"#drag-拖拽","aria-label":'Permalink to "Drag 拖拽"'},"​")],-1)),t[2]||(t[2]=e("p",null,"拖拽指令用于实现元素的拖拽功能，支持限制拖拽方向和边界。",-1)),t[3]||(t[3]=e("h2",{id:"基本使用",tabindex:"-1"},[i("基本使用 "),e("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),g(a(d(y),null,null,512),[[f,r.value]]),a(l,null,{default:s(()=>[a(d(w),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{r.value=!1}),vueCode:d(C)},_({_:2},[n.value?{name:"vue",fn:s(()=>[a(d(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=x("",3))])}}});export{T as __pageData,A as default};
