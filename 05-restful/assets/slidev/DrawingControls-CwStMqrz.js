import{r as j,z as P,A as G,B as H,C as J,D as O,E as T,F as Y,G as Q,H as W,I as X,J as Z}from"../modules/unplugin-icons-CfAESjuq.js";import{d as $,t as h,a2 as ee,ay as ne,b as z,f as se,h as B,z as e,o as f,c as y,k as o,l as s,i as l,e as r,x as te,ah as w,ai as oe,ae as le,F as ae,as as b,g as ie}from"../modules/vue-BoI2EFOv.js";import{L as re}from"../modules/shiki-DdzKTf6Q.js";import{_ as L,am as i,ab as m,an as ue,ao as ce,ap as de,aq as _e,ar as pe,as as u,U as _,at as D}from"../index-CTBKgxrZ.js";import{I as a,V as C}from"./SlidesShow-aZvHWNC2.js";import"./bottom-DYeMWyTH.js";import"./DrawingPreview-DOv9aIwT.js";const me=$({__name:"Draggable",props:{storageKey:{type:String,required:!1},initial:{type:Object,required:!1}},setup(x){const g=x,v=h(null),p=g.initial??{x:0,y:0},c=g.storageKey?ee(g.storageKey,p):h(p),{style:k}=ne(v,{initialValue:c});return(d,n)=>(f(),z("div",{ref_key:"el",ref:v,class:"fixed",style:B(e(k))},[se(d.$slots,"default")],4))}}),ge=L(me,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Draggable.vue"]]),we=r("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[r("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1),fe=r("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},[r("line",{x1:"2",y1:"15",x2:"22",y2:"4",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}),r("line",{x1:"2",y1:"24",x2:"28",y2:"10",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),r("line",{x1:"7",y1:"31",x2:"29",y2:"19",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1),ve={class:"flex bg-main p-2"},be={class:"inline-block w-7 text-center"},ke={class:"pt-.5"},ye=$({__name:"DrawingControls",setup(x){function g(){D.undo()}function v(){D.redo()}let p="stylus";function c(d){i.value=d,_.value=!0,d!=="eraseLine"&&(p=d)}function k(d){m.color=d,_.value=!0,i.value=p}return(d,n)=>{const M=j,S=P,V=G,U=H,E=J,q=O,A=T,F=Y,I=Q,K=W,N=X,R=Z;return f(),y(ge,{class:l(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-20 border border-main",e(_)?"":e(u)?"opacity-40 hover:opacity-90":"opacity-0 pointer-events-none"]),"storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:o(()=>[s(a,{title:"Draw with stylus",class:l({shallow:e(i)!=="stylus"}),onClick:n[0]||(n[0]=t=>c("stylus"))},{default:o(()=>[s(M)]),_:1},8,["class"]),s(a,{title:"Draw a line",class:l({shallow:e(i)!=="line"}),onClick:n[1]||(n[1]=t=>c("line"))},{default:o(()=>[we]),_:1},8,["class"]),s(a,{title:"Draw an arrow",class:l({shallow:e(i)!=="arrow"}),onClick:n[2]||(n[2]=t=>c("arrow"))},{default:o(()=>[s(S)]),_:1},8,["class"]),s(a,{title:"Draw an ellipse",class:l({shallow:e(i)!=="ellipse"}),onClick:n[3]||(n[3]=t=>c("ellipse"))},{default:o(()=>[s(V)]),_:1},8,["class"]),s(a,{title:"Draw a rectangle",class:l({shallow:e(i)!=="rectangle"}),onClick:n[4]||(n[4]=t=>c("rectangle"))},{default:o(()=>[s(U)]),_:1},8,["class"]),s(a,{title:"Erase",class:l({shallow:e(i)!=="eraseLine"}),onClick:n[5]||(n[5]=t=>c("eraseLine"))},{default:o(()=>[s(E)]),_:1},8,["class"]),s(C),s(e(re),null,{popper:o(()=>[r("div",ve,[r("div",be,te(e(m).size),1),r("div",ke,[w(r("input",{"onUpdate:modelValue":n[6]||(n[6]=t=>e(m).size=t),type:"range",min:"1",max:"15",onChange:n[7]||(n[7]=t=>i.value=e(p))},null,544),[[oe,e(m).size]])])])]),default:o(()=>[s(a,{title:"Adjust stroke width",class:l({shallow:e(i)==="eraseLine"})},{default:o(()=>[fe]),_:1},8,["class"])]),_:1}),(f(!0),z(ae,null,le(e(ue),t=>(f(),y(a,{key:t,title:"Set brush color",class:l(e(m).color===t&&e(i)!=="eraseLine"?"active":"shallow"),onClick:Ce=>k(t)},{default:o(()=>[r("div",{class:l(["w-6 h-6 transition-all transform border",e(m).color!==t?"rounded-1/2 scale-85 border-white":"rounded-md border-gray-300/50"]),style:B(e(_)?{background:t}:{borderColor:t})},null,6)]),_:2},1032,["class","onClick"]))),128)),s(C),s(a,{title:"Undo",class:l({disabled:!e(ce)}),onClick:n[8]||(n[8]=t=>g())},{default:o(()=>[s(q)]),_:1},8,["class"]),s(a,{title:"Redo",class:l({disabled:!e(de)}),onClick:n[9]||(n[9]=t=>v())},{default:o(()=>[s(A)]),_:1},8,["class"]),s(a,{title:"Delete",class:l({disabled:!e(_e)}),onClick:n[10]||(n[10]=t=>e(pe)())},{default:o(()=>[s(F)]),_:1},8,["class"]),s(C),s(a,{title:e(u)?"Unpin drawing":"Pin drawing",class:l({shallow:!e(u)}),onClick:n[11]||(n[11]=t=>u.value=!e(u))},{default:o(()=>[w(s(I,{class:"transform -rotate-45"},null,512),[[b,e(u)]]),w(s(K,null,null,512),[[b,!e(u)]])]),_:1},8,["title","class"]),e(_)?(f(),y(a,{key:0,title:e(u)?"Drawing pinned":"Drawing unpinned",class:l({shallow:!e(_)}),onClick:n[12]||(n[12]=t=>_.value=!e(_))},{default:o(()=>[w(s(N,null,null,512),[[b,e(u)]]),w(s(R,null,null,512),[[b,!e(u)]])]),_:1},8,["title","class"])):ie("v-if",!0)]),_:1},8,["class"])}}}),Me=L(ye,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/DrawingControls.vue"]]);export{Me as default};