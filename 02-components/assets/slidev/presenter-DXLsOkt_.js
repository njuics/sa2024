import{b as G,c as H,d as J,e as Q,f as U}from"../modules/unplugin-icons-BSwXhPmF.js";import{t as F,ai as E,d as M,c as f,i as m,z as e,o as c,I as y,b as x,e as t,l as i,F as D,x as w,g as S,ag as K,X as W,aj as X,h as N,p as O,a as A,C as B,N as Y,U as Z,J as ee,ak as te,al as se,k as g,af as oe}from"../modules/vue-DfJOUuqf.js";import{_ as P,C as le,u as ne,c as R,A as ae,D as re,y as ie,r as ce,E as k,F as C,G as ue,H as de,I as pe,J as me,g as ve,K as _e,L as fe,M as xe,N as V,O as he,P as be,Q as ye,R as ge,B as ke,s as z}from"../index-DbHQVuJx.js";import{r as Ce,S as we,a as q,I as L,Q as Se,N as Ne,G as $e}from"./SlidesShow-cEt4ArMT.js";import{S as Ie,g as ze}from"./bottom-BvFLsK-o.js";import{N as Fe}from"./NoteDisplay-CgxieYML.js";import De from"./DrawingControls-CqvcVetF.js";import"../modules/shiki-ywDJVitK.js";import"./DrawingPreview-CWxctYH7.js";function Me(a){if(a==null)return{info:F(),update:async()=>{}};const r=`/@slidev/slide/${a}.json`,{data:s,execute:l}=E(r).json().get();return l(),{info:s,update:async d=>await fetch(r,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(d)}).then(n=>n.json())}}const Pe=M({__name:"NoteStatic",props:{no:{type:Number,required:!1},class:{type:String,required:!1},clicksContext:{type:null,required:!1}},setup(a){const r=a,{info:s}=Me(r.no);return(l,v)=>{var d,n;return c(),f(Fe,{class:m(r.class),note:(d=e(s))==null?void 0:d.note,"note-html":(n=e(s))==null?void 0:n.noteHTML,"clicks-context":l.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),Te=P(Pe,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/NoteStatic.vue"]]),je=a=>(O("data-v-bcb3340a"),a=a(),A(),a),Be=["title"],Re={class:"flex gap-1 items-center min-w-16"},Ve={"text-primary":""},qe=je(()=>t("span",{op50:""},"/",-1)),Le={op50:""},Oe=["max"],Ae=M({__name:"ClicksSlider",props:{clicksContext:{type:null,required:!0}},setup(a){const r=a,s=y(()=>r.clicksContext.total),l=y({get(){return r.clicksContext.current>s.value?-1:r.clicksContext.current},set(n){r.clicksContext.current=n}}),v=y(()=>Array.from({length:s.value+1},(n,u)=>u));function d(){(l.value<0||l.value>s.value)&&(l.value=0)}return(n,u)=>{const _=G;return c(),x("div",{class:m(["flex gap-0.5 items-center select-none",s.value?"":"op50"]),title:`Clicks in this slide: ${s.value}`},[t("div",Re,[i(_,{"text-sm":"",op50:""}),l.value<=s.value&&l.value>=0?(c(),x(D,{key:0},[t("span",Ve,w(l.value),1),qe],64)):S("v-if",!0),t("span",Le,w(s.value),1)]),t("div",{relative:"","flex-auto":"",h5:"",flex:"~",onDblclick:u[1]||(u[1]=o=>l.value=e(le))},[(c(!0),x(D,null,K(v.value,o=>(c(),x("div",{key:o,border:"y main","of-hidden":"",relative:"",class:m([o===0?"rounded-l border-l":"",o===s.value?"rounded-r border-r":""]),style:N({width:s.value>0?`${1/s.value*100}%`:"100%"})},[t("div",{absolute:"","inset-0":"",class:m(o<=l.value?"bg-primary op20":"")},null,2),t("div",{class:m([+o==+l.value?"text-primary font-bold op100 border-primary":"op30 border-main",o===0?"rounded-l":"",o===s.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},w(o),3)],6))),128)),W(t("input",{"onUpdate:modelValue":u[0]||(u[0]=o=>l.value=o),class:"range",absolute:"","inset-0":"",type:"range",min:0,max:s.value,step:1,"z-10":"",op0:"",style:N({"--thumb-width":`${1/(s.value+1)*100}%`}),onMousedown:d},null,44,Oe),[[X,l.value]])],32)],10,Be)}}}),Ge=P(Ae,[["__scopeId","data-v-bcb3340a"],["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/ClicksSlider.vue"]]),T=a=>(O("data-v-5d22dd02"),a=a(),A(),a),He={class:"bg-main h-full slidev-presenter"},Je=T(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1)),Qe={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Ue=T(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1)),Ee={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Ke={class:"border-t border-main py-1 px-2 text-sm"},We={class:"grid-section bottom flex"},Xe=T(()=>t("div",{"flex-auto":""},null,-1)),Ye={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Ze={class:"progress-bar"},et=M({__name:"presenter",setup(a){const r=F();Ce(),ne(r);const s=R.titleTemplate.replace("%s",R.title||"Slidev");ae({title:`Presenter - ${s}`}),F(!1);const{timer:l,resetTimer:v}=re(),d=ie.map(_=>ce(_)),n=y(()=>k.value.current<k.value.total?[C.value,k.value.current+1]:ue.value?[de.value,0]:null),u=y(()=>n.value&&d[+n.value[0].path-1]);return B([C,pe],()=>{u.value&&(u.value.current=n.value[1])},{immediate:!0}),Y(),Z(()=>{const _=r.value.querySelector("#slide-content"),o=ee(te()),$=se();B(()=>{if(!$.value||ve.value||!_e.value)return;const p=_.getBoundingClientRect(),h=(o.x-p.left)/p.width*100,b=(o.y-p.top)/p.height*100;if(!(h<0||h>100||b<0||b>100))return{x:h,y:b}},p=>{me.cursor=p})}),(_,o)=>{var j;const $=H,p=J,h=Q,b=U;return c(),x(D,null,[t("div",He,[t("div",{class:m(["grid-container",`layout${e(fe)}`])},[t("div",{ref_key:"main",ref:r,class:"relative grid-section main flex flex-col"},[i(q,{key:"main",class:"h-full w-full p-2 lg:p-4 flex-auto"},{default:g(()=>[i(we,{"render-context":"presenter"})]),_:1}),(c(),f(Ge,{key:(j=e(C))==null?void 0:j.path,"clicks-context":e(xe)(e(C)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),Je],512),t("div",Qe,[n.value&&u.value?(c(),f(q,{key:"next",class:"h-full w-full"},{default:g(()=>[(c(),f(e(Ie),{is:n.value[0].component,key:n.value[0].path,"clicks-context":u.value,class:m(e(ze)(n.value[0])),route:n.value[0],"render-context":"previewNext"},null,8,["is","clicks-context","class","route"]))]),_:1})):S("v-if",!0),Ue]),S(" Notes "),(c(),x("div",Ee,[(c(),f(Te,{key:`static-${e(V)}`,no:e(V),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:N({fontSize:`${e(he)}em`}),"clicks-context":e(k)},null,8,["no","style","clicks-context"])),t("div",Ke,[i(L,{title:"Increase font size",onClick:e(be)},{default:g(()=>[i($)]),_:1},8,["onClick"]),i(L,{title:"Decrease font size",onClick:e(ye)},{default:g(()=>[i(p)]),_:1},8,["onClick"]),S("v-if",!0)])])),t("div",We,[i(Ne,{persist:!0}),Xe,t("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:o[2]||(o[2]=(...I)=>e(v)&&e(v)(...I))},[i(h,{class:"absolute"}),i(b,{class:"absolute opacity-0"})]),t("div",Ye,w(e(l)),1)]),(c(),f(De,{key:2}))],2),t("div",Ze,[t("div",{class:"progress h-3px bg-primary transition-all",style:N({width:`${(e(ge)-1)/(e(ke)-1)*100}%`})},null,4)])]),i($e),i(Se,{modelValue:e(z),"onUpdate:modelValue":o[3]||(o[3]=I=>oe(z)?z.value=I:null)},null,8,["modelValue"])],64)}}}),ut=P(et,[["__scopeId","data-v-5d22dd02"],["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/presenter.vue"]]);export{ut as default};
