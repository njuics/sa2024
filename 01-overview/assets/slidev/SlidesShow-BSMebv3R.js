import{t as P,I as C,aj as $,ak as V,al as Rt,C as xe,am as Lt,d as W,an as Nt,B as lt,ac as Tt,Q as Pt,b as f,e as E,f as he,h as fe,i as T,o as l,c as x,k as M,x as U,m as ct,ao as ut,a8 as ze,ap as Ot,l as w,ae as dt,aq as ht,z as u,F as B,ab as Ce,ar as Vt,g as b,j as pe,as as Dt,S as Oe,aa as Ft,at as jt,a9 as Bt,N as Ve,r as Gt,au as Kt,av as Wt}from"../modules/vue-CnJIpJLC.js";import{x as oe,n as ge,p as ye,s as j,R as Ye,S as Xe,T as ee,U as ft,V as pt,W as ae,X as Me,Y as _t,Z as zt,$ as Ht,a0 as Qt,a1 as vt,t as Ee,f as Ut,m as Ie,l as Yt,c as ke,a2 as Je,y as Xt,_ as G,a3 as De,w as Ae,Q as we,r as Jt,C as Zt,a4 as de,j as Re,a5 as Ze,e as mt,h as Z,a6 as qt,F as es,a7 as ts,a8 as qe,a9 as q,J as _e,aa as ss,ab as ns,K as os,ac as is,ad as rs,b as et,A as as,I as Le,E as re,G as Ne,ae as tt,af as ls,L as cs}from"../index-B06xYRGX.js";import{e as us,f as ds,g as hs,h as fs,i as ps,j as _s,k as vs,l as ms,m as gs,n as gt,o as ys,p as ks,q as ws,r as bs,s as Ss,t as xs,u as Ms,v as $s,w as Cs}from"../modules/unplugin-icons-Bc68jzww.js";import{S as yt,g as kt,G as Es,a as Is}from"./bottom-B94u-vcJ.js";import As from"./DrawingPreview-zVczfu-q.js";const be=P(1),Se=C(()=>oe.length),L=P(0),He=P(0);function Rs(){L.value>be.value&&(L.value-=1)}function Ls(){L.value<Se.value&&(L.value+=1)}function Ns(){if(L.value>be.value){let s=L.value-He.value;s<be.value&&(s=be.value),L.value=s}}function Ts(){if(L.value<Se.value){let s=L.value+He.value;s>Se.value&&(s=Se.value),L.value=s}}function Ps(){const{escape:s,space:e,shift:t,left:n,right:o,up:i,down:r,enter:a,d:c,g:h,o:d,"`":_}=_t;let p=[{name:"next_space",key:$(e,V(t)),fn:ge,autoRepeat:!0},{name:"prev_space",key:$(e,t),fn:ye,autoRepeat:!0},{name:"next_right",key:$(o,V(t),V(j)),fn:ge,autoRepeat:!0},{name:"prev_left",key:$(n,V(t),V(j)),fn:ye,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:ge,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:ye,autoRepeat:!0},{name:"next_down",key:$(r,V(j)),fn:Ye,autoRepeat:!0},{name:"prev_up",key:$(i,V(j)),fn:()=>Xe(!1),autoRepeat:!0},{name:"next_shift",key:$(o,t),fn:Ye,autoRepeat:!0},{name:"prev_shift",key:$(n,t),fn:()=>Xe(!1),autoRepeat:!0},{name:"toggle_dark",key:$(c,V(ee)),fn:ft},{name:"toggle_overview",key:$(Rt(d,_),V(ee)),fn:pt},{name:"hide_overview",key:$(s,V(ee)),fn:()=>j.value=!1},{name:"goto",key:$(h,V(ee)),fn:()=>ae.value=!ae.value},{name:"next_overview",key:$(o,j),fn:Ls},{name:"prev_overview",key:$(n,j),fn:Rs},{name:"up_overview",key:$(i,j),fn:Ns},{name:"down_overview",key:$(r,j),fn:Ts},{name:"goto_from_overview",key:$(a,j),fn:()=>{Me(L.value),j.value=!1}}];const v=new Set(p.map(k=>k.name));if(p.filter(k=>k.name&&v.has(k.name)).length===0){const k=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(k),console.warn(k)}return p}const wt=$(V(Qt),V(Ht),zt);function Os(s,e,t=!1){typeof s=="string"&&(s=_t[s]);const n=$(s,wt);let o=0,i;const r=()=>{if(clearTimeout(i),!n.value){o=0;return}t&&(i=setTimeout(r,Math.max(1e3-o*250,150)),o++),e()};return xe(n,r,{flush:"sync"})}function Vs(s,e){return Lt(s,t=>{wt.value&&(t.repeat||e())})}function qo(){const s=Ps();new Map(s.map(t=>[t.key,t])).forEach(t=>{t.fn&&Os(t.key,t.fn,t.autoRepeat)}),Vs("f",()=>vt.toggle())}const Ds=W({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]},isMain:{type:Boolean,default:!1}},setup(s){const e=s,t=P(),n=Nt(t),o=C(()=>e.width?e.width:n.width.value),i=C(()=>e.width?e.width/Ee:n.height.value);e.width&&lt(()=>{t.value&&(t.value.style.width=`${o.value}px`,t.value.style.height=`${i.value}px`)});const r=C(()=>o.value/i.value),a=C(()=>e.scale&&!Ut.value?e.scale:r.value<Ee?o.value/Ie:i.value*Ee/Ie),c=C(()=>({height:`${Yt}px`,width:`${Ie}px`,transform:`translate(-50%, -50%) scale(${a.value})`,"--slidev-slide-scale":a.value})),h=C(()=>({"select-none":!ke.selectable,"slidev-nav-go-forward":Je.value>0,"slidev-nav-go-backward":Je.value<0}));return e.isMain&&Tt(C(()=>`
    :root {
      --slidev-slide-scale: ${a.value};
    }
  `)),Pt(Xt,a),(d,_)=>(l(),f("div",{id:"slide-container",ref_key:"root",ref:t,class:T(["slidev-slides-container",h.value])},[E("div",{id:"slide-content",class:"slidev-slide-content",style:fe(c.value)},[he(d.$slots,"default")],4),he(d.$slots,"controls")],2))}}),Fs=G(Ds,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/SlideContainer.vue"]]),js={class:"sr-only"},Bs=W({__name:"IconButton",props:{title:{type:String,required:!0},icon:{type:String,required:!1},as:{type:String,required:!1}},setup(s){return(e,t)=>(l(),x(ut(e.as||"button"),ct({class:"slidev-icon-btn",title:e.title},e.$attrs),{default:M(()=>[E("span",js,U(e.title),1),he(e.$slots,"default",{},()=>[E("div",{class:T(e.icon)},null,2)])]),_:3},16,["title"]))}}),D=G(Bs,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/IconButton.vue"]]),Gs=["onClick"],Ks={class:"text-green font-bold"},Ws={class:"opacity-50"},zs={key:1,class:"opacity-50"},Hs={key:0,class:"fixed top-4 right-4 text-gray-400 flex flex-col items-center gap-2"},Te=4*16*2,st=2*16,Qs=W({__name:"QuickOverview",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(s,{emit:e}){const o=ze(s,"modelValue",e);function i(){o.value=!1}function r(v){Me(v),i()}function a(v){return v===L.value}const c=De.smaller("xs"),h=De.smaller("sm"),d=C(()=>c.value?Ae.width.value-Te:h.value?(Ae.width.value-Te-st)/2:300),_=C(()=>Math.floor((Ae.width.value-Te)/(d.value+st))),p=P("");return Ot("keypress",v=>{if(!j.value){p.value="";return}if(v.key==="Enter"){v.preventDefault(),p.value?(r(+p.value),p.value=""):r(L.value);return}const g=Number.parseInt(v.key.replace(/[^0-9]/g,""));if(Number.isNaN(g)){p.value="";return}if(!p.value&&g===0)return;if(p.value+=String(g),+p.value>=oe.length){p.value="";return}const k=oe.findIndex(I=>I.path===p.value);k!==-1&&(L.value=k+1),+p.value*10>oe.length&&(r(+p.value),p.value="")}),lt(()=>{L.value=we.value,He.value=_.value}),(v,g)=>{const k=us,I=ds;return l(),f(B,null,[w(Vt,{"enter-active-class":"duration-150 ease-out","enter-from-class":"opacity-0 scale-102 !backdrop-blur-0px","leave-active-class":"duration-200 ease-in","leave-to-class":"opacity-0 scale-102 !backdrop-blur-0px",persisted:""},{default:M(()=>[dt(E("div",{class:"bg-main !bg-opacity-75 p-16 py-20 overflow-y-auto backdrop-blur-5px fixed left-0 right-0 top-0 h-[calc(var(--vh,1vh)*100)]",onClick:g[0]||(g[0]=S=>i())},[E("div",{class:"grid gap-y-4 gap-x-8 w-full",style:fe(`grid-template-columns: repeat(auto-fit,minmax(${d.value}px,1fr))`)},[(l(!0),f(B,null,Ce(u(oe),(S,A)=>(l(),f("div",{key:S.path,class:"relative"},[E("div",{class:T(["inline-block border rounded overflow-hidden bg-main hover:border-primary transition",a(A+1)||u(L)===A+1?"border-primary":"border-main"]),onClick:y=>r(+S.path)},[(l(),x(Fs,{key:S.path,width:d.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:M(()=>[S!=null&&S.component?(l(),x(u(yt),{key:0,is:S.component,"clicks-context":u(Jt)(S,u(Zt)),class:T(u(kt)(S)),route:S,"render-context":"overview"},null,8,["is","clicks-context","class","route"])):b("v-if",!0),w(As,{page:+S.path},null,8,["page"])]),_:2},1032,["width"]))],10,Gs),E("div",{class:"absolute top-0",style:fe(`left: ${d.value+5}px`)},[p.value&&String(A+1).startsWith(p.value)?(l(),f(B,{key:0},[E("span",Ks,U(p.value),1),E("span",Ws,U(String(A+1).slice(p.value.length)),1)],64)):(l(),f("span",zs,U(A+1),1))],4)]))),128))],4)],512),[[ht,u(o)]])]),_:1}),u(o)?(l(),f("div",Hs,[w(D,{title:"Close",class:"text-2xl",onClick:i},{default:M(()=>[w(k)]),_:1}),w(D,{as:"a",title:"Slides Overview",target:"_blank",href:"/overview","tab-index":"-1",class:"text-2xl"},{default:M(()=>[w(I)]),_:1})])):b("v-if",!0)],64)}}}),ei=G(Qs,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/QuickOverview.vue"]]);function Y(s){return Array.isArray?Array.isArray(s):xt(s)==="[object Array]"}const Us=1/0;function Ys(s){if(typeof s=="string")return s;let e=s+"";return e=="0"&&1/s==-Us?"-0":e}function Xs(s){return s==null?"":Ys(s)}function Q(s){return typeof s=="string"}function bt(s){return typeof s=="number"}function Js(s){return s===!0||s===!1||Zs(s)&&xt(s)=="[object Boolean]"}function St(s){return typeof s=="object"}function Zs(s){return St(s)&&s!==null}function F(s){return s!=null}function Pe(s){return!s.trim().length}function xt(s){return s==null?s===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(s)}const qs="Incorrect 'index' type",en=s=>`Invalid value for key ${s}`,tn=s=>`Pattern length exceeds max of ${s}.`,sn=s=>`Missing ${s} property in key`,nn=s=>`Property 'weight' in key '${s}' must be a positive integer`,nt=Object.prototype.hasOwnProperty;class on{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(n=>{let o=Mt(n);this._keys.push(o),this._keyMap[o.id]=o,t+=o.weight}),this._keys.forEach(n=>{n.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Mt(s){let e=null,t=null,n=null,o=1,i=null;if(Q(s)||Y(s))n=s,e=ot(s),t=Fe(s);else{if(!nt.call(s,"name"))throw new Error(sn("name"));const r=s.name;if(n=r,nt.call(s,"weight")&&(o=s.weight,o<=0))throw new Error(nn(r));e=ot(r),t=Fe(r),i=s.getFn}return{path:e,id:t,weight:o,src:n,getFn:i}}function ot(s){return Y(s)?s:s.split(".")}function Fe(s){return Y(s)?s.join("."):s}function rn(s,e){let t=[],n=!1;const o=(i,r,a)=>{if(F(i))if(!r[a])t.push(i);else{let c=r[a];const h=i[c];if(!F(h))return;if(a===r.length-1&&(Q(h)||bt(h)||Js(h)))t.push(Xs(h));else if(Y(h)){n=!0;for(let d=0,_=h.length;d<_;d+=1)o(h[d],r,a+1)}else r.length&&o(h,r,a+1)}};return o(s,Q(e)?e.split("."):e,0),n?t:t[0]}const an={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ln={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(s,e)=>s.score===e.score?s.idx<e.idx?-1:1:s.score<e.score?-1:1},cn={location:0,threshold:.6,distance:100},un={useExtendedSearch:!1,getFn:rn,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var m={...ln,...an,...cn,...un};const dn=/[^ ]+/g;function hn(s=1,e=3){const t=new Map,n=Math.pow(10,e);return{get(o){const i=o.match(dn).length;if(t.has(i))return t.get(i);const r=1/Math.pow(i,.5*s),a=parseFloat(Math.round(r*n)/n);return t.set(i,a),a},clear(){t.clear()}}}class Qe{constructor({getFn:e=m.getFn,fieldNormWeight:t=m.fieldNormWeight}={}){this.norm=hn(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,n)=>{this._keysMap[t.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Q(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){const t=this.size();Q(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!F(e)||Pe(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach((o,i)=>{let r=o.getFn?o.getFn(e):this.getFn(e,o.path);if(F(r)){if(Y(r)){let a=[];const c=[{nestedArrIndex:-1,value:r}];for(;c.length;){const{nestedArrIndex:h,value:d}=c.pop();if(F(d))if(Q(d)&&!Pe(d)){let _={v:d,i:h,n:this.norm.get(d)};a.push(_)}else Y(d)&&d.forEach((_,p)=>{c.push({nestedArrIndex:p,value:_})})}n.$[i]=a}else if(Q(r)&&!Pe(r)){let a={v:r,n:this.norm.get(r)};n.$[i]=a}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function $t(s,e,{getFn:t=m.getFn,fieldNormWeight:n=m.fieldNormWeight}={}){const o=new Qe({getFn:t,fieldNormWeight:n});return o.setKeys(s.map(Mt)),o.setSources(e),o.create(),o}function fn(s,{getFn:e=m.getFn,fieldNormWeight:t=m.fieldNormWeight}={}){const{keys:n,records:o}=s,i=new Qe({getFn:e,fieldNormWeight:t});return i.setKeys(n),i.setIndexRecords(o),i}function ve(s,{errors:e=0,currentLocation:t=0,expectedLocation:n=0,distance:o=m.distance,ignoreLocation:i=m.ignoreLocation}={}){const r=e/s.length;if(i)return r;const a=Math.abs(n-t);return o?r+a/o:a?1:r}function pn(s=[],e=m.minMatchCharLength){let t=[],n=-1,o=-1,i=0;for(let r=s.length;i<r;i+=1){let a=s[i];a&&n===-1?n=i:!a&&n!==-1&&(o=i-1,o-n+1>=e&&t.push([n,o]),n=-1)}return s[i-1]&&i-n>=e&&t.push([n,i-1]),t}const ne=32;function _n(s,e,t,{location:n=m.location,distance:o=m.distance,threshold:i=m.threshold,findAllMatches:r=m.findAllMatches,minMatchCharLength:a=m.minMatchCharLength,includeMatches:c=m.includeMatches,ignoreLocation:h=m.ignoreLocation}={}){if(e.length>ne)throw new Error(tn(ne));const d=e.length,_=s.length,p=Math.max(0,Math.min(n,_));let v=i,g=p;const k=a>1||c,I=k?Array(_):[];let S;for(;(S=s.indexOf(e,g))>-1;){let N=ve(e,{currentLocation:S,expectedLocation:p,distance:o,ignoreLocation:h});if(v=Math.min(N,v),g=S+d,k){let z=0;for(;z<d;)I[S+z]=1,z+=1}}g=-1;let A=[],y=1,R=d+_;const K=1<<d-1;for(let N=0;N<d;N+=1){let z=0,H=R;for(;z<H;)ve(e,{errors:N,currentLocation:p+H,expectedLocation:p,distance:o,ignoreLocation:h})<=v?z=H:R=H,H=Math.floor((R-z)/2+z);R=H;let ce=Math.max(1,p-H+1),ue=r?_:Math.min(p+H,_)+d,J=Array(ue+2);J[ue+1]=(1<<N)-1;for(let O=ue;O>=ce;O-=1){let ie=O-1,se=t[s.charAt(ie)];if(k&&(I[ie]=+!!se),J[O]=(J[O+1]<<1|1)&se,N&&(J[O]|=(A[O+1]|A[O])<<1|1|A[O+1]),J[O]&K&&(y=ve(e,{errors:N,currentLocation:ie,expectedLocation:p,distance:o,ignoreLocation:h}),y<=v)){if(v=y,g=ie,g<=p)break;ce=Math.max(1,2*p-g)}}if(ve(e,{errors:N+1,currentLocation:p,expectedLocation:p,distance:o,ignoreLocation:h})>v)break;A=J}const X={isMatch:g>=0,score:Math.max(.001,y)};if(k){const N=pn(I,a);N.length?c&&(X.indices=N):X.isMatch=!1}return X}function vn(s){let e={};for(let t=0,n=s.length;t<n;t+=1){const o=s.charAt(t);e[o]=(e[o]||0)|1<<n-t-1}return e}class Ct{constructor(e,{location:t=m.location,threshold:n=m.threshold,distance:o=m.distance,includeMatches:i=m.includeMatches,findAllMatches:r=m.findAllMatches,minMatchCharLength:a=m.minMatchCharLength,isCaseSensitive:c=m.isCaseSensitive,ignoreLocation:h=m.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:o,includeMatches:i,findAllMatches:r,minMatchCharLength:a,isCaseSensitive:c,ignoreLocation:h},this.pattern=c?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(p,v)=>{this.chunks.push({pattern:p,alphabet:vn(p),startIndex:v})},_=this.pattern.length;if(_>ne){let p=0;const v=_%ne,g=_-v;for(;p<g;)d(this.pattern.substr(p,ne),p),p+=ne;if(v){const k=_-ne;d(this.pattern.substr(k),k)}}else d(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let g={isMatch:!0,score:0};return n&&(g.indices=[[0,e.length-1]]),g}const{location:o,distance:i,threshold:r,findAllMatches:a,minMatchCharLength:c,ignoreLocation:h}=this.options;let d=[],_=0,p=!1;this.chunks.forEach(({pattern:g,alphabet:k,startIndex:I})=>{const{isMatch:S,score:A,indices:y}=_n(e,g,k,{location:o+I,distance:i,threshold:r,findAllMatches:a,minMatchCharLength:c,includeMatches:n,ignoreLocation:h});S&&(p=!0),_+=A,S&&y&&(d=[...d,...y])});let v={isMatch:p,score:p?_/this.chunks.length:1};return p&&n&&(v.indices=d),v}}class te{constructor(e){this.pattern=e}static isMultiMatch(e){return it(e,this.multiRegex)}static isSingleMatch(e){return it(e,this.singleRegex)}search(){}}function it(s,e){const t=s.match(e);return t?t[1]:null}class mn extends te{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class gn extends te{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class yn extends te{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class kn extends te{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class wn extends te{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class bn extends te{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class Et extends te{constructor(e,{location:t=m.location,threshold:n=m.threshold,distance:o=m.distance,includeMatches:i=m.includeMatches,findAllMatches:r=m.findAllMatches,minMatchCharLength:a=m.minMatchCharLength,isCaseSensitive:c=m.isCaseSensitive,ignoreLocation:h=m.ignoreLocation}={}){super(e),this._bitapSearch=new Ct(e,{location:t,threshold:n,distance:o,includeMatches:i,findAllMatches:r,minMatchCharLength:a,isCaseSensitive:c,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class It extends te{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t=0,n;const o=[],i=this.pattern.length;for(;(n=e.indexOf(this.pattern,t))>-1;)t=n+i,o.push([n,t-1]);const r=!!o.length;return{isMatch:r,score:r?0:1,indices:o}}}const je=[mn,It,yn,kn,bn,wn,gn,Et],rt=je.length,Sn=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,xn="|";function Mn(s,e={}){return s.split(xn).map(t=>{let n=t.trim().split(Sn).filter(i=>i&&!!i.trim()),o=[];for(let i=0,r=n.length;i<r;i+=1){const a=n[i];let c=!1,h=-1;for(;!c&&++h<rt;){const d=je[h];let _=d.isMultiMatch(a);_&&(o.push(new d(_,e)),c=!0)}if(!c)for(h=-1;++h<rt;){const d=je[h];let _=d.isSingleMatch(a);if(_){o.push(new d(_,e));break}}}return o})}const $n=new Set([Et.type,It.type]);class Cn{constructor(e,{isCaseSensitive:t=m.isCaseSensitive,includeMatches:n=m.includeMatches,minMatchCharLength:o=m.minMatchCharLength,ignoreLocation:i=m.ignoreLocation,findAllMatches:r=m.findAllMatches,location:a=m.location,threshold:c=m.threshold,distance:h=m.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:n,minMatchCharLength:o,findAllMatches:r,ignoreLocation:i,location:a,threshold:c,distance:h},this.pattern=t?e:e.toLowerCase(),this.query=Mn(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let i=0,r=[],a=0;for(let c=0,h=t.length;c<h;c+=1){const d=t[c];r.length=0,i=0;for(let _=0,p=d.length;_<p;_+=1){const v=d[_],{isMatch:g,indices:k,score:I}=v.search(e);if(g){if(i+=1,a+=I,n){const S=v.constructor.type;$n.has(S)?r=[...r,...k]:r.push(k)}}else{a=0,i=0,r.length=0;break}}if(i){let _={isMatch:!0,score:a/i};return n&&(_.indices=r),_}}return{isMatch:!1,score:1}}}const Be=[];function En(...s){Be.push(...s)}function Ge(s,e){for(let t=0,n=Be.length;t<n;t+=1){let o=Be[t];if(o.condition(s,e))return new o(s,e)}return new Ct(s,e)}const $e={AND:"$and",OR:"$or"},Ke={PATH:"$path",PATTERN:"$val"},We=s=>!!(s[$e.AND]||s[$e.OR]),In=s=>!!s[Ke.PATH],An=s=>!Y(s)&&St(s)&&!We(s),at=s=>({[$e.AND]:Object.keys(s).map(e=>({[e]:s[e]}))});function At(s,e,{auto:t=!0}={}){const n=o=>{let i=Object.keys(o);const r=In(o);if(!r&&i.length>1&&!We(o))return n(at(o));if(An(o)){const c=r?o[Ke.PATH]:i[0],h=r?o[Ke.PATTERN]:o[c];if(!Q(h))throw new Error(en(c));const d={keyId:Fe(c),pattern:h};return t&&(d.searcher=Ge(h,e)),d}let a={children:[],operator:i[0]};return i.forEach(c=>{const h=o[c];Y(h)&&h.forEach(d=>{a.children.push(n(d))})}),a};return We(s)||(s=at(s)),n(s)}function Rn(s,{ignoreFieldNorm:e=m.ignoreFieldNorm}){s.forEach(t=>{let n=1;t.matches.forEach(({key:o,norm:i,score:r})=>{const a=o?o.weight:null;n*=Math.pow(r===0&&a?Number.EPSILON:r,(a||1)*(e?1:i))}),t.score=n})}function Ln(s,e){const t=s.matches;e.matches=[],F(t)&&t.forEach(n=>{if(!F(n.indices)||!n.indices.length)return;const{indices:o,value:i}=n;let r={indices:o,value:i};n.key&&(r.key=n.key.src),n.idx>-1&&(r.refIndex=n.idx),e.matches.push(r)})}function Nn(s,e){e.score=s.score}function Tn(s,e,{includeMatches:t=m.includeMatches,includeScore:n=m.includeScore}={}){const o=[];return t&&o.push(Ln),n&&o.push(Nn),s.map(i=>{const{idx:r}=i,a={item:e[r],refIndex:r};return o.length&&o.forEach(c=>{c(i,a)}),a})}class le{constructor(e,t={},n){this.options={...m,...t},this.options.useExtendedSearch,this._keyStore=new on(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof Qe))throw new Error(qs);this._myIndex=t||$t(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){F(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const t=[];for(let n=0,o=this._docs.length;n<o;n+=1){const i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,o-=1,t.push(i))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:n,includeScore:o,shouldSort:i,sortFn:r,ignoreFieldNorm:a}=this.options;let c=Q(e)?Q(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Rn(c,{ignoreFieldNorm:a}),i&&c.sort(r),bt(t)&&t>-1&&(c=c.slice(0,t)),Tn(c,this._docs,{includeMatches:n,includeScore:o})}_searchStringList(e){const t=Ge(e,this.options),{records:n}=this._myIndex,o=[];return n.forEach(({v:i,i:r,n:a})=>{if(!F(i))return;const{isMatch:c,score:h,indices:d}=t.searchIn(i);c&&o.push({item:i,idx:r,matches:[{score:h,value:i,norm:a,indices:d}]})}),o}_searchLogical(e){const t=At(e,this.options),n=(a,c,h)=>{if(!a.children){const{keyId:_,searcher:p}=a,v=this._findMatches({key:this._keyStore.get(_),value:this._myIndex.getValueForItemAtKeyId(c,_),searcher:p});return v&&v.length?[{idx:h,item:c,matches:v}]:[]}const d=[];for(let _=0,p=a.children.length;_<p;_+=1){const v=a.children[_],g=n(v,c,h);if(g.length)d.push(...g);else if(a.operator===$e.AND)return[]}return d},o=this._myIndex.records,i={},r=[];return o.forEach(({$:a,i:c})=>{if(F(a)){let h=n(t,a,c);h.length&&(i[c]||(i[c]={idx:c,item:a,matches:[]},r.push(i[c])),h.forEach(({matches:d})=>{i[c].matches.push(...d)}))}}),r}_searchObjectList(e){const t=Ge(e,this.options),{keys:n,records:o}=this._myIndex,i=[];return o.forEach(({$:r,i:a})=>{if(!F(r))return;let c=[];n.forEach((h,d)=>{c.push(...this._findMatches({key:h,value:r[d],searcher:t}))}),c.length&&i.push({idx:a,item:r,matches:c})}),i}_findMatches({key:e,value:t,searcher:n}){if(!F(t))return[];let o=[];if(Y(t))t.forEach(({v:i,i:r,n:a})=>{if(!F(i))return;const{isMatch:c,score:h,indices:d}=n.searchIn(i);c&&o.push({score:h,key:e,value:i,idx:r,norm:a,indices:d})});else{const{v:i,n:r}=t,{isMatch:a,score:c,indices:h}=n.searchIn(i);a&&o.push({score:c,key:e,value:i,norm:r,indices:h})}return o}}le.version="7.0.0";le.createIndex=$t;le.parseIndex=fn;le.config=m;le.parseQuery=At;En(Cn);const Pn={key:0},On={key:1},Vn={key:2},Dn={key:3},Fn={key:4},jn={key:5},Bn={key:6},Gn={key:7},Kn={key:8},Wn={key:9},zn={key:10},Hn={key:11},Qn={key:12},Un={key:13},Yn={key:14},Xn={key:15},Jn={key:16},Zn={key:17},qn={key:18},eo={key:19},to={key:20},so={key:21},no={key:22},oo={key:23},io={key:24},ro={key:25},ao={key:26},lo={key:27},co={key:28},uo={key:29},ho={key:30},fo={key:31},po={key:32},_o={key:33},vo=W({__name:"titles",props:{no:{type:[Number,String],required:!0}},setup(s){return(e,t)=>(l(),f("div",null,[+e.no==1?(l(),f("p",Pn,"Software Architecture")):+e.no==2?(l(),f("p",On,"主题")):+e.no==3?(l(),f("p",Vn,"Architecture")):+e.no==4?(l(),f("p",Dn,"Architecture defined")):+e.no==5?(l(),f("p",Fn,"Software Artifacts")):+e.no==6?(l(),f("p",jn,"软件危机(Software Crisis)")):+e.no==7?(l(),f("p",Bn,"Software is")):+e.no==8?(l(),f("p",Gn,"Unsuitability of Software")):+e.no==9?(l(),f("p",Kn,"软件工程：软件危机的解决之道")):+e.no==10?(l(),f("p",Wn,"开发软件还是很难")):+e.no==11?(l(),f("p",zn,"Software architecture")):+e.no==12?(l(),f("p",Hn,"Software architecture defined")):+e.no==13?(l(),f("p",Qn,"Some other definitions")):+e.no==14?(l(),f("p",Un,"My favorite one")):+e.no==15?(l(),f("p",Yn,"架构师")):+e.no==16?(l(),f("p",Xn,"架构层设计")):+e.no==17?(l(),f("p",Jn,"Why is SA important?")):+e.no==18?(l(),f("p",Zn,"Communication among stakeholders")):+e.no==19?(l(),f("p",qn,"Stakeholders")):+e.no==20?(l(),f("p",eo,"“mis-communication”")):+e.no==21?(l(),f("p",to,"Earliest design decisions")):+e.no==22?(l(),f("p",so,"Swedish Warship Vasa")):+e.no==23?(l(),f("p",no,"Lessons from Vasa")):+e.no==24?(l(),f("p",oo,"Transferable abstraction of a system")):+e.no==25?(l(),f("p",io,"Patterns")):+e.no==26?(l(),f("p",ro,"Example: Model-View-Controller")):+e.no==27?(l(),f("p",ao,"分类")):+e.no==28?(l(),f("p",lo,"Architectural Patterns")):+e.no==29?(l(),f("p",co,"研究内容")):+e.no==30?(l(),f("p",uo,"aoasbook.org")):+e.no==31?(l(),f("p",ho,"aoasbook.org")):+e.no==32?(l(),f("p",fo,"Explaining SA patterns with Spring")):+e.no==33?(l(),f("p",po,"Spring")):+e.no==34?(l(),f("p",_o,"Spring Projects Covered")):b("v-if",!0)]))}}),mo=G(vo,[["__file","/@slidev/titles.md"]]),go={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},yo=["value","disabled"],ko=["border","onClick"],wo={"w-4":"","text-right":"",op50:"","text-sm":""},bo=W({__name:"Goto",setup(s){const e=P(),t=P(),n=P(),o=P(),i=P(""),r=P(0);function a(y){return y!=null}const c=C(()=>new le(oe.map(y=>{var R;return(R=y.meta)==null?void 0:R.slide}).filter(a),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),h=C(()=>i.value.startsWith("/")?i.value.substring(1):i.value),d=C(()=>c.value.search(h.value).map(y=>y.item)),_=C(()=>!!d.value.length);function p(){if(_.value){const y=d.value.at(r.value||0);y&&Me(y.no)}v()}function v(){i.value="",ae.value=!1}function g(y){y.preventDefault(),r.value++,r.value>=d.value.length&&(r.value=0),I()}function k(y){y.preventDefault(),r.value--,r.value<=-2&&(r.value=d.value.length-1),I()}function I(){var R;const y=(R=o.value)==null?void 0:R[r.value];y&&n.value&&(y.offsetTop+y.offsetHeight>n.value.offsetHeight+n.value.scrollTop?n.value.scrollTo({behavior:"smooth",top:y.offsetTop+y.offsetHeight-n.value.offsetHeight+1}):y.offsetTop<n.value.scrollTop&&n.value.scrollTo({behavior:"smooth",top:y.offsetTop}))}function S(y){r.value=0,i.value=y.target.value}function A(y){Me(y),v()}return xe(ae,async y=>{var R;y?(i.value="",r.value=0,setTimeout(()=>{var K;return(K=t.value)==null?void 0:K.focus()},0)):(R=t.value)==null||R.blur()}),xe(de,()=>{var y;(y=e.value)!=null&&y.contains(de.value)||v()}),(y,R)=>(l(),f("div",{id:"slidev-goto-dialog",ref_key:"container",ref:e,class:T(["fixed right-5 transition-all",u(ae)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[E("div",go,[E("input",{id:"slidev-goto-input",ref_key:"input",ref:t,value:i.value,type:"text",disabled:!u(ae),class:T(["outline-none bg-transparent",{"text-red-400":!_.value&&i.value}]),placeholder:"Goto...",onKeydown:[pe(p,["enter"]),pe(v,["escape"]),pe(g,["down"]),pe(k,["up"])],onInput:S},null,42,yo)]),d.value.length>0?(l(),f("ul",{key:0,ref_key:"list",ref:n,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(l(!0),f(B,null,Ce(d.value,(K,X)=>(l(),f("li",{ref_for:!0,ref_key:"items",ref:o,key:K.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:X===0?"":"t main",class:T(r.value===X?"bg-active op100":"op80"),onClick:Dt(N=>A(K.no),["stop","prevent"])},[E("div",wo,U(K.no),1),w(u(mo),{no:K.no},null,8,["no"])],10,ko))),128))],512)):b("v-if",!0)],2))}}),ti=G(bo,[["__scopeId","data-v-9ed224f5"],["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Goto.vue"]]),So={class:"select-list"},xo={class:"title"},Mo={class:"items"},$o=["onClick"],Co=W({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(s,{emit:e}){const o=ze(s,"modelValue",e,{passive:!0});return(i,r)=>{const a=hs;return l(),f("div",So,[E("div",xo,U(s.title),1),E("div",Mo,[(l(!0),f(B,null,Ce(s.items,c=>(l(),f("div",{key:c.value,class:T(["item",{active:u(o)===c.value}]),onClick:()=>{var h;o.value=c.value,(h=c.onClick)==null||h.call(c)}},[w(a,{class:T(["text-green-500",{"opacity-0":u(o)!==c.value}])},null,8,["class"]),Oe(" "+U(c.display||c.value),1)],10,$o))),128))])])}}}),Eo=G(Co,[["__scopeId","data-v-38e64e7e"],["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/SelectList.vue"]]),Io={class:"text-sm"},Ao=W({__name:"Settings",setup(s){const e=[{display:"Fit",value:0},{display:"1:1",value:1}];return(t,n)=>(l(),f("div",Io,[w(Eo,{modelValue:u(Re),"onUpdate:modelValue":n[0]||(n[0]=o=>Ft(Re)?Re.value=o:null),title:"Scale",items:e},null,8,["modelValue"])]))}}),Ro=G(Ao,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Settings.vue"]]),Lo={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},No=W({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(s,{emit:e}){const o=ze(s,"modelValue",e,{passive:!0}),i=P();return jt(i,()=>{o.value=!1}),(r,a)=>(l(),f("div",{ref_key:"el",ref:i,class:"flex relative"},[E("button",{class:T({disabled:s.disabled}),onClick:a[0]||(a[0]=c=>o.value=!u(o))},[he(r.$slots,"button",{class:T({disabled:s.disabled})})],2),(l(),x(Bt,null,[u(o)?(l(),f("div",Lo,[he(r.$slots,"menu")])):b("v-if",!0)],1024))],512))}}),To=G(No,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/MenuButton.vue"]]),Po={},Oo={class:"w-1px opacity-10 bg-current m-1 lg:m-2"};function Vo(s,e){return l(),f("div",Oo)}const me=G(Po,[["render",Vo],["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),Do={render(){return[]}},Fo={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},jo={class:"my-auto"},Bo={class:"opacity-50"},Go=W({__name:"NavControls",props:{persist:{default:!1}},setup(s){const e=s,t=De.smaller("md"),{isFullscreen:n,toggle:o}=vt,i=C(()=>Ze.value?`?password=${Ze.value}`:""),r=C(()=>`/presenter/${we.value}${i.value}`),a=C(()=>`/${we.value}${i.value}`),c=P();function h(){c.value&&de.value&&c.value.contains(de.value)&&de.value.blur()}const d=C(()=>e.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-main"),_=Ve(),p=Ve();return mt(()=>import("./DrawingControls-Ctpc7CvA.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(v=>p.value=v.default),(v,g)=>{const k=fs,I=ps,S=_s,A=vs,y=bs,R=ms,K=gs,X=gt,N=ys,z=ks,H=Ss,ce=Gt("RouterLink"),ue=xs,J=Ms,Ue=$s,O=Cs,ie=ws;return l(),f("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[E("div",{class:T(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",d.value]),onMouseleave:h},[u(Z)?b("v-if",!0):(l(),x(D,{key:0,title:u(n)?"Close fullscreen":"Enter fullscreen",onClick:u(o)},{default:M(()=>[u(n)?(l(),x(k,{key:0})):(l(),x(I,{key:1}))]),_:1},8,["title","onClick"])),w(D,{class:T({disabled:!u(qt)}),title:"Go to previous slide",onClick:u(ye)},{default:M(()=>[w(S)]),_:1},8,["class","onClick"]),w(D,{class:T({disabled:!u(es)}),title:"Go to next slide",onClick:u(ge)},{default:M(()=>[w(A)]),_:1},8,["class","onClick"]),u(Z)?b("v-if",!0):(l(),x(D,{key:1,title:"Show slide overview",onClick:g[0]||(g[0]=se=>u(pt)())},{default:M(()=>[w(y)]),_:1})),u(ts)?b("v-if",!0):(l(),x(D,{key:2,title:u(qe)?"Switch to light mode theme":"Switch to dark mode theme",onClick:g[1]||(g[1]=se=>u(ft)())},{default:M(()=>[u(qe)?(l(),x(R,{key:0})):(l(),x(K,{key:1}))]),_:1},8,["title"])),w(me),u(Z)?b("v-if",!0):(l(),f(B,{key:3},[!u(q)&&!u(t)&&_.value?(l(),f(B,{key:0},[w(u(_)),w(me)],64)):b("v-if",!0),u(q)?(l(),x(D,{key:1,title:u(_e)?"Hide presenter cursor":"Show presenter cursor",onClick:g[2]||(g[2]=se=>_e.value=!u(_e))},{default:M(()=>[u(_e)?(l(),x(X,{key:0})):(l(),x(N,{key:1}))]),_:1},8,["title"])):b("v-if",!0)],64)),(!u(ke).drawings.presenterOnly||u(q))&&!u(Z)?(l(),f(B,{key:4},[w(D,{class:"relative",title:u(ee)?"Hide drawing toolbar":"Show drawing toolbar",onClick:g[3]||(g[3]=se=>ee.value=!u(ee))},{default:M(()=>[w(z),u(ee)?(l(),f("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:fe({background:u(ss).color})},null,4)):b("v-if",!0)]),_:1},8,["title"]),w(me)],64)):b("v-if",!0),u(Z)?b("v-if",!0):(l(),f(B,{key:5},[u(q)?(l(),x(ce,{key:0,to:a.value,class:"slidev-icon-btn",title:"Play Mode"},{default:M(()=>[w(H)]),_:1},8,["to"])):b("v-if",!0),u(ns)?(l(),x(ce,{key:1,to:r.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:M(()=>[w(ue)]),_:1},8,["to"])):b("v-if",!0),b("v-if",!0),u(q)?(l(),x(D,{key:3,title:"Toggle Presenter Layout",class:"aspect-ratio-initial",onClick:u(is)},{default:M(()=>[w(J),Oe(" "+U(u(os)),1)]),_:1},8,["onClick"])):b("v-if",!0)],64)),(l(),f(B,{key:6},[u(ke).download?(l(),x(D,{key:0,title:"Download as PDF",onClick:u(rs)},{default:M(()=>[w(Ue)]),_:1},8,["onClick"])):b("v-if",!0)],64)),!u(q)&&u(ke).info&&!u(Z)?(l(),x(D,{key:7,title:"Show info",onClick:g[5]||(g[5]=se=>et.value=!u(et))},{default:M(()=>[w(O)]),_:1})):b("v-if",!0),!u(q)&&!u(Z)?(l(),x(To,{key:8},{button:M(()=>[w(D,{title:"Adjust settings"},{default:M(()=>[w(ie)]),_:1})]),menu:M(()=>[w(Ro)]),_:1})):b("v-if",!0),u(Z)?b("v-if",!0):(l(),x(me,{key:9})),E("div",Fo,[E("div",jo,[Oe(U(u(we))+" ",1),E("span",Bo,"/ "+U(u(as)),1)])]),w(u(Do))],34)],512)}}}),si=G(Go,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/NavControls.vue"]]);function Ko(){const s=Kt(),e=P(!1);let t,n;const o=typeof document<"u"&&"startViewTransition"in document;return s.beforeResolve((i,r)=>{var v,g;const a=(v=r.meta.slide)==null?void 0:v.no,c=(g=i.meta.slide)==null?void 0:g.no;if(!(a!==void 0&&c!==void 0&&(r.meta.transition==="view-transition"&&a<c||i.meta.transition==="view-transition"&&c<a))){e.value=!1;return}if(!o){e.value=!1,console.warn("View transition is not supported in your browser, fallback to normal transition.");return}e.value=!0;const h=new Promise((k,I)=>{t=k,n=I});let d;const _=new Promise(k=>d=k);return document.startViewTransition(()=>(d(),h)).finished.then(()=>{n=void 0,t=void 0}),_}),o&&s.afterEach(()=>{t==null||t(),n==null||n()}),e}const Wo={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},zo=W({__name:"PresenterMouse",setup(s){return(e,t)=>{const n=gt;return u(Le).cursor?(l(),f("div",Wo,[w(n,{class:"absolute",style:fe({left:`${u(Le).cursor.x}%`,top:`${u(Le).cursor.y}%`})},null,8,["style"])])):b("v-if",!0)}}}),Ho=G(zo,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),Qo=W({__name:"SlidesShow",props:{renderContext:{type:String,required:!0}},setup(s){xe(re,()=>{var i,r;(i=re.value)!=null&&i.meta&&re.value.meta.preload!==!1&&(re.value.meta.__preloaded=!0),(r=Ne.value)!=null&&r.meta&&Ne.value.meta.preload!==!1&&(Ne.value.meta.__preloaded=!0)},{immediate:!0});const e=Ko(),t=Ve();mt(()=>import("./DrawingLayer-WY0HxNXI.js"),__vite__mapDeps([10,2,5,3,4,6])).then(i=>t.value=i.default);const n=C(()=>oe.filter(i=>{var r;return((r=i.meta)==null?void 0:r.__preloaded)||i===re.value}));function o(){tt.value=!0}return(i,r)=>(l(),f(B,null,[b(" Global Bottom "),w(u(Es)),b(" Slides "),(l(),x(ut(u(e)?"div":Wt),ct(u(tt)?{}:u(ls),{id:"slideshow",tag:"div",onAfterLeave:o}),{default:M(()=>[(l(!0),f(B,null,Ce(n.value,a=>dt((l(),x(u(yt),{key:a.path,is:a==null?void 0:a.component,"clicks-context":u(cs)(a),class:T([u(kt)(a),"overflow-hidden"]),route:a,"render-context":i.renderContext},null,8,["is","clicks-context","class","route","render-context"])),[[ht,a===u(re)]])),128))]),_:1},16)),b(" Global Top "),w(u(Is)),t.value?(l(),x(u(t),{key:0})):b("v-if",!0),u(q)?b("v-if",!0):(l(),x(Ho,{key:1}))],64))}}),ni=G(Qo,[["__scopeId","data-v-2fe83b23"],["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/SlidesShow.vue"]]);export{ti as G,D as I,si as N,ei as Q,ni as S,me as V,Fs as a,qo as r};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-Ctpc7CvA.js","assets/modules/unplugin-icons-Bc68jzww.js","assets/modules/vue-CnJIpJLC.js","assets/modules/shiki-BgDwwTVx.js","assets/modules/shiki-BSchMNmt.css","assets/index-B06xYRGX.js","assets/index-Cg0iU_GL.css","assets/slidev/bottom-B94u-vcJ.js","assets/slidev/DrawingPreview-zVczfu-q.js","assets/DrawingControls-BO6lw4N5.css","assets/slidev/DrawingLayer-WY0HxNXI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}