import{u as g}from"./columns-DBYd1RQ-.js";import{u as d}from"./hooks-BX7YhTW5.js";import{d as f,e as o,f as C,c as b,w as a,i as t,u as e,_ as h}from"./index-0TdPoD8Q.js";const w=f({__name:"index",setup(x){const{loading:i,columns:r,dataList:s,pagination:n,Empty:c,onCurrentChange:l}=g();return(y,P)=>{const p=o("el-empty"),u=o("el-button"),m=o("pure-table");return C(),b(m,{"row-key":"id",alignWhole:"center",showOverflowTooltip:"",loading:e(i),"loading-config":{background:"transparent"},data:e(s).slice((e(n).currentPage-1)*e(n).pageSize,e(n).currentPage*e(n).pageSize),columns:e(r),pagination:e(n),onPageCurrentChange:e(l)},{empty:a(()=>[t(p,{description:"暂无数据","image-size":60},{image:a(()=>[t(e(c))]),_:1})]),operation:a(({row:_})=>[t(u,{plain:"",circle:"",size:"small",title:`查看序号为${_.id}的详情`,icon:e(d)("ri:search-line")},null,8,["title","icon"])]),_:1},8,["loading","data","columns","pagination","onPageCurrentChange"])}}}),B=h(w,[["__scopeId","data-v-db81b3a6"]]);export{B as default};