import{r as n,C as y,E as i,i as t,k as r,v as c,dg as I,b as f,q as M,aw as O}from"./index-3m0KmRGm.js";import{b as S}from"./data-Oq3SvOU0.js";import{d as V}from"./edit-pen-A29bH4uw.js";import{d as j}from"./check-f0nOH8pf.js";function $(){const l=n({}),u=n({}),o=n(-1),v=n(y(S,!0)),m=i(()=>e=>{var a;return(a=l.value[e])==null?void 0:a.value}),s=i(()=>e=>{var a;return(a=u.value[e])==null?void 0:a.editing}),p=i(()=>(e,a=!1)=>["cursor-pointer","ml-2","transition","delay-100",a?["hover:scale-110","hover:text-red-500"]:s.value(e)&&["scale-150","text-red-500"]]),b=[{label:"ID（可编辑）",prop:"id",cellRenderer:({row:e,index:a})=>t("div",{class:"flex-bc w-full h-[32px]",onMouseenter:()=>o.value=a,onMouseleave:()=>d(a)},[r(t("p",null,[e.id]),[[c,!s.value(a)]]),t(I,{"enter-active-class":"animate__animated animate__fadeInUp animate__faster"},{default:()=>[r(t(f("el-input"),{modelValue:m.value(a),onInput:_=>h(_,a)},null),[[c,s.value(a)]])]}),r(t(f("iconify-icon-offline"),{icon:j,class:p.value(a),onClick:()=>C(a)},null),[[c,s.value(a)]]),r(t(f("iconify-icon-offline"),{icon:V,class:p.value(a,!0),onClick:()=>g(e,a)},null),[[c,o.value===a&&!s.value(a)]])])},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}];function g({id:e},a){l.value[a]=Object.assign({},l.value[a],{value:e}),u.value[a]=Object.assign({},u.value[a],{editing:!0})}function d(e){var a;(a=l.value[e])!=null&&a.value?o.value=e:o.value=-1}function h(e,a){l.value[a].value=e}function C(e){v.value[e].id=l.value[e].value,M(`您编辑了第 ${e+1} 行，编辑后数据为：${JSON.stringify(v.value[e])}`,{type:"success"}),u.value[e]=Object.assign({},u.value[e],{editing:!1}),O().then(()=>l.value[e].value=null)}return{columns:b,dataList:v}}export{$ as useColumns};