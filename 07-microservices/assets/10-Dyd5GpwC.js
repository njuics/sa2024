import{o as r,c as a,k as s,q as n,s as i,A as t,e}from"./modules/vue-uEYNCD1x.js";import{I as c}from"./slidev/two-cols-Dls_XnQp.js";import{_ as l,af as o}from"./index-fVPylRdL.js";import{p as m,u,f}from"./slidev/context-9wIGX_xO.js";import"./modules/shiki-BzAJ3tB6.js";const p="/sa2024/07-microservices/assets/06-real-circuit-breaker-DFOFScEE.png",_=e("h1",null,"断路器",-1),d=e("br",null,null,-1),h=e("p",null,"It’s common for software systems to make remote calls to software running in different processes, probably on different machines across a network. One of the big differences between in-memory calls and remote calls is that remote calls can fail, or hang without a response until some timeout limit is reached. What’s worse if you have many callers on a unresponsive supplier, then you can run out of critical resources leading to cascading failures across multiple systems.",-1),g=e("img",{src:p,class:"m-10 h-70"},null,-1),y={__name:"10",setup(w){return m(o),u(),(b,k)=>(r(),a(c,n(i(t(f)(t(o),9))),{right:s(v=>[g]),default:s(()=>[_,d,h]),_:1},16))}},C=l(y,[["__file","/@slidev/slides/10.md"]]);export{C as default};