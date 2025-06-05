const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.B2ixFGEP.js","assets/chunks/framework.CTmPMVNO.js"])))=>i.map(i=>d[i]);
import{p,D as m,v as c,V as u,C as v,c as h,o as _,j as n,ah as f,G as a,a as l,ai as b,k as t,w as o,aj as x}from"./chunks/framework.CTmPMVNO.js";import{O as y,E as C}from"./chunks/index.BwfnqG_-.js";const z=`<template>
  <div class="demo-container">
    <div class="demo-item">
      <h3>默认脱敏规则</h3>
      <p>
        手机号:
        <span v-desensitize="'phone'">13812345678</span>
      </p>
      <p>
        身份证:
        <span v-desensitize="'idCard'">110101199003077654</span>
      </p>
      <p>
        姓名:
        <span v-desensitize="'name'">张三</span>
      </p>
      <p>
        邮箱:
        <span v-desensitize="'email'">example@domain.com</span>
      </p>
    </div>

    <div class="demo-item">
      <h3>自定义脱敏规则</h3>
      <p>
        银行卡号:
        <span
          v-desensitize="{
            type: 'bankCard',
            rules: {
              bankCard: (str) => str.replace(/(\\d{4})\\d{8}(\\d{4})/, '$1****$2'),
            },
          }"
        >
          6225888888888888
        </span>
      </p>
      <p>
        自定义姓名脱敏:
        <span
          v-desensitize="{
            type: 'customName',
            rules: {
              customName: (str) => str.replace(/(.).*(.)/, '$1*$2'),
            },
          }"
        >
          李四
        </span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
.demo-item {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
}
h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #333;
}
p {
  margin: 8px 0;
}
</style>
`,D=JSON.parse('{"title":"数据脱敏","description":"","frontmatter":{},"headers":[],"relativePath":"directives/desensitize/index.md","filePath":"directives/desensitize/index.md"}'),Z={name:"directives/desensitize/index.md"},w=Object.assign(Z,{setup(k){const i=p(!0),s=m();return c(async()=>{s.value=(await u(async()=>{const{default:d}=await import("./chunks/index.B2ixFGEP.js");return{default:d}},__vite__mapDeps([0,1]))).default}),(d,e)=>{const r=v("ClientOnly");return _(),h("div",null,[e[1]||(e[1]=n("h1",{id:"数据脱敏",tabindex:"-1"},[l("数据脱敏 "),n("a",{class:"header-anchor",href:"#数据脱敏","aria-label":'Permalink to "数据脱敏"'},"​")],-1)),e[2]||(e[2]=n("h2",{id:"基本使用",tabindex:"-1"},[l("基本使用 "),n("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),f(a(t(y),null,null,512),[[b,i.value]]),a(r,null,{default:o(()=>[a(t(C),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{i.value=!1}),vueCode:t(z)},x({_:2},[s.value?{name:"vue",fn:o(()=>[a(t(s))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{D as __pageData,w as default};
