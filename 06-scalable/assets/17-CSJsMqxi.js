import{o as l,c as t,k as i,q as o,s as r,A as a,e as s,a6 as e}from"./modules/vue-CyVBQAnX.js";import{I as p}from"./slidev/default-BXwXGoqN.js";import{_ as c,am as n}from"./index-DK5cJv9W.js";import{p as d,u as _,f as u}from"./slidev/context-DK7fZVI-.js";import"./modules/shiki-B34Zut0U.js";const m="/sa2024/06-scalable/assets/05-exp-haproxy-CO-RA8Ix.png",f=s("h1",null,"L4 实验: HAProxy（TCP mode）",-1),h=s("img",{src:m,class:"m-5 h-30"},null,-1),b=s("p",null,[s("a",{href:"https://www.bilibili.com/video/BV1X7411S7yM?p=3",target:"_blank",rel:"noopener"},"https://www.bilibili.com/video/BV1X7411S7yM?p=3"),e(" (23:00)")],-1),k=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-"},[s("span",{class:"line"},[s("span",null,"defaults")]),e(`
`),s("span",{class:"line"},[s("span",null,"    mode tcp")]),e(`
`),s("span",{class:"line"},[s("span",null,"frontend lb-app-pi")]),e(`
`),s("span",{class:"line"},[s("span",null,"    bind *:8080")]),e(`
`),s("span",{class:"line"},[s("span",null,"    default_backend servers")]),e(`
`),s("span",{class:"line"},[s("span",null,"backend servers")]),e(`
`),s("span",{class:"line"},[s("span",null,"    balance roundrobin")]),e(`
`),s("span",{class:"line"},[s("span",null,"    server server1 localhost:8081")]),e(`
`),s("span",{class:"line"},[s("span",null,"    ...")])])],-1),v={__name:"17",setup(g){return d(n),_(),(x,w)=>(l(),t(p,o(r(a(u)(a(n),16))),{default:i(()=>[f,h,b,k]),_:1},16))}},A=c(v,[["__file","/@slidev/slides/17.md"]]);export{A as default};
