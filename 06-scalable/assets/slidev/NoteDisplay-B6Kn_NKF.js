import{d as D,I as q,t as M,C as H,n as B,U as I,b as m,i as p,e as L,x as b,o as d}from"../modules/vue-CoY6Ph6S.js";import{C as w,_ as T}from"../index-BVCbtGme.js";const $=["innerHTML"],P=["textContent"],K=["textContent"],k="slidev-note-fade",r="slidev-note-click-mark",R=D({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1},clicksContext:{type:null,required:!1},autoScroll:{type:Boolean,required:!1}},emits:["markerDblclick","markerClick"],setup(A,{emit:E}){const l=A,v=E,h=q(()=>{var s,n;return((s=l.clicksContext)==null?void 0:s.current)!=null&&((n=l.noteHtml)==null?void 0:n.includes("slidev-note-click-mark"))}),a=M(null);function g(){var S;if(!a.value||!h.value)return;const s=Array.from(a.value.querySelectorAll(`.${r}`)),n=+(((S=l.clicksContext)==null?void 0:S.current)??w),c=n<0||n>=w,y=new Set;function C(e){!e||e===a.value||(y.add(e),e.parentElement&&C(e.parentElement))}const _=new Map;for(const e of s){const t=e.parentElement,o=Number(e.dataset.clicks);_.set(o,e),C(t),Array.from(t.childNodes).forEach(f=>{if(f.nodeType===3){const x=document.createElement("span");x.textContent=f.textContent,t.insertBefore(x,f),f.remove()}})}const N=Array.from(a.value.querySelectorAll("*"));let i=0;const u=new Map;for(const e of N)u.has(i)||u.set(i,[]),u.get(i).push(e),e.classList.contains(r)&&(i=Number(e.dataset.clicks)||i+1);for(const[e,t]of u)c?t.forEach(o=>o.classList.remove(k)):t.forEach(o=>o.classList.toggle(k,y.has(o)?!1:e!==n));for(const[e,t]of _)t.classList.remove(k),t.classList.toggle(`${r}-past`,c?!1:e<n),t.classList.toggle(`${r}-active`,c?!1:e===n),t.classList.toggle(`${r}-next`,c?!1:e===n+1),t.classList.toggle(`${r}-future`,c?!1:e>n+1),t.ondblclick=o=>{v("markerDblclick",o,e),!o.defaultPrevented&&(l.clicksContext.current=e,o.stopPropagation(),o.stopImmediatePropagation())},t.onclick=o=>{v("markerClick",o,e)},l.autoScroll&&e===n&&t.scrollIntoView({block:"center",behavior:"smooth"})}return H(()=>{var s;return[l.noteHtml,(s=l.clicksContext)==null?void 0:s.current]},()=>{B(()=>{g()})},{immediate:!0}),I(()=>{g()}),(s,n)=>s.noteHtml?(d(),m("div",{key:0,ref_key:"noteDisplay",ref:a,class:p(["prose overflow-auto outline-none slidev-note",[l.class,h.value?"slidev-note-with-clicks":""]]),innerHTML:s.noteHtml},null,10,$)):s.note?(d(),m("div",{key:1,class:p(["prose overflow-auto outline-none slidev-note",l.class])},[L("p",{textContent:b(s.note)},null,8,P)],2)):(d(),m("div",{key:2,class:p(["prose overflow-auto outline-none opacity-50 italic select-none slidev-note",l.class])},[L("p",{textContent:b(l.placeholder||"No notes.")},null,8,K)],2))}}),F=T(R,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{F as N};
