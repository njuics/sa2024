import{d as ne,e as le,_ as se,f as ie,g as ae}from"../modules/unplugin-icons-BeR8N7Ub.js";import{d as G,a7 as ce,a8 as re,t as I,a9 as de,D as P,C as ue,a0 as me,n as Q,A as l,o as s,c as w,i as y,h as K,aa as pe,ab as ve,b,j as fe,J as he,y as O,ac as ge,e as i,F as U,ad as j,k as H,g as T,x,l as _}from"../modules/vue-CyVBQAnX.js";import{_ as Y,c as R,u as ke,a as _e,b as be,C as F,i as xe,d as q,t as we,g as J,e as ye}from"../index-CtAZP4Wa.js";import{u as Ce,S as De,D as Se,a as $e}from"./DrawingPreview-HzdbG6HA.js";import{I as W}from"./IconButton-BLN5HROO.js";import{N as Ee}from"./NoteDisplay-BNuCpgA9.js";import{C as Ne}from"./ClicksSlider-BQciuYfq.js";import"../modules/shiki-B34Zut0U.js";const Me=["placeholder"],He=G({__name:"NoteEditable",props:{no:{type:Number,required:!0},class:{default:""},editing:{default:!1},style:{default:()=>({})},placeholder:{default:"No notes for this slide"},clicksContext:{type:Object},autoHeight:{default:!1}},emits:["update:editing","markerDblclick","markerClick"],setup(C,{emit:z}){const p=C,v=z,c=ce(p,"editing",v,{passive:!0}),{info:D,update:k}=Ce(re(p,"no")),m=I("");let S;const{ignoreUpdates:A}=de(m,d=>{if(!c.value)return;const u=p.no;clearTimeout(S),S=setTimeout(()=>{k({note:d},u)},500)});P(()=>{var d;return(d=D.value)==null?void 0:d.note},(d="")=>{c.value||(clearTimeout(S),A(()=>{m.value=d}))},{immediate:!0,flush:"sync"});const r=I(),h=I();ue(()=>{var d;c.value&&((d=r.value)==null||d.focus())}),me(r,()=>{c.value=!1});function B(){!p.autoHeight||!r.value||!c.value||r.value.scrollHeight>r.value.clientHeight&&(r.value.style.height=`${r.value.scrollHeight}px`)}return P([m,c],()=>{Q(()=>{B()})},{flush:"post",immediate:!0}),(d,u)=>{var $;return l(c)?pe((s(),b("textarea",{key:1,ref_key:"inputEl",ref:r,"onUpdate:modelValue":u[2]||(u[2]=g=>m.value=g),class:y(["prose resize-none overflow-auto outline-none bg-transparent block border-primary border-2",p.class]),style:K([{"line-height":"1.75"},[p.style,h.value!=null?{height:`${h.value}px`}:{}]]),placeholder:C.placeholder,onKeydown:u[3]||(u[3]=fe(g=>c.value=!1,["esc"]))},null,46,Me)),[[ve,m.value]]):(s(),w(Ee,{key:0,class:y(["border-transparent border-2",[p.class,m.value?"":"opacity-25 italic select-none"]]),style:K(p.style),note:m.value||C.placeholder,"note-html":($=l(D))==null?void 0:$.noteHTML,"clicks-context":C.clicksContext,"auto-scroll":!C.autoHeight,onMarkerClick:u[0]||(u[0]=(g,E)=>v("markerClick",g,E)),onMarkerDblclick:u[1]||(u[1]=(g,E)=>v("markerDblclick",g,E))},null,8,["class","style","note","note-html","clicks-context","auto-scroll"]))}}}),Te=Y(He,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/NoteEditable.vue"]]),Ie={class:"h-screen w-screen of-hidden flex"},Be={class:"grid grid-rows-[auto_max-content] border-r border-main select-none max-h-full h-full"},Ve={class:"relative"},We={class:"absolute left-0 top-0 bottom-0 w-200 flex flex-col flex-auto items-end group p2 gap-1 max-h-full of-scroll",style:{direction:"rtl"}},ze=["onClick"],Ae={p2:"",border:"t main"},Oe={class:"select-none w-13 text-right my4 flex flex-col gap-1 items-end"},Fe={class:"text-3xl op20 mb2"},Ke={class:"flex flex-col gap-2 my5"},Le=["onDblclick"],Pe={class:"py3 mt-0.5 mr--8 ml--4 op0 transition group-hover:op100"},Ue={key:0,class:"select-none absolute bottom-0 right-0 bg-main rounded-tl p2 op35 text-xs"},je={class:"absolute top-0 right-0 px3 py1.5 border-b border-l rounded-lb bg-main border-main select-none"},Re={class:"text-xs op50"},X=450,qe=G({__name:"overview",setup(C){const z=R.titleTemplate.replace("%s",R.title||"Slidev");ke({title:`Overview - ${z}`});const{openInEditor:p,slides:v}=_e(),c=he(new Map),D=I([]),k=I(null),m=O(()=>v.value.map(t=>{var e,n;return d(((n=(e=t.meta)==null?void 0:e.slide)==null?void 0:n.note)||"")})),S=O(()=>m.value.reduce((t,e)=>t+e,0)),A=O(()=>v.value.map(t=>B(t)).reduce((t,e)=>t+e,0)),r=new WeakMap;function h(t){return r.has(t)||r.set(t,be(t,F)),r.get(t)}function B(t){var e,n;return((e=t.meta)==null?void 0:e.clicks)||((n=h(t))==null?void 0:n.total)}function d(t){var e;return((e=t.match(/[\w\d\’\'-]+/gi))==null?void 0:e.length)||0}function u(t){const e=t.getBoundingClientRect(),n=20;return e.top>=0-n&&e.left>=0-n&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)+n&&e.right<=(window.innerWidth||document.documentElement.clientWidth)+n}function $(){const t=[];Array.from(c.entries()).forEach(([e,n])=>{u(n)&&t.push(e)}),D.value=t}function g(t){const e=document.createElement("a");e.target="_blank",e.href=t,e.click()}function E(t){const e=c.get(t);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function Z(t,e,n){const N=h(n);N.current===e?N.current=F:N.current=e,t.preventDefault()}return ge(()=>{Q(()=>{$()})}),(t,e)=>{const n=ne,N=le,ee=se,te=ie,oe=ae;return s(),b("div",Ie,[i("nav",Be,[i("div",Ve,[i("div",We,[(s(!0),b(U,null,j(l(v),(o,f)=>{var M,a,V,L;return s(),b("div",{key:o.no,class:"relative",style:{direction:"ltr"}},[i("button",{class:y(["relative transition duration-300 w-8 h-8 rounded hover:bg-active hover:op100",D.value.includes(f)?"op100 text-primary bg-gray:5":"op20"]),onClick:Je=>E(f)},[i("div",null,x(f+1),1)],10,ze),(a=(M=o.meta)==null?void 0:M.slide)!=null&&a.title?(s(),b("div",{key:0,class:y(["pointer-events-none select-none absolute left-110% backdrop-blur-8 top-50% translate-y--50% ws-nowrap z-10 px2 shadow-xl rounded border border-main transition duration-400 op0 group-hover:op100",D.value.includes(f)?"text-primary":"text-main important-text-op-50"])},x((L=(V=o.meta)==null?void 0:V.slide)==null?void 0:L.title),3)):T("v-if",!0)])}),128))])]),i("div",Ae,[l(xe)?T("v-if",!0):(s(),w(W,{key:0,title:l(q)?"Switch to light mode theme":"Switch to dark mode theme",onClick:e[0]||(e[0]=o=>l(we)())},{default:H(()=>[l(q)?(s(),w(n,{key:0})):(s(),w(N,{key:1}))]),_:1},8,["title"]))])]),i("main",{class:"flex-1 h-full of-auto",style:K(`grid-template-columns: repeat(auto-fit,minmax(${X}px,1fr))`),onScroll:$},[(s(!0),b(U,null,j(l(v),(o,f)=>{var M;return s(),b("div",{key:o.no,ref_for:!0,ref:a=>c.set(f,a),class:y(["relative border-t border-main of-hidden flex gap-4 min-h-50 group",f===0?"pt5":""])},[i("div",Oe,[i("div",Fe,x(f+1),1),_(W,{class:"mr--3 op0 group-hover:op80",title:"Play in new tab",onClick:a=>g(l(J)(o,!1))},{default:H(()=>[_(ee)]),_:2},1032,["onClick"]),(M=o.meta)!=null&&M.slide?(s(),w(W,{key:0,class:"mr--3 op0 group-hover:op80",title:"Open in editor",onClick:a=>l(p)(`${o.meta.slide.filepath}:${o.meta.slide.start}`)},{default:H(()=>[_(te)]),_:2},1032,["onClick"])):T("v-if",!0)]),i("div",Ke,[i("div",{class:"border rounded border-main overflow-hidden bg-main select-none h-max",onDblclick:a=>g(l(J)(o,!1))},[(s(),w($e,{key:o.no,width:X,class:"pointer-events-none important:[&_*]:select-none"},{default:H(()=>[_(De,{is:o.component,"clicks-context":h(o),class:y(l(ye)(o)),route:o,"render-context":"overview"},null,8,["is","clicks-context","class","route"]),_(Se,{page:o.no},null,8,["page"])]),_:2},1024))],40,Le),B(o)?(s(),w(Ne,{key:0,"mt-2":"","clicks-context":h(o),class:"w-full",onDblclick:a=>h(o).current=l(F)},null,8,["clicks-context","onDblclick"])):T("v-if",!0)]),i("div",Pe,[_(W,{title:"Edit Note",class:y(["rounded-full w-9 h-9 text-sm",k.value===o.no?"important:op0":""]),onClick:a=>k.value=o.no},{default:H(()=>[_(oe)]),_:2},1032,["class","onClick"])]),_(Te,{no:o.no,class:"max-w-250 w-250 text-lg rounded p3","auto-height":!0,editing:k.value===o.no,"clicks-context":h(o),onDblclick:a=>k.value!==o.no?k.value=o.no:null,"onUpdate:editing":e[1]||(e[1]=a=>k.value=null),onMarkerClick:(a,V)=>Z(a,V,o)},null,8,["no","editing","clicks-context","onDblclick","onMarkerClick"]),m.value[f]>0?(s(),b("div",Ue,x(m.value[f])+" words ",1)):T("v-if",!0)],2)}),128))],36),i("div",je,[i("div",Re,x(l(v).length)+" slides · "+x(A.value+l(v).length-1)+" clicks · "+x(S.value)+" words ",1)])])}}}),nt=Y(qe,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/overview.vue"]]);export{nt as default};
