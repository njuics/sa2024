import{a2 as n,a8 as r,t as u,y as $,av as j,aB as v}from"../modules/vue-uEYNCD1x.js";import{T as p,a2 as C,aq as x,a1 as S,Z as T,$ as R,ar as l,Y as k,as as E,at as F}from"../index-CIyRdoXZ.js";function g(){const t=n(x),a=r(t,"nav"),s=n(S).value,e=r(s,"current"),i=n(T),c=n(R),o=n(l,{}),d=n(k,void 0),m=n(p,u(1)),f=n(C,$(()=>1));return{$slidev:t,$nav:a,$clicksContext:s,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:m,$zoom:f}}function b(t){var i,c;j(l,t);const{$slidev:a,$page:s}=g(),e=a.nav.slides.find(o=>o.no===s.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function y(t,a){return{...v(t,a===0?E:F),frontmatter:t}}export{y as f,b as p,g as u};