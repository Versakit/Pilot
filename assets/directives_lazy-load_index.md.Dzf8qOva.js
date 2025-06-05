const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.B6XGa5nM.js","assets/chunks/framework.CTmPMVNO.js"])))=>i.map(i=>d[i]);
import{p,D as h,v as m,V as c,C as u,c as v,o as _,j as a,ah as x,G as e,ag as g,a as r,ai as y,k as n,w as i,aj as b}from"./chunks/framework.CTmPMVNO.js";import{O as f,E as k}from"./chunks/index.D6OAlCbV.js";const C=`<script setup lang="ts">
const images = [
  'https://picsum.photos/400/300?random=1',
  'https://picsum.photos/400/300?random=2',
  'https://picsum.photos/400/300?random=3',
  'https://picsum.photos/400/300?random=4',
  'https://picsum.photos/400/300?random=5',
  'https://picsum.photos/400/300?random=6',
  'https://picsum.photos/400/300?random=7',
  'https://picsum.photos/400/300?random=8',
  'https://picsum.photos/400/300?random=9',
  'https://picsum.photos/400/300?random=10',
]
<\/script>

<template>
  <div class="lazy-load-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <div>
        <div class="image-container">
          <img
            v-for="(src, index) in images"
            :key="index"
            v-pilot-lazy-load="{
              loading: 'https://via.placeholder.com/400x300?text=Loading...',
              error: 'https://via.placeholder.com/400x300?text=Error',
              rootMargin: '50px',
              threshold: 0.1,
            }"
            :src="src"
            :alt="\`Image \${index + 1}\`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lazy-load-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

.image-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    transition: opacity 0.3s;

    &[src=''] {
      opacity: 0;
    }
  }
}
</style>
`,V=JSON.parse('{"title":"LazyLoad 图片懒加载","description":"","frontmatter":{},"headers":[],"relativePath":"directives/lazy-load/index.md","filePath":"directives/lazy-load/index.md"}'),w={name:"directives/lazy-load/index.md"},A=Object.assign(w,{setup(z){const o=p(!0),d=h();return m(async()=>{d.value=(await c(async()=>{const{default:s}=await import("./chunks/index.B6XGa5nM.js");return{default:s}},__vite__mapDeps([0,1]))).default}),(s,t)=>{const l=u("ClientOnly");return _(),v("div",null,[t[1]||(t[1]=a("h1",{id:"lazyload-图片懒加载",tabindex:"-1"},[r("LazyLoad 图片懒加载 "),a("a",{class:"header-anchor",href:"#lazyload-图片懒加载","aria-label":'Permalink to "LazyLoad 图片懒加载"'},"​")],-1)),t[2]||(t[2]=a("p",null,"图片懒加载指令用于实现图片的按需加载，当图片进入视口时才开始加载，可以优化页面加载性能。",-1)),t[3]||(t[3]=a("h2",{id:"基本使用",tabindex:"-1"},[r("基本使用 "),a("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),x(e(n(f),null,null,512),[[y,o.value]]),e(l,null,{default:i(()=>[e(n(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{o.value=!1}),vueCode:n(C)},b({_:2},[d.value?{name:"vue",fn:i(()=>[e(n(d))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=g('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>loading</td><td>加载中显示的图片地址</td><td>string</td><td>-</td></tr><tr><td>error</td><td>加载失败显示的图片地址</td><td>string</td><td>-</td></tr><tr><td>rootMargin</td><td>触发加载的边距</td><td>string</td><td>&#39;0px&#39;</td></tr><tr><td>threshold</td><td>触发加载的可见比例</td><td>number</td><td>0</td></tr></tbody></table>',3))])}}});export{V as __pageData,A as default};
