import{d as g,P as x,r as i,ad as I,u as n,L as k,o as w,j as R,m as L,f as P,k as S,g as V,n as B,_ as E}from"./index-0TdPoD8Q.js";const b=["element-loading-text"],D=["src"],j=g({name:"FrameView",__name:"frameView",props:{frameInfo:{}},setup(v){var m,u,d;const o=v,{t:h}=x(),f=i(!0),t=I(),r=i(""),l=i(null);(m=n(t.meta))!=null&&m.frameSrc&&(r.value=(u=n(t.meta))==null?void 0:u.frameSrc),((d=n(t.meta))==null?void 0:d.frameLoading)===!1&&c();function c(){f.value=!1}function p(){B(()=>{const e=n(l);if(!e)return;const a=e;a.attachEvent?a.attachEvent("onload",()=>{c()}):e.onload=()=>{c()}})}return k(()=>t.fullPath,e=>{var a,s,_;t.name==="Redirect"&&e.includes((a=o.frameInfo)==null?void 0:a.fullPath)&&(r.value=e,f.value=!0),((s=o.frameInfo)==null?void 0:s.fullPath)===e&&(r.value=(_=o.frameInfo)==null?void 0:_.frameSrc)}),w(()=>{p()}),(e,a)=>{const s=R("loading");return L((P(),S("div",{class:"frame","element-loading-text":n(h)("status.hsLoad")},[V("iframe",{ref_key:"frameRef",ref:l,src:r.value,class:"frame-iframe"},null,8,D)],8,b)),[[s,f.value]])}}}),C=E(j,[["__scopeId","data-v-355ebebf"]]);export{C as default};