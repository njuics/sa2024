import{d as p,y as f,o as l,b as _,e as r,f as m,h,c as v,k as g,q as y,s as k,A as n}from"../modules/vue-DA7ZT_zT.js";import{u as d,p as x,f as w}from"./context-BtHL8qBa.js";import{b as u,z as i}from"../index-1_IScrjK.js";import"../modules/shiki-CUMx7AeU.js";function c(e){return e.startsWith("/")?"/sa2024/"+e.slice(1):e}function b(e,s=!1){const t=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),o={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?s?`linear-gradient(#0005, #0008), url(${c(e)})`:`url("${c(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const S={class:"my-auto w-full"},B=p({__name:"cover",props:{background:{default:""}},setup(e){d();const s=e,t=f(()=>b(s.background,!0));return(o,a)=>(l(),_("div",{class:"slidev-layout cover",style:h(t.value)},[r("div",S,[m(o.$slots,"default")])],4))}}),$=u(B,[["__file","/Users/chun/Develop/software-architecture-explained-with-spring/node_modules/@slidev/theme-default/layouts/cover.vue"]]),z=r("h1",null,"Software Architecture",-1),C=r("h3",null,"Explained with Spring",-1),P={__name:"1",setup(e){return x(i),d(),(s,t)=>(l(),v($,y(k(n(w)(n(i),0))),{default:g(()=>[z,C]),_:1},16))}},U=u(P,[["__file","/@slidev/slides/1.md"]]);export{U as default};