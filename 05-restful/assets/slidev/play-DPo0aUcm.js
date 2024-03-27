function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-CG0P5G9C.js","assets/modules/unplugin-icons-B_urOr0c.js","assets/modules/vue-j0WrzVxv.js","assets/modules/shiki-CMYXqV5Q.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-B1As5xyJ.js","assets/index-C6OTFu3N.js","assets/index-BRjFuCq3.css","assets/slidev/bottom-leJcmBHj.js","assets/bottom-DbIWt59F.css","assets/slidev/SlidesShow-VN0oSYKw.js","assets/SlidesShow-DZAAkYiM.css","assets/DrawingControls-C5T1oZL5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{b as w,c as g,u as E,_ as I}from"../index-C6OTFu3N.js";import{d as y,a7 as U,o as l,c as d,A as e,b as V,e as o,f as z,i as D,g as n,a8 as B,y as P,k as M,a6 as _,$ as O,M as h,l as u,F as $,t as R,h as A}from"../modules/vue-j0WrzVxv.js";import{b as x,e as C,f as S,h as T,j as N,w as H,k as L,l as j}from"./bottom-leJcmBHj.js";import{Q as F,G,r as Q,u as W,S as K,a as X,N as Y}from"./SlidesShow-VN0oSYKw.js";import{P as q}from"./PrintStyle-BbGCEeaA.js";import{u as J}from"./DrawingPreview-B1As5xyJ.js";import"../modules/shiki-CMYXqV5Q.js";import"../modules/unplugin-icons-B_urOr0c.js";const Z="/sa2024/05-restful/assets/logo-BYkHSa_O.png",ee={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},se=y({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(c,{emit:a}){const i=c,s=U(i,"modelValue",a);function t(){s.value=!1}return(m,r)=>(l(),d(B,null,[e(s)?(l(),V("div",ee,[o("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=p=>t())}),o("div",{class:D(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[z(m.$slots,"default")],2)])):n("v-if",!0)],1024))}}),te=w(se,[["__file","/Users/chun/Develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/Modal.vue"]]),oe={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},le=["innerHTML"],ae=o("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[o("div",{class:"flex gap-1 children:my-auto"},[o("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),o("img",{class:"w-5 h-5",src:Z,alt:"Slidev logo"}),o("div",{style:{color:"#2082A6"}},[o("b",null,"Sli"),O("dev ")])])],-1),ie=y({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(c,{emit:a}){const s=U(c,"modelValue",a),t=P(()=>typeof g.info=="string");return(m,r)=>(l(),d(te,{modelValue:e(s),"onUpdate:modelValue":r[0]||(r[0]=p=>_(s)?s.value=p:null),class:"px-6 py-4"},{default:M(()=>[o("div",oe,[t.value?(l(),V("div",{key:0,class:"mb-4",innerHTML:e(g).info},null,8,le)):n("v-if",!0),ae])]),_:1},8,["modelValue"]))}}),ne=w(ie,[["__file","/Users/chun/Develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/InfoDialog.vue"]]),re=y({__name:"Controls",setup(c){const a=h(),i=h();return(v,s)=>(l(),V($,null,[u(F,{modelValue:e(x),"onUpdate:modelValue":s[0]||(s[0]=t=>_(x)?x.value=t:null)},null,8,["modelValue"]),u(G),a.value?(l(),d(e(a),{key:0})):n("v-if",!0),i.value?(l(),d(e(i),{key:1,modelValue:e(C),"onUpdate:modelValue":s[1]||(s[1]=t=>_(C)?C.value=t:null)},null,8,["modelValue"])):n("v-if",!0),e(g).info?(l(),d(ne,{key:2,modelValue:e(S),"onUpdate:modelValue":s[2]||(s[2]=t=>_(S)?S.value=t:null)},null,8,["modelValue"])):n("v-if",!0)],64))}}),de=w(re,[["__file","/Users/chun/Develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/Controls.vue"]]),ue=y({__name:"play",setup(c){Q();const{next:a,prev:i,isEmbedded:v,isPrintMode:s}=E(),{isDrawing:t}=J(),m=R();function r(f){var k;N.value||((k=f.target)==null?void 0:k.id)==="slide-container"&&(f.screenX/window.innerWidth>.6?a():i())}W(m);const p=P(()=>T.value||N.value);h();const b=h();return I(()=>import("./DrawingControls-CG0P5G9C.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])).then(f=>b.value=f.default),(f,k)=>(l(),V($,null,[e(s)?(l(),d(q,{key:0})):n("v-if",!0),o("div",{id:"page-root",ref_key:"root",ref:m,class:D(["grid",e(j)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[u(K,{class:"w-full h-full",style:A({background:"var(--slidev-slide-container-background, black)"}),width:e(s)?e(H).width.value:void 0,scale:e(L),"is-main":!0,onPointerdown:r},{default:M(()=>[u(X,{"render-context":"slide"})]),controls:M(()=>[o("div",{class:D(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[p.value?"!opacity-100 right-0":"opacity-0 p-2",e(t)?"pointer-events-none":""]])},[u(Y,{class:"m-auto",persist:p.value},null,8,["persist"])],2),!e(g).drawings.presenterOnly&&!e(v)&&b.value?(l(),d(e(b),{key:0,class:"ml-0"})):n("v-if",!0)]),_:1},8,["style","width","scale"]),n("v-if",!0)],2),u(de)],64))}}),we=w(ue,[["__file","/Users/chun/Develop/software-architecture-explained-with-spring/node_modules/@slidev/client/pages/play.vue"]]);export{we as default};