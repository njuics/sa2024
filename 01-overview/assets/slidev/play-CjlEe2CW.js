const __vite__fileDeps=["assets/slidev/DrawingControls-Wh4GcIDM.js","assets/modules/unplugin-icons-DFTLwknM.js","assets/modules/vue-CnDFeQoy.js","assets/modules/shiki-DeQJCler.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-Dui7pBCf.js","assets/index-DCjvn3b2.js","assets/index-_yLYxq2k.css","assets/DrawingPreview-DJ7dOR_1.css","assets/slidev/ContextMenu-B_ofaILd.js","assets/slidev/IconButton-BcQKU8KC.js","assets/slidev/context-C6suSrgS.js","assets/ContextMenu-DSnskk1a.css","assets/DrawingControls-C5T1oZL5.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as g,c as x,k as C,q as S,v as D,w as I,x as A,a as O,y as R,z as N,A as H,B as T,D as U,E as L}from"../index-DCjvn3b2.js";import{d as y,a7 as z,o,c as r,A as e,b as _,e as i,f as W,i as M,g as n,ag as F,y as E,k as b,af as w,a6 as $,M as h,l as v,F as B,x as P,v as G,t as Q,h as j}from"../modules/vue-CnDFeQoy.js";import{Q as q,G as K,C as X,r as Y,u as J,S as Z,N as ee,o as le}from"./ContextMenu-B_ofaILd.js";import{c as oe,a as te}from"./DrawingPreview-Dui7pBCf.js";import"../modules/shiki-DeQJCler.js";import"../modules/unplugin-icons-DFTLwknM.js";import"./IconButton-BcQKU8KC.js";import"./context-C6suSrgS.js";const se="/sa2024/01-overview/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},ie=y({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(c,{emit:s}){const a=c,l=z(a,"modelValue",s);function t(){l.value=!1}return(p,u)=>(o(),r(F,null,[e(l)?(o(),_("div",ae,[i("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:u[0]||(u[0]=f=>t())}),i("div",{class:M(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[W(p.$slots,"default")],2)])):n("v-if",!0)],1024))}}),ne=g(ie,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Modal.vue"]]),re={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},de=["innerHTML"],ue=i("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[i("div",{class:"flex gap-1 children:my-auto"},[i("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),i("img",{class:"w-5 h-5",src:se,alt:"Slidev logo"}),i("div",{style:{color:"#2082A6"}},[i("b",null,"Sli"),$("dev ")])])],-1),ce=y({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(c,{emit:s}){const l=z(c,"modelValue",s),t=E(()=>typeof x.info=="string");return(p,u)=>(o(),r(ne,{modelValue:e(l),"onUpdate:modelValue":u[0]||(u[0]=f=>w(l)?l.value=f:null),class:"px-6 py-4"},{default:b(()=>[i("div",re,[t.value?(o(),_("div",{key:0,class:"mb-4",innerHTML:e(x).info},null,8,de)):n("v-if",!0),ue])]),_:1},8,["modelValue"]))}}),me=g(ce,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/InfoDialog.vue"]]),ve=y({__name:"Controls",setup(c){const s=h(),a=h();return(d,l)=>(o(),_(B,null,[v(q,{modelValue:e(C),"onUpdate:modelValue":l[0]||(l[0]=t=>w(C)?C.value=t:null)},null,8,["modelValue"]),v(K),s.value?(o(),r(e(s),{key:0})):n("v-if",!0),a.value?(o(),r(e(a),{key:1,modelValue:e(S),"onUpdate:modelValue":l[1]||(l[1]=t=>w(S)?S.value=t:null)},null,8,["modelValue"])):n("v-if",!0),e(x).info?(o(),r(me,{key:2,modelValue:e(D),"onUpdate:modelValue":l[2]||(l[2]=t=>w(D)?D.value=t:null)},null,8,["modelValue"])):n("v-if",!0),v(X)],64))}}),pe=g(ve,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Controls.vue"]]),fe=y({__name:"PrintStyle",setup(c){function s(a,{slots:d}){if(d.default)return G("style",d.default())}return(a,d)=>(o(),r(s,null,{default:b(()=>[$(" @page { size: "+P(e(I))+"px "+P(e(A))+"px; margin: 0px; } ",1)]),_:1}))}}),_e=g(fe,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PrintStyle.vue"]]),ge=y({__name:"play",setup(c){Y();const{next:s,prev:a,isEmbedded:d,isPrintMode:l}=O(),{isDrawing:t}=oe(),p=Q();function u(m){var V;N.value||m.button===0&&((V=m.target)==null?void 0:V.id)==="slide-container"&&(m.pageX/window.innerWidth>.6?s():a())}J(p);const f=E(()=>R.value||N.value);h();const k=h();return H(()=>import("./DrawingControls-Wh4GcIDM.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])).then(m=>k.value=m.default),(m,V)=>(o(),_(B,null,[e(l)?(o(),r(_e,{key:0})):n("v-if",!0),i("div",{id:"page-root",ref_key:"root",ref:p,class:M(["grid",e(L)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[v(te,{class:"w-full h-full",style:j({background:"var(--slidev-slide-container-background, black)"}),width:e(l)?e(T).width.value:void 0,scale:e(U),"is-main":!0,onPointerdown:u,onContextmenu:e(le)},{default:b(()=>[v(Z,{"render-context":"slide"})]),controls:b(()=>[e(l)?n("v-if",!0):(o(),_("div",{key:0,class:M(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[f.value?"!opacity-100 right-0":"opacity-0 p-2",e(t)?"pointer-events-none":""]])},[v(ee,{class:"m-auto",persist:f.value},null,8,["persist"])],2)),!e(x).drawings.presenterOnly&&!e(d)&&k.value?(o(),r(e(k),{key:1,class:"ml-0"})):n("v-if",!0)]),_:1},8,["style","width","scale","onContextmenu"]),n("v-if",!0)],2),e(l)?n("v-if",!0):(o(),r(pe,{key:1}))],64))}}),Se=g(ge,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/play.vue"]]);export{Se as default};