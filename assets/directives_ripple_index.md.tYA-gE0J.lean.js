const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.me4RrieM.js","assets/chunks/framework.CTmPMVNO.js"])))=>i.map(i=>d[i]);
import{p,D as c,v,V as u,C as m,c as h,o as x,j as a,ah as f,G as n,a as i,ai as _,k as l,w as s,aj as b}from"./chunks/framework.CTmPMVNO.js";import{O as w,E as g}from"./chunks/index.D6OAlCbV.js";const y=`<template>
  <div class="ripple-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <div class="card" v-ripple>点击查看涟漪效果</div>
    </div>

    <h3>自定义颜色</h3>
    <div class="demo-row">
      <div class="card" v-ripple="{ color: 'rgba(64, 158, 255, 0.3)' }">
        蓝色涟漪效果
      </div>
    </div>

    <h3>自定义持续时间</h3>
    <div class="demo-row">
      <div class="card" v-ripple="{ duration: 1000 }">慢速涟漪效果</div>
    </div>

    <h3>组合使用</h3>
    <div class="demo-row">
      <div
        class="card"
        v-ripple="{ color: 'rgba(103, 194, 58, 0.3)', duration: 800 }"
      >
        绿色慢速涟漪效果
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ripple-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.card {
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  }
}

.demo-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
`,B=JSON.parse('{"title":"Ripple 水波纹","description":"","frontmatter":{},"headers":[],"relativePath":"directives/ripple/index.md","filePath":"directives/ripple/index.md"}'),k={name:"directives/ripple/index.md"},V=Object.assign(k,{setup(C){const r=p(!0),t=c();return v(async()=>{t.value=(await u(async()=>{const{default:d}=await import("./chunks/index.me4RrieM.js");return{default:d}},__vite__mapDeps([0,1]))).default}),(d,e)=>{const o=m("ClientOnly");return x(),h("div",null,[e[1]||(e[1]=a("h1",{id:"ripple-水波纹",tabindex:"-1"},[i("Ripple 水波纹 "),a("a",{class:"header-anchor",href:"#ripple-水波纹","aria-label":'Permalink to "Ripple 水波纹"'},"​")],-1)),e[2]||(e[2]=a("h2",{id:"基本使用",tabindex:"-1"},[i("基本使用 "),a("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),f(n(l(w),null,null,512),[[_,r.value]]),n(o,null,{default:s(()=>[n(l(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{r.value=!1}),vueCode:l(y)},b({_:2},[t.value?{name:"vue",fn:s(()=>[n(l(t))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{B as __pageData,V as default};
