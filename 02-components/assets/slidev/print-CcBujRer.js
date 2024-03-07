import{d as p,ah as _,I as d,b as a,e as t,x as s,z as c,F as h,ag as u,o as l,S as f,l as g,g as v}from"../modules/vue-DfJOUuqf.js";import{A as x,c as m,y as b,B as y,_ as N}from"../index-DbHQVuJx.js";import{N as k}from"./NoteDisplay-CgxieYML.js";import"../modules/unplugin-icons-BSwXhPmF.js";import"../modules/shiki-ywDJVitK.js";const w={id:"page-root"},B={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},V={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),A={key:0,class:"border-main mb-8"},C=p({__name:"print",setup(F){_(`
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
`),x({title:`Notes - ${m.title}`});const i=d(()=>b.map(o=>{var n;return(n=o.meta)==null?void 0:n.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,n)=>(l(),a("div",w,[t("div",B,[t("div",L,[t("h1",S,s(c(m).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(l(!0),a(h,null,u(i.value,(e,r)=>(l(),a("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",V,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(c(y)),1),f(" "+s(e==null?void 0:e.title)+" ",1),z])]),g(k,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<i.value.length-1?(l(),a("hr",A)):v("v-if",!0)]))),128))])]))}}),W=N(C,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{W as default};
