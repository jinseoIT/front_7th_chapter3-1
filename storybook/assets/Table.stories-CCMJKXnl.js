import{j as S}from"./jsx-runtime-D_zvdyIk.js";import{T as v}from"./Table-ac4SfsnE.js";import{B as D}from"./Badge-DFHGS-C-.js";import"./iframe-BSnAbuZu.js";import"./preload-helper-DoRU6K4M.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";const j={title:"UI/Table",component:v,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{striped:{control:"boolean",description:"Striped rows"},bordered:{control:"boolean",description:"Bordered table"},hover:{control:"boolean",description:"Hover effect"},searchable:{control:"boolean",description:"Enable search"},sortable:{control:"boolean",description:"Enable sorting"},pageSize:{control:"number",description:"Items per page"}}},e=[{id:1,name:"John Doe",email:"john@example.com",age:28,status:"active"},{id:2,name:"Jane Smith",email:"jane@example.com",age:34,status:"active"},{id:3,name:"Bob Johnson",email:"bob@example.com",age:45,status:"inactive"},{id:4,name:"Alice Williams",email:"alice@example.com",age:23,status:"active"},{id:5,name:"Charlie Brown",email:"charlie@example.com",age:37,status:"pending"},{id:6,name:"Diana Prince",email:"diana@example.com",age:31,status:"active"},{id:7,name:"Ethan Hunt",email:"ethan@example.com",age:42,status:"inactive"},{id:8,name:"Fiona Green",email:"fiona@example.com",age:29,status:"active"},{id:9,name:"George Wilson",email:"george@example.com",age:55,status:"pending"},{id:10,name:"Helen Davis",email:"helen@example.com",age:26,status:"active"}],a=[{key:"id",header:"ID",width:"80px"},{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"age",header:"Age",width:"100px"},{key:"status",header:"Status",width:"120px",render:r=>{const s=String(r),k=s==="active"?"success":s==="inactive"?"danger":"warning";return S.jsx(D,{variant:k,children:s})}}],t={args:{columns:a,data:e}},o={args:{columns:a,data:e,striped:!0}},n={args:{columns:a,data:e,bordered:!0}},c={args:{columns:a,data:e,hover:!0}},u={args:{columns:a,data:e,searchable:!0}},i={args:{columns:a,data:e,sortable:!0}},m={args:{columns:a,data:e,pageSize:5}},d={args:{columns:a,data:e,striped:!0,hover:!0,searchable:!0,sortable:!0,pageSize:5}},l={args:{columns:a,data:e,hover:!0,onRowClick:r=>alert(`Clicked on ${r.name}`)}},p={args:{columns:a,data:[],searchable:!0}},g={args:{columns:a,data:e.slice(0,3),striped:!0,bordered:!0}},C=[{id:1,name:"Laptop",category:"Electronics",price:1200,stock:15},{id:2,name:"Mouse",category:"Electronics",price:25,stock:150},{id:3,name:"Keyboard",category:"Electronics",price:75,stock:80},{id:4,name:"Monitor",category:"Electronics",price:300,stock:45},{id:5,name:"Desk Chair",category:"Furniture",price:250,stock:30}],x=[{key:"id",header:"Product ID",width:"100px"},{key:"name",header:"Product Name"},{key:"category",header:"Category",width:"150px"},{key:"price",header:"Price",width:"120px",render:r=>`$${r}`},{key:"stock",header:"Stock",width:"100px",render:r=>{const s=Number(r);return S.jsx(D,{variant:s>50?"success":s>20?"warning":"danger",children:s})}}],h={args:{columns:x,data:C,striped:!0,hover:!0,sortable:!0}},b={args:{data:e.slice(0,5),striped:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    columns: userColumns,
    data: userData
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    columns: userColumns,
    data: userData,
    striped: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    columns: userColumns,
    data: userData,
    bordered: true
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    columns: userColumns,
    data: userData,
    hover: true
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    columns: userColumns,
    data: userData,
    searchable: true
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    columns: userColumns,
    data: userData,
    sortable: true
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    columns: userColumns,
    data: userData,
    pageSize: 5
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    columns: userColumns,
    data: userData,
    striped: true,
    hover: true,
    searchable: true,
    sortable: true,
    pageSize: 5
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    columns: userColumns,
    data: userData,
    hover: true,
    onRowClick: (row: User) => alert(\`Clicked on \${row.name}\`)
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    columns: userColumns,
    data: [],
    searchable: true
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    columns: userColumns,
    data: userData.slice(0, 3),
    striped: true,
    bordered: true
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    columns: productColumns,
    data: productData,
    striped: true,
    hover: true,
    sortable: true
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    data: userData.slice(0, 5),
    striped: true
  }
}`,...b.parameters?.docs?.source}}};const F=["Default","Striped","Bordered","Hover","WithSearch","WithSorting","WithPagination","FullFeatured","WithRowClick","EmptyData","SmallDataset","ProductTable","AutoColumns"];export{b as AutoColumns,n as Bordered,t as Default,p as EmptyData,d as FullFeatured,c as Hover,h as ProductTable,g as SmallDataset,o as Striped,m as WithPagination,l as WithRowClick,u as WithSearch,i as WithSorting,F as __namedExportsOrder,j as default};
