import{d as _,ac as d,I as p,b as a,e as t,x as s,z as r,F as u,ab as h,o as l,S as f,l as g,g as v}from"../modules/vue-CnJIpJLC.js";import{z as x,c as m,x as b,A as y,_ as N}from"../index-Dcdd7r15.js";import{N as k}from"./NoteDisplay-Ck0eJHJf.js";import"../modules/shiki-BgDwwTVx.js";const w={id:"page-root"},L={class:"m-4"},S={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},z={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),A={key:0,class:"border-main mb-8"},C=_({__name:"print",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),x({title:`Notes - ${m.title}`});const i=p(()=>b.map(o=>{var n;return(n=o.meta)==null?void 0:n.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,n)=>(l(),a("div",w,[t("div",L,[t("div",S,[t("h1",T,s(r(m).title),1),t("div",V,s(new Date().toLocaleString()),1)]),(l(!0),a(u,null,h(i.value,(e,c)=>(l(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",z,[t("div",B,[t("div",D,s(e==null?void 0:e.no)+"/"+s(r(y)),1),f(" "+s(e==null?void 0:e.title)+" ",1),H])]),g(k,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(l(),a("hr",A)):v("v-if",!0)]))),128))])]))}}),R=N(C,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{R as default};
