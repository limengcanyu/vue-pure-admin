import{d as B,r as t,w as D,f as k,j as e,k as a,v as P,e as z,g as p,m as l,z as U,l as d,t as R}from"./index-Bp-Azfsb.js";const S={class:"card-header"},j=p("p",{class:"mb-2"},"不同尺寸、选择透明度、预定义颜色",-1),O=p("p",{class:"mb-2"},"外部触发器",-1),A=B({name:"ColorPicker",__name:"color-picker",setup(T){const o=t("default"),n=t(),r=t(!1),u=t(),_=t("rgba(255, 69, 0, 0.68)"),f=t("hsla(209, 100%, 56%, 0.73)"),v=t(["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]);D(o,m=>m==="disabled"?n.value="default":n.value=o.value);function V(){r.value?u.value.hide():u.value.show(),r.value=!r.value}return(m,s)=>{const g=a("el-link"),c=a("el-radio"),w=a("el-radio-group"),h=a("el-space"),b=a("el-color-picker"),C=a("el-divider"),y=a("el-button"),x=a("el-card"),N=P("tippy");return z(),k(x,{shadow:"never"},{header:e(()=>[p("div",S,[l(h,{wrap:"",size:40},{default:e(()=>[U((z(),k(g,{href:"https://element-plus.org/zh-CN/component/color-picker.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:e(()=>[d(" 颜色选择器 ")]),_:1})),[[N,{content:"点击查看详细文档"}]]),l(w,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=i=>o.value=i),size:"small"},{default:e(()=>[l(c,{value:"large"},{default:e(()=>[d("大尺寸")]),_:1}),l(c,{value:"default"},{default:e(()=>[d("默认尺寸")]),_:1}),l(c,{value:"small"},{default:e(()=>[d("小尺寸")]),_:1}),l(c,{value:"disabled"},{default:e(()=>[d("禁用")]),_:1})]),_:1},8,["modelValue"])]),_:1})])]),default:e(()=>[j,l(b,{modelValue:_.value,"onUpdate:modelValue":s[1]||(s[1]=i=>_.value=i),"show-alpha":"",predefine:v.value,size:n.value,disabled:o.value==="disabled"},null,8,["modelValue","predefine","size","disabled"]),l(C),O,l(h,{wrap:""},{default:e(()=>[l(b,{ref_key:"colorPickerRef",ref:u,modelValue:f.value,"onUpdate:modelValue":s[2]||(s[2]=i=>f.value=i),"show-alpha":"",predefine:v.value,size:n.value,disabled:o.value==="disabled"},null,8,["modelValue","predefine","size","disabled"]),l(y,{size:n.value,disabled:o.value==="disabled",onClick:V},{default:e(()=>[d(R(r.value?"关闭":"打开"),1)]),_:1},8,["size","disabled"])]),_:1})]),_:1})}}});export{A as default};